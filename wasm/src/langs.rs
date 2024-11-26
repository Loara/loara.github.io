#[derive(Copy, Clone, Eq, PartialEq, Debug)]
pub enum Lang {
    IT,
    EN,
}

impl std::fmt::Display for Lang {
    fn fmt(&self, fmt : &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match *self {
            Lang::IT => write!(fmt, "Italiano"),
            Lang::EN => write!(fmt, "English"),
        }
    }
}
