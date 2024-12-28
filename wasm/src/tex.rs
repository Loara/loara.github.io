#[derive(Clone, Debug)]
pub struct TeXNode(String);

#[derive(Clone, Copy, Debug)]
pub struct TeXGraph;

impl TeXGraph{
    pub fn new_text(&self, text : &str) -> TeXNode {
        TeXNode(text.into())
    }
    pub fn new_emph(&self, node : TeXNode) -> TeXNode {
        TeXNode(format!("\\textit{{{}}}", node.0))
    }
}

impl std::fmt::Display for TeXNode {
    fn fmt(&self, f : &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}
