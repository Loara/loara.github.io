pub mod langs;
pub mod dom;
pub mod tex;
pub mod outs;
pub mod pages;

use wasm_bindgen::prelude::*;
use crate::tex::*;

#[wasm_bindgen]
pub fn hello() -> String {
    let tgr = TeXGraph;
    format!("{}", tgr.new_emph(tgr.new_text("Hihi")))
}
