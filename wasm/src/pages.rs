use crate::langs::Lang;

pub trait WebPage{
    fn title(&self, lang : Lang) -> &'static str;
    fn menuname(&self, lang : Lang) -> Option<&'static str> {
        Some(self.title(lang))
    }
    fn get_html(&self, lang : Lang) -> String;
}

pub struct PageMaster{
    pages : Vec<Box<dyn WebPage + 'static>>,
}

impl PageMaster{
    pub fn new() -> Self {
        Self {
            pages : Vec::new(),
        }
    }
    pub fn push<P : WebPage + 'static>(&mut self, page : P) {
        self.pages.push(Box::new(page));
    }
}
