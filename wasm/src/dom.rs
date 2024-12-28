//use web_sys::{Node, DocumentFragment, Text, Element};
use std::ops::Deref;
#[derive(Clone, Debug)]
pub struct Graph(web_sys::Document);
#[derive(Clone, PartialEq, Eq, Debug)]
pub struct Branch(web_sys::Element);

#[derive(Clone, PartialEq, Eq, Debug)]
enum LeafData{
    Text(web_sys::Text),
    VoidEl(web_sys::Element),
}

impl From<LeafData> for web_sys::Node {
    fn from(d : LeafData) -> Self {
        match d {
            LeafData::Text(t) => t.into(),
            LeafData::VoidEl(el) => el.into(),
        }
    }
}

#[derive(Clone, PartialEq, Eq, Debug)]
pub struct Leaf(LeafData);

#[derive(Debug)]
pub struct GraphRef<'a>{
    br : Branch,
    mk : std::marker::PhantomData<&'a Graph>,
}
impl<'a> Deref for GraphRef<'a>{
    type Target = Branch;
    fn deref(&self) -> &Branch {
        &self.br
    }
}

#[derive(Eq, PartialEq, Copy, Clone, Debug, Default)]
pub struct BranchOpt{
    pub class : Option<&'static str>,
    pub id : Option<&'static str>,
}

impl Graph{
    pub fn try_new() -> Option<Self> {
        web_sys::window().and_then(|w| w.document()).map(|dc| Self(dc))
    }
    pub fn new_text(&self, text : &str) -> Leaf {
        Leaf(LeafData::Text(self.0.create_text_node(text)))
    }
    fn new_branch(&self, tag : &'static str, opt : BranchOpt) -> Branch {
        let b : web_sys::Element = self.0.create_element(tag).expect("invalid").into();
        match opt.class {
            Some(st) => b.set_class_name(st),
            None => {}
        }
        match opt.id {
            Some(st) => b.set_id(st),
            None => {}
        }
        Branch(b)
    }
    pub fn new_emph(&self, opt : BranchOpt) -> Branch {
        self.new_branch("em", opt)
    }
    pub fn new_div(&self, opt : BranchOpt) -> Branch {
        self.new_branch("div", opt)
    }
    pub fn root<'a>(&'a self) -> Option<GraphRef<'a>> {
        self.0.get_element_by_id("main").map(|e| GraphRef{br : Branch(e), mk : std::marker::PhantomData})
    }
}
impl Branch{
    pub fn add_branch(&self, b : Branch) {
        self.0.append_child(&b.0).expect("invalid");
    }
    pub fn add_leaf(&self, b : Leaf) {
        self.0.append_child(&b.0.into()).expect("invalid");//Is an Element or a Text
    }
}
