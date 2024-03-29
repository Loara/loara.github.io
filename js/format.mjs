/*
 *
 * Un testo arricchito è una sequenza di oggetti che spiega come interpretare un testo
 *
 *  - una stringa inserisce un'oggetto così com'è
 *  - un array li inserisce sequenzialmente, opzionalmente ciascuno in un paragrafo
 *  - se è un dizionario con la key elenco li fa in un elenco puntato
 *  - se è un dizionario con la key formatta la interpreta come un array in cui ciascuna linea viene formattata e vengono aggiunti spazi.
 */
export function formatHTM(ou){
  if(ou == null)
    return "";
  else if(typeof ou == "string")
    return ou;
  else if(Array.isArray(ou)){
    let st = "";
    for(let V of ou)
      st += formatHTM(V);
    return st;
  }
  else{
    return ou.fH();
  }
}

export function formatTex(ou){
  if(ou == null)
    return "";
  else if(typeof ou == "string")
    return ou;
  else if(Array.isArray(ou)){
    let st = "";
    for(let V of ou)
      st += formatTex(V);
    return st;
  }
  else
    return ou.fT();
}



export class Elenco{
  constructor(ar){
    this.ar = ar;
  }

  fH(){
    let st = "<ul>";
    for(let V of this.ar)
      st += "<li>" + formatHTM(V) + "</li>";
    st += "</ul>";
    return st;
  }

  fT(){
    let st = "\\begin{itemize}<br>";
    for(let V of this.ar)
      st += "\\item " + formatTex(V) + "<br>";
    st += "\\end{itemize}<br>";
    return st;
  }
}

export class Slim{
  constructor(ar){
    this.ar = ar;
  }

  fH(){
    if(this.ar.length == 0)
      return "";
    let st = formatHTM(this.ar[0]);
    for(let i=1; i<this.ar.length; i++)
      st += "<br>" + formatHTM(this.ar[i]);
    return st;
  }

  fT(){
    if(this.ar.length == 0)
      return "";
    let st = formatTex(this.ar[0]);
    for(let i=1; i<this.ar.length; i++)
      st += "<br><br>" + formatTex(this.ar[i]);
    return st;
  }
}

export class Emph{
  constructor(va){
    this.va = va;
  }

  fH(){
    return "<b>" + formatHTM(this.va) + "</b>";
  }

  fT(){
    return "\\emph{" + formatTex(this.va) + "}";
  }
}

export class Cors{
  constructor(va){
    this.va = va;
  }

  fH(){
    return "<i>" + formatHTM(this.va) + "</i>";
  }

  fT(){
    return "\\textit{" + formatTex(this.va) + "}";
  }
}

export class Sup{
  constructor(b, s){
    this.b = b;
    this.s = s;
  }

  fH(){
    return formatHTM(this.b) + "<sup>" + formatHTM(this.s) + "</sup>";
  }

  fT(){
    return formatTex(this.b) + "\\textsuperscript{" + formatTex(this.s) + "}";
  }
}

export class RefURL{
  constructor(link){
    this.link = link;
  }

  fH(){
    return "<a href =\"" + this.link + "\" style=\"font-family:monospace\">" + this.link + "</a>";
  }

  fT(){
    return "\\url{" + this.link + "}";
  }
}

