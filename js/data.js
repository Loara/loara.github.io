
export class ResRecord {
	name;
	lang;
	type;
	link;
	constructor(n, l, t, h){
		this.name = n;
		this.lang = l;
		this.type = t;
		this.link = h;
	}
}

export class CurRecordV {
	date;
	text;
	constructor(d, t){
		this.date = d;
		this.text = t;
	}
}

export class CurRecord {
	title;
	value;
	constructor(t, v){
		this.title = t;
		this.value = v;
	}
}

export class LinRecord {
	name;
	url;
	urlname;
	constructor(n, u){
		this.name = n;
		this.url = u;
		this.urlname = u;
	}
}

export function LinCos(n, u, un){
	let ret = new LinRecord(n, u);
	ret.urlname = un;
	return ret;
}

/*
 * export class PubRecord{
 * authors,
 * title,
 * date,
 * journal,
 * number,
 * pages,
 * link
 * }
 */

/*
 *
 * Un testo arricchito è una sequenza di oggetti che spiega come interpretare un testo
 *
 *  - una stringa inserisce un'oggetto così com'è
 *  - un array li inserisce sequenzialmente, opzionalmente ciascuno in un paragrafo
 *  - se è un dizionario con la key elenco li fa in un elenco puntato
 *  - se è un dizionario con la key formatta la interpreta come un array in cui ciascuna linea viene formattata e vengono aggiunti spazi.
 */

export function formattaHTML(newPar, obj){
	if(obj == null)
		return "";
	else if(Array.isArray(obj)){
		let st = "";
		if(newPar){
			for(let V of obj)
				st += "<p>" + formattaHTML(false, V) + "</p>";
		}
		else{
			for(let V of obj)
				st += formattaHTML(false, V) + " ";
		}
		return st;
	}
	else if(newPar){
		return "<p>" + formattaHTML(false, obj) + "</p>";
	}
	else{
		if(typeof obj == "string"){
			return obj;
		}
		else if("elenco" in obj){
			let st = "<ul>";
			for(let V of obj["elenco"])
				st += "<li>" + formattaHTML(false, V) + "</li>";
			st += "</ul>";
			return st;
		}
		else if("slim" in obj){
			let st = "";
			for(let V of obj["slim"])
				st += formattaHTML(false, V) + "<br>";
			return st;
		}
		else if("emph" in obj){
			return "<b>" + formattaHTML(false, obj["emph"]) + "</b>";
		}
		else if("sup" in obj){
			return formattaHTML(false, obj["val"]) + "<sup>" + formattaHTML(false, obj["sup"]) + "</sup>";
		}
		else return "";
	}
}

export function formattaLaTeX(newPar, obj){
	if(obj == null)
		return "";
	else if(Array.isArray(obj)){
		let st = "";
		if(newPar){
			for(let V of obj)
				st += formattaLaTeX(false, V) + "<br><br>";
		}
		else{
			for(let V of obj)
				st += formattaLaTeX(false, V) + " ";
		}
		return st;
	}
	else if(newPar){
		return formattaLaTeX(false, obj) + "<br><br>";
	}
	else{
		if(typeof obj == "string"){
			return obj;
		}
		else if("elenco" in obj){
			let st = "\\begin{itemize}<br>";
			for(let V of obj["elenco"])
				st += "\\item " + formattaLaTeX(false, V) + "<br>";
			st += "\\end{itemize}<br>";
			return st;
		}
		else if("slim" in obj){
			let st = "";
			for(let V of obj["slim"])
				st += formattaLaTeX(false, V) + "<br><br>";
			return st;
		}
		else if("emph" in obj){
			return "\\emph{" + formattaLaTeX(false, obj["emph"]) + "}";
		}
		else if("sup" in obj){
			return formattaLaTeX(false, obj["val"]) + "\\textsuperscript{" + formattaLaTeX(false, obj["sup"]) + "}";
		}
		else return "";
	}
}


