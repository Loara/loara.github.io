use crate::dom::{TagBody, Branch, BranchError};
use crate::langs::{Lang, for_each_lang};
use crate::info::Info;
use crate::pages::{MainPage, PageName, WebPage, NameLoc};
use std::sync::{OnceLock, RwLock};

pub static STATE : OnceLock<GlobalLockState> = OnceLock::new();

#[derive(Debug, Eq, PartialEq, Copy, Clone, Default)]
pub struct PageReq{
    lang : Option<Lang>,
    page : Option<PageName>,
}

#[derive(Debug)]
pub struct GlobalState{
    pub(crate) info : Info,
    pub(crate) page : PageName,
    pub(crate) main : MainPage,
    pub(crate) lang_toggle : bool
}
#[derive(Debug)]
pub struct GlobalLockState(pub RwLock<GlobalState>);

impl From<GlobalState> for GlobalLockState {
    fn from(t : GlobalState) -> Self {
        Self(t.into())
    }
}

impl GlobalLockState {
    pub fn get_current_lang(&self) -> Lang {
        self.0.read().unwrap().info.lang
    }
    pub fn get_current_page_name(&self) -> PageName {
        self.0.read().unwrap().page
    }
    pub fn push_other_langs(&self, branch : Branch) -> Branch {
        let lng = self.get_current_lang();
        for_each_lang(branch, |b, l| {
            if l != lng {
                b.append_tagbody(TagBody::A{href : "#".into()}, |u| {
                    u.append_text(&l.to_string())
                })
            }
            else {
                b
            }
        })
    }
}

impl GlobalState {
    pub fn current_page(&self) -> &dyn WebPage {
        match self.page {
            PageName::Main => &self.main,
        }
    }
    fn pack_page(&self, _doc : &web_sys::Document) -> Result<(), BranchError> {Ok(())}
    fn pack_any(&self, doc : &web_sys::Document) -> Result<(), BranchError> {
        let cur = self.current_page();
        cur.to_html(Branch::new(doc), &self.info).in_main();
        Branch::new(doc).append_text(&cur.name(&self.info, NameLoc::Title)).in_id("mtitle")
    }
    fn pack_lang(&self, doc : &web_sys::Document) -> Result<(), BranchError> {
        let cur = self.current_page();
        Branch::new(doc).append_text(&cur.name(&self.info, NameLoc::Upbar)).in_each_class(self.page.class_name_low());
        Branch::new(doc).append_text(self.info.lang.as_ref()).in_id("nav_lang")
    }
    pub fn require_page(&mut self, doc : &web_sys::Document, req : PageReq) -> Result<(), BranchError> {
        let mut ml = false;
        let mut mp = false;
        match req.lang {
            None => {}
            Some(l) => {
                if self.info.lang != l {
                    ml = true;
                    self.info.lang = l;
                }
            }
        }
        match req.page {
            None => {}
            Some(p) => {
                if self.page != p {
                    mp = true;
                    self.page = p;
                }
            }
        }
        if ml || mp {
            self.pack_any(doc)?;
        }
        if ml {
            self.pack_lang(doc)?;
        }
        if mp {
            self.pack_page(doc)?;
        }
        Ok(())
    }
    pub fn pack_all(&mut self, doc : &web_sys::Document) -> Result<(), BranchError> {
        self.pack_any(doc)?;
        self.pack_lang(doc)?;
        self.pack_page(doc)?;
        Ok(())
    }
}

