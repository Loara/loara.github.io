#![deny(unused_must_use)]
pub mod langs;
pub mod info;
pub mod dom;
pub mod tex;
pub mod sty;
pub mod pages;
pub mod glob;

use wasm_bindgen::prelude::*;

use crate::dom::*;
use crate::pages::*;
use crate::info::*;
use crate::langs::*;
use crate::glob::*;

fn document() -> web_sys::Document {
    web_sys::window().unwrap().document().unwrap()
}

#[wasm_bindgen]
pub fn start() -> Result<(), JsError> {
    let doc = document();
    let st = STATE.get_or_init(|| {
        GlobalState{
            info : Info{
                lang : Lang::EN,
            },
            page : PageName::Main,
            main : MainPage::new(),
            lang_toggle : false,
        }.into()
    });
    st.0.write()?.pack_all(&doc)?;
    st.push_other_langs(Branch::new(&doc)).in_id("nav_lang_menu")?;
    Ok(())
}

#[wasm_bindgen]
pub fn lan_menu_toggle() -> Result<(), JsError> {
    Ok(())
}

