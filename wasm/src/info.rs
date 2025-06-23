use crate::langs::Lang;

#[derive(Debug)]
pub struct Info{
    pub lang : Lang,
}

impl Default for Info{
    fn default() -> Self {
        Self {
            lang : Lang::EN,
        }
    }
}
