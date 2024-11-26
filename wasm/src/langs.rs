pub enum Lang {
    IT,
    EN,
}

impl std::convert::From<Lang> for &'static str {
    fn from(v : Lang) -> Self {
        match v {
            Lang::IT => "Italiano",
            Lang::EN => "English",
        }
    }
}
