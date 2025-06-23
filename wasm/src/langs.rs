#[derive(Copy, Clone, Eq, PartialEq, Debug, Hash)]
pub enum Lang {
    IT,
    EN,
}

#[derive(Clone, Debug, Default)]
pub struct Langed<T> {
    it : T,
    en : T,
}

impl std::fmt::Display for Lang {
    fn fmt(&self, fmt : &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match *self {
            Lang::IT => write!(fmt, "Italiano"),
            Lang::EN => write!(fmt, "English"),
        }
    }
}

impl AsRef<str> for Lang {
    fn as_ref(&self) -> &str {
        match self {
            Lang::IT => "Italiano",
            Lang::EN => "English",
        }
    }
}

pub fn for_each_lang<T, F : FnMut(T, Lang) -> T>(st : T, mut f : F) -> T {
    let v1 = f(st, Lang::EN);
    f(v1, Lang::IT)
}

impl<T> Langed<T> {
    pub fn new(en : T, it : T) -> Self {
        Self{en, it}
    }
    pub fn new_with<F : FnMut(Lang) -> T>(mut f : F) -> Self {
        Self{
            en : f(Lang::EN),
            it : f(Lang::IT),
        }
    }
    pub fn get(&self, lang : Lang) -> &T {
        match lang {
            Lang::IT => &self.it,
            Lang::EN => &self.en,
        }
    }
    pub fn get_mut(&mut self, lang : Lang) -> &mut T {
        match lang {
            Lang::IT => &mut self.it,
            Lang::EN => &mut self.en,
        }
    }
    pub fn map<E, F : FnOnce(&T) -> E>(&self, lang : Lang, f : F) -> E {
        match lang {
            Lang::IT => f(&self.it),
            Lang::EN => f(&self.en),
        }
    }
}

impl<T> Langed<Option<T>> {
    pub fn empty() -> Self {
        Self{en : None, it : None}
    }
    pub fn get_or_insert_with<F : FnOnce() -> T>(&mut self, lang : Lang, f : F) -> &mut T {
        self.get_mut(lang).get_or_insert_with(f)
    }
}

        
