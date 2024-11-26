pub mod langs;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello() -> String {
    "Hi".to_string()
}
