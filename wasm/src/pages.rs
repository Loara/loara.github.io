use crate::langs::{Langed};
use crate::dom::{Branch, BranchOpt, OnlineElem, TagEmpty, TagBody, Label};
use crate::info::Info;

#[derive(Debug, Eq, PartialEq, Copy, Clone)]
pub enum PageName{
    Main,
}
impl<'a> std::convert::TryFrom<&'a str> for PageName {
    type Error = &'a str;

    fn try_from(v : &'a str) -> Result<PageName, &'a str> {
        match v {
            "main" | "Main" => Ok(PageName::Main),
            vv => Err(vv),
        }
    }
}
impl PageName {
    pub fn class_name_up(&self) -> &'static str {
        match self {
            Self::Main => "n-hom",
        }
    }
    pub fn class_name_low(&self) -> &'static str {
        match self {
            Self::Main => "m-hom",
        }
    }
}
#[derive(Debug, Eq, PartialEq, Copy, Clone)]
pub enum NameLoc{
    Title,
    Upbar,
    Lowbar,
}
pub trait WebPage : OnlineElem {
    fn name(&self, info : &Info, loc : NameLoc) -> Label;
}

#[derive(Debug)]
pub struct MainPage{
    cit : Langed<Label>,
}


impl MainPage{
    pub fn new() -> Self {
        Self{
            cit : Langed::new("I think that at the origin of creativity there is what I call the ability or willingness to dream; to imagine different worlds, different things, trying to combine them in your imagination in various ways.".into(),
            "Io penso che all'origine della creatività ci sia quella che io chiamo la capacità o la disponibilità a sognare; a immaginare mondi diversi, cose diverse, cercando di combinarle nella propria immaginazione in vario modo.".into()),
        }
    }
}

impl OnlineElem for MainPage {
    fn to_html(&self, out : Branch, info : &Info) -> Branch {
        out.append_tag_opt(TagEmpty::Img{src : "img/foto.jpg".into()}, BranchOpt{
            class : Some("maimage".into()),
            id : None,
        })
        .append_tagbody(TagBody::Div, |t| {
            t.append_tagbody_opt(TagBody::Div, BranchOpt{
                class : Some("citation".into()),
                id : None,
            }, |br| {
                br.append_text(self.cit.get(info.lang))
            })
            .append_tagbody_opt(TagBody::Div, BranchOpt{
                class : Some("citation_author".into()),
                id : None,
            }, |br| {
                br.append_text("Ennio De Giorgi")
            })
        })
    }
}

impl WebPage for MainPage {
    fn name(&self, _info : &Info, loc : NameLoc) -> Label {
        match loc {
            NameLoc::Title => "Paolo De Donato".into(),
            NameLoc::Upbar => "Home".into(),
            NameLoc::Lowbar => "HOME".into(),
        }
    }
}
    
