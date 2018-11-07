var mese = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", 
	"luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

var gsett = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];

	/*
	n = intervallo in cui non si va
	i = giorno in cui si va
	Vanno messi in ORDINE CRESCENTE
	*/
var impegni = ["n", "11/1/2018", "11/4/2018", "n", "12/24/2018", "1/21/2019"];

function geti(i){
	var ret = new Date(impegni[i]);
	ret.setHours(16);
	return ret;
}

function printDate(d){
	return gsett[d.getDay()] + " " + d.getDate() + " " + mese[d.getMonth()] + " " + d.getFullYear();
}

function prossimoIncontro(d){
	/*
	0 è domenica, quindi giovedì è 4 modulo 7
	In aritmetica modulo 7 se i è il giorno corrente (da 0 a 6) ed n esprime quanti giorni mancano al prossimo giovedì allora i + n = 4 e quindi
	n = 4 - i = 4 + 7 - i = 11 - i
	*/
	var i = d.getDay();
	var n = (11 - i) % 7;
	if(n == 0 && d.getHours() > 16){
		n = 7;
	}
	var ret = new Date(d.toString());
	ret.setDate(d.getDate() + n);
	ret.setHours(16);
	return ret;
}

function SprossimoIncontro(d){
	/*
	parte sempre il giorno dopo
	*/
	var i = d.getDay();
	var n = (11 - i) % 7;
	if(n == 0){
		n = 7;
	}
	var ret = new Date(d.toString());
	ret.setDate(d.getDate() + n);
	ret.setHours(16);
	return ret;
}

function iterate(i, d){
	var j, len;
	len = impegni.length;
	for(j = i; j < len; j++){
		if(impegni[j] == "n"){
			if(d >= geti(j+1) && d <= geti(j+2)){
				return iterate(j+3, SprossimoIncontro(geti(j+2)));
			}
			else
				j += 2;
		}
		else if(impegni[j] == "i"){
			if(d >= geti(j+1)){
				return geti(j+1);
			}
			else
				j += 1;
		}
	}
	return d;
}

function primoBuono(d, c){
	//c è il giorno corrente, vanno eliminati gli eventi passati
	var i, j, len;
	len = impegni.length;
	for(i=0; i<len; i++){
		if(impegni[i] == "n"){
			if(c <= geti(i+2))
				break;
			else
				i += 2;
		}
		else{
			if(c <= geti(i+1))
				break;
			else
				i++;
		}
	}
	if(i >= len)
		return d;
	return iterate(i, d);
}

function ppi(c){
	return primoBuono(prossimoIncontro(c), c);
}

