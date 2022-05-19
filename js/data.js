
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
