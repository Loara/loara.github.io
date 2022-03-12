function initm(){
	var mmn = document.getElementsByClassName("js_cur");
    for(item of mmn){
    	item.innerHTML="Curriculum";
    }
	mmn = document.getElementsByClassName("js_cur2");
    for(item of mmn){
    	item.innerHTML="CURRICULUM";
    }
	mmn = document.getElementsByClassName("js_pub");
    for(item of mmn){
    	item.innerHTML="Pubblicazioni";
    }
	mmn = document.getElementsByClassName("js_pub2");
    for(item of mmn){
    	item.innerHTML="PUBBLICAZIONI";
    }
	mmn = document.getElementsByClassName("js_res");
    for(item of mmn){
    	item.innerHTML="Risorse";
    }
	mmn = document.getElementsByClassName("js_res2");
    for(item of mmn){
    	item.innerHTML="RISORSE";
    }
}

function mainpage2(){
	closeMenu();
	closeLMenu();
	mainpage();
}

function pubpage2(){
	closeMenu();
	closeLMenu();
	pubpage();
}

function curpage2(){
	closeMenu();
	closeLMenu();
	curpage();
}

function respage2(){
	closeMenu();
	closeLMenu();
	respage();
}

function mainpage(){
	rmall();
	document.getElementById("main").innerHTML = "<div><img src=\"img/foto.jpg\" class=\"maimage\"></div><div><div><h2 style=\"font-family: \'Indie Flower\';margin: 0 5%\">\"Io penso che all'origine della creatività ci sia quella che io chiamo la capacità o la disponibilità a sognare; a immaginare mondi diversi, cose diverse, cercando di combinarle nella propria immaginazione in vario modo.\"</h2><h3 style=\"margin: 0 10%;text-align:right;font-family: \'Indie Flower\';font-style:italic\">Ennio De Giorgi</h3>";
	document.getElementById("hom").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Paolo De Donato";
}

function pubpage(){
	rmall();
	document.getElementById("main").innerHTML = "<h2>Niente di nuovo sul fronte occidentale</h2>";
	document.getElementById("pub").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Pubblicazioni";
}

function curpage(){
	rmall();
	document.getElementById("main").innerHTML = "<div class=\"cur_cont\"><div class=\"cur_ltr\"></div><div class=\"cur_ctr\">\
		<h2>Posizione attuale</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">2019-ora</div><div class=\"cur_des\"><p>Dottorando in Matematica presso l\' Università di Roma \"La Sapienza\"</p> <p>Relatore: prof. Emanuele N. Spadaro</p></div></div>\
		<h2>Formazione</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">2017-2019</div><div class=\"cur_des\"><p>Laurea magistrale in Matematica all\' Università degli Studi di Napoli \"Federico II\"</p><p>Titolo tesi: The quantitative isoperimetric inequality</p><p>Relatore: Nicola Fusco</p><p>Voto di laurea: 110/110 <i>cum laude</i></p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">2014-2017</div><div class=\"cur_des\"><p>Laurea in Matematica all\' Università degli Studi di Napoli \"Federico II\"</p><p>Titolo tesi: Il teorema di Rouché e applicazioni</p><p>Relatore: Luigi Greco</p><p>Voto di laurea: 110/110 <i>cum laude</i></p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">2009-2014</div><div class=\"cur_des\"><p>Maturità scientifica</p></div></div>\
		<h2>Riconoscimenti e premi</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">10 giugno 2016</div><div class=\"cur_des\"><p>Premio 2016 \"Buon compleanno Federico II\" per l'eccellenza del suo <i>cursus studiorum</i>.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">8-11 maggio 2014</div><div class=\"cur_des\"><p>Medaglia d'argento alle Olimpiadi nazionali della Matematica a Cesenatico.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">9-12 maggio 2013</div><div class=\"cur_des\"><p>Medaglia di bronzo alle Olimpiadi nazionali della Matematica a Cesenatico.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">5-8 maggio 2011</div><div class=\"cur_des\"><p>Ammissione fase nazionale delle Olimpiadi nazionali della Matematica a Cesenatico.</p></div></div>\
		<h2>Seminari e conferenze</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">9-20 agosto 2021</div><div class=\"cur_des\"><p>Partecipazione alla 30<sup>th</sup> Jyväskylä Summer School, durante la quale sono stati seguiti i seguenti corsi:</p> <p><b>Shape Optimization and Free Boundary Problems</b> (tenuto dal prof. Dorin Bucur)</p> <p><b>Geometric Evolution Problems</b> (tenuto dal prof. Massimiliano Morini)</p><p><b>Differential Calculus on the Wasserstein Space and Mean Field Games</b> (tenuto dal prof. Pierre Cardaliaguet)</p></div></div>\
        <div class=\"cur_row\"><div class=\"cur_date\">3-7 febbraio 2020</div><div class=\"cur_des\"><p>Partecipazione al XXX Convegno nazionale di Calcolo delle Variazioni a Levico Terme, Trento.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">22 luglio -16 agosto 2019</div><div class=\"cur_des\"><p>Partecipazione alla Scuola Matematica Interuniversitaria di Perugia, durante la quale sono stati seguiti i seguenti corsi:</p> <p><b>Analisi Funzionale</b> (tenuto dal prof. Marius Ghergu, votazione A+)</p> <p><b>Geometria Differenziale</b> (tenuto dal prof. Liviu Ornea, votazione A++).</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">16-19 dicembre 2018</div><div class=\"cur_des\"><p>Partecipazione al ciclo di seminari \"Junior Math Days\" presso il dipartimento di matematica della SISSA a Trieste.</p></div></div>\
		<h2>Altre attività</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">1 novembre 2018 - 6 settembre 2019</div><div class=\"cur_des\">Tutorato Analisi 1 per i ragazzi del primo anno del corso di laurea in Matematica presso l'Università degli Studi di Napoli \"Federico II\"</div></div></div>\
		<div class=\"cur_ltr\"></div></div>";
	document.getElementById("cur").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Curriculum";
}

function respage(){
	rmall();
	document.getElementById("main").innerHTML = "<div class=\"container\">\
		<table class=\"table table-hover\">\
			<thead>\
				<tr>\
				<th>Nome risorsa</th>\
				<th><div class=\"tb_empty\"></div></th>\
				<th>Lingua</th>\
				<th>Tipo file</th>\
				</tr>\
			</thead>\
			<tbody>\
				<tr>\
				<td><a href=\"assets/res/AnalisiFunzionale.pdf\">Appunti di Analisi Funzionale</a></td>\
				<td></td>\
				<td>Italiano</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/IstAlgSup.pdf\">Appunti di Istituzioni di Algebra superiore</a></td>\
				<td></td>\
				<td>Italiano</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/geoma.pdf\">Appunti di Geometria Algebrica</a></td>\
				<td></td>\
				<td>Italiano</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/formula_it.pdf\">Limiti in due o più variabili</a></td>\
				<td></td>\
				<td>Italiano</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/Fibonacci.pdf\">Successioni generalizzate di Fibonacci</a></td>\
				<td></td>\
				<td>Italiano</td>\
				<td>PDF</td>\
				</tr>\
			</tbody>\
		</table>\
		<p>I documenti presenti in questa tabella sono bozze o versioni incomplete. <br /> Per dubbi o segnalazione di errori potete contattarmi senza problemi.</p> \
	</div>";
	document.getElementById("res").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Risorse";
}


