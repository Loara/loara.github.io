use crate::info::Info;

#[derive(Clone, Debug)]
pub struct TeXBranch(String);

impl TeXBranch{
    pub fn new() -> Self {
        Self(String::new())
    }
    pub fn to_text(self) -> String {
        self.0
    }
    pub fn append_text(mut self, text : &str) -> Self {
        self.0.push_str(text);
        self
    }
    pub fn skip_par(mut self) -> Self {
        self.0.push_str("\n\n");
        self
    }
    pub fn linebreak(mut self) -> Self {
        self.0.push_str("\\\\\n");
        self
    }
    pub fn append_emph<F : FnOnce(Self) -> Self>(mut self, f : F) -> Self {
        self.0.push_str("\\emph{");
        let mut rt = f(self);
        rt.0.push_str("}");
        rt
    }
    pub fn append_section<F : FnOnce(Self) -> Self>(mut self,  f : F) -> Self {
        self.0.push_str("\n\n\\section{");
        let mut rt = f(self);
        rt.0.push_str("}");
        rt
    }
    pub fn append_itemize<F : FnOnce(Self) -> Self>(mut self,  f : F) -> Self {
        self.0.push_str("\n\\begin{itemize}\n");
        let mut rt = f(self);
        rt.0.push_str("\n\\end{itemize}");
        rt
    }
    pub fn append_item<F : FnOnce(Self) -> Self>(mut self,  f : F) -> Self {
        self.0.push_str("\n\\item ");
        f(self)
    }
    pub fn append_branch<E : TeXElem + ?Sized>(self, elem : &E, info : &Info) -> Self {
        elem.to_tex(self, info)
    }
}

impl std::fmt::Display for TeXBranch {
    fn fmt(&self, f : &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

pub trait TeXElem {
    fn to_tex(&self, graph : TeXBranch, info : &Info) -> TeXBranch;
}
