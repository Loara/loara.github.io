//! Styling atoms for both HTML and TeX elements

use crate::dom::{Branch, OnlineElem, TagBody, Label};
use crate::tex::{TeXBranch, TeXElem};
use std::fmt::Debug;
use crate::info::Info;
use crate::langs::Langed;
use std::ops::Deref;

/// An HTML and TeX element
pub trait Elem : OnlineElem + TeXElem + Debug {}

impl<T : OnlineElem + TeXElem + Debug> Elem for T {}

impl OnlineElem for Label {
    fn to_html(&self, out : Branch, _info : &Info) -> Branch {
        out.append_text(&self)
    }
}
impl TeXElem for Label {
    fn to_tex(&self, out : TeXBranch, _info : &Info) -> TeXBranch {
        out.append_text(&self)
    }
}

/// Array of styling elements
#[derive(Debug, Default)]
pub struct Array{
    v : Vec<Box<dyn Elem>>,
}

impl Array {
    pub fn new() -> Self {
        Self {v : Vec::new()}
    }
    pub fn push<T : Elem + 'static>(mut self, el : T) -> Self {
        self.v.push(Box::new(el));
        self
    }
}

impl OnlineElem for Array {
    fn to_html(&self, out : Branch, info : &Info) -> Branch {
        self.v.iter().fold(out, |o, i| i.to_html(o, info))
    }
}
impl TeXElem for Array {
    fn to_tex(&self, out : TeXBranch, info : &Info) -> TeXBranch {
        self.v.iter().fold(out, |o, i| i.to_tex(o, info))
    }
}

/// Emphatization
#[derive(Debug)]
pub struct Emph<T : Elem>(pub T); 

impl<T : Elem> OnlineElem for Emph<T> {
    fn to_html(&self, out : Branch, info : &Info) -> Branch {
        out.append_elem_into(TagBody::Emph, &self.0, info)
    }
}
impl<T : Elem> TeXElem for Emph<T> {
    fn to_tex(&self, out : TeXBranch, info : &Info) -> TeXBranch {
        out.append_emph( |o| self.0.to_tex(o, info))
    }
}

/// A section
#[derive(Debug)]
pub struct Section<T : Elem>{
    pub tit : Label,
    pub body : T,
} 

impl<T : Elem> OnlineElem for Section<T> {
    fn to_html(&self, out : Branch, info : &Info) -> Branch {
        out.append_elem_into(TagBody::H2, &self.tit, info)
            .append_elem(&self.body, info)
    }
}
impl<T : Elem> TeXElem for Section<T> {
    fn to_tex(&self, out : TeXBranch, info : &Info) -> TeXBranch {
        out.append_section( |o| self.tit.to_tex(o, info))
            .skip_par()
            .append_branch(&self.body, info)
    }
}

/// A bulleted list
#[derive(Debug)]
pub struct List{
    pub ve : Array,
}

impl OnlineElem for List {
    fn to_html(&self, out : Branch, info : &Info) -> Branch {
        out.append_tagbody(TagBody::UL, |oo| 
            self.ve.v.iter().fold(oo, |o, item| o.append_elem_into(TagBody::IL, item.deref(), info))
        )
    }
}
impl TeXElem for List {
    fn to_tex(&self, out : TeXBranch, info : &Info) -> TeXBranch {
        out.append_itemize( |i| 
            self.ve.v.iter().fold(i, |o, item| o.append_item(|oo| item.to_tex(oo, info)))
        )
    }
}

/// A multilingual element
#[derive(Debug)]
pub struct LangItem(Langed<Box<dyn Elem + 'static>>);

impl LangItem {
    pub fn new<IT : Elem + 'static, EN : Elem + 'static>(en : EN, it : IT) -> Self {
        Self(Langed::new(Box::new(en), Box::new(it)))
    }
}

impl OnlineElem for LangItem {
    fn to_html(&self, out : Branch, info : &Info) -> Branch {
        self.0.map(info.lang, |i| i.to_html(out, info))
    }
}
impl TeXElem for LangItem {
    fn to_tex(&self, out : TeXBranch, info : &Info) -> TeXBranch {
        self.0.map(info.lang, |i| i.to_tex(out, info))
    }
}

