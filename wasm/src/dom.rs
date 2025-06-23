use crate::info::Info;
use wasm_bindgen::{JsCast};
use thiserror::Error;

pub type Label = std::borrow::Cow<'static, str>;

#[derive(Error, Debug)]
pub enum BranchError{
    #[error("Missing element with id `{0}`")]
    MissingId(Label),
}

#[derive(Clone, Debug)]
pub struct Branch(web_sys::Document, web_sys::Node);

#[derive(Eq, PartialEq, Copy, Clone, Debug, Default)]
pub struct BranchOpt{
    pub class : Option<&'static str>,
    pub id : Option<&'static str>,
}

pub trait Tag {
    fn generate_val(&self, graph : &web_sys::Document) -> web_sys::Element;

    fn generate(self, graph : &web_sys::Document) -> web_sys::Element where Self : Sized {
        self.generate_val(graph)
    }
}

#[derive(Eq, PartialEq, Clone, Debug)]
#[non_exhaustive]
pub enum TagEmpty{
    Img{src : Label},
    BR,
}
#[derive(Eq, PartialEq, Clone, Debug)]
#[non_exhaustive]
pub enum TagBody{
    Div,
    Emph,
    A{href : Label},
    AScript{onclick : Label},
    H1,
    H2,
    H3,
    UL,
    IL,
}

impl Tag for TagEmpty{
    fn generate_val(&self, graph : &web_sys::Document) -> web_sys::Element {
        match self {
            Self::Img{src} => {
                let el = graph.create_element("img").unwrap();
                el.set_attribute("src", &src).unwrap();
                el
            }
            Self::BR => graph.create_element("br").unwrap(),
        }
    }
}
impl Tag for TagBody{
    fn generate_val(&self, graph : &web_sys::Document) -> web_sys::Element {
        match self {
            Self::Div => graph.create_element("div").unwrap(),
            Self::Emph =>  graph.create_element("emph").unwrap(),
            Self::H1 =>  graph.create_element("h1").unwrap(),
            Self::H2 =>  graph.create_element("h2").unwrap(),
            Self::H3 =>  graph.create_element("h3").unwrap(),
            Self::UL =>  graph.create_element("ul").unwrap(),
            Self::IL =>  graph.create_element("il").unwrap(),
            Self::A{href} => {
                let el = graph.create_element("a").unwrap();
                el.set_attribute("href", &href).unwrap();
                el
            }
            Self::AScript{onclick} => {
                let el = graph.create_element("a").unwrap();
                el.set_attribute("href", "#").unwrap();
                el.set_attribute("onclick", &onclick).unwrap();
                el
            }
        }
    }
}

impl Branch{
    pub fn new(doc : &web_sys::Document) -> Self {
        Self(doc.clone(), web_sys::DocumentFragment::new().expect("Invalid document fragment").into())
    }
    pub fn in_main(self) {
        self.0.get_element_by_id("main").expect("No main element").replace_children_with_node_1(&self.1);
    }
    pub fn in_id(self, id : &str) -> Result<(), BranchError> {
        self.0.get_element_by_id(id).map(|nd| nd.replace_children_with_node_1(&self.1)).ok_or_else(|| BranchError::MissingId(id.to_string().into()))
    }
    pub fn in_each_class(self, class : &str) -> Self {
        let els = js_sys::Array::from(&self.0.get_elements_by_class_name(class));
        for el in els {
            el.dyn_into::<web_sys::Element>().map_or((), |ok| {
                ok.replace_children_with_node_1(&self.1.clone_node_with_deep(true).unwrap());
            })
        }
        self
    }

    pub fn append_text(self, text : &str) -> Self {
        let t = self.0.create_text_node(text);
        self.1.append_child(&t).expect("Leaf tag");
        self
    }
    pub fn linebreak(self) -> Self {
        self.append_tag(TagEmpty::BR)    
    }
    pub fn append_tag_opt<T : Tag>(self, tag : T, opt : BranchOpt) -> Self {
        let b : web_sys::Element = tag.generate(&self.0);
        match opt.class {
            Some(st) => b.set_class_name(st),
            None => {}
        }
        match opt.id {
            Some(st) => b.set_id(st),
            None => {}
        }
        self.1.append_child(&b).expect("Leaf tag");
        self
    }
    pub fn append_tag<T : Tag>(self, tag : T) -> Self {
        let b : web_sys::Element = tag.generate(&self.0);
        self.1.append_child(&b).expect("Leaf tag");
        self
    }
    pub fn append_tagbody<F : FnOnce(Self) -> Self>(self, tag : TagBody, f : F) -> Self {
        let b : web_sys::Element = tag.generate(&self.0);
        let nchild = self.1.append_child(&b).expect("Leaf tag");
        f(Self(self.0.clone(), nchild));
        self
    }
    pub fn append_tagbody_opt<F : FnOnce(Self) -> Self>(self, tag : TagBody, opt : BranchOpt, f : F) -> Self {
        let b : web_sys::Element = tag.generate(&self.0);
        match opt.class {
            Some(st) => b.set_class_name(st),
            None => {}
        }
        match opt.id {
            Some(st) => b.set_id(st),
            None => {}
        }
        let nchild = self.1.append_child(&b).expect("Leaf tag");
        f(Self(self.0.clone(), nchild));
        self
    }
    pub fn append_style<F : FnOnce(Self) -> Self>(self, sty : &str, f : F) -> Self {
        let b = self.0.create_element("div").unwrap();
        let htmlb = b.dyn_into::<web_sys::HtmlElement>().unwrap();
        htmlb.style().set_css_text(sty);
        let nchild = self.1.append_child(&htmlb).unwrap();
        f(Self(self.0.clone(), nchild));
        self
    }
    pub fn append_elem<E : OnlineElem + ?Sized>(self, elem : &E, info : &Info) -> Self {
        elem.to_html(self, info)
    }
    pub fn append_elem_into<E : OnlineElem + ?Sized>(self, tag : TagBody, elem : &E, info : &Info) -> Self {
        self.append_tagbody(tag, |o| o.append_elem(elem, info))
    }
}

pub trait OnlineElem{
    fn to_html(&self, out : Branch, info : &Info) -> Branch;
}
