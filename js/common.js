function rmall(){
	document.getElementById("hom").classList.remove("active");
	document.getElementById("pub").classList.remove("active");
	document.getElementById("cur").classList.remove("active");
	document.getElementById("res").classList.remove("active");
}

function closeMenu(){
	document.getElementById("nav_pag_menu").style.height = "0px";
	document.getElementById("nav_label").style.backgroundColor = "#68a1fc";
}

function closeLMenu(){
	document.getElementById("nav_lan_menu").style.height = "0px";
}

function closeAll(){
	closeMenu();
	closeLMenu();
}

function pag_toggle(){
	var trg = document.getElementById("nav_pag_menu");
	var dis = window.getComputedStyle(trg).getPropertyValue("height");
    closeLMenu();
	if(dis === "0px"){
		trg.style.height = "auto";
		document.getElementById("nav_label").style.backgroundColor = "#2270c9";
	}
	else{
		trg.style.height = "0px";
		document.getElementById("nav_label").style.backgroundColor = "#68a1fc";
	}
}

function lan_toggle(){
	var trg = document.getElementById("nav_lan_menu");
	var dis = window.getComputedStyle(trg).getPropertyValue("height");
    closeMenu();
	if(dis === "0px"){
		trg.style.height = "auto";
	}
	else{
		trg.style.height = "0px";
	}
}

function chglan(lang){
	let pag = "hom";
    if(document.getElementById("hom").classList.contains("active")){
    	pag = "hom";
    }
    else if(document.getElementById("pub").classList.contains("active")){
    	pag = "pub";
    }
    else if(document.getElementById("cur").classList.contains("active")){
    	pag = "cur";
    }
    else if(document.getElementById("res").classList.contains("active")){
    	pag = "res";
    }
    window.open("index.htm?lan="+lang+"&pag="+pag, "_self");
}

 function mainpage2(){
	closeMenu();
	closeLMenu();
	mainpagem();
}

 function pubpage2(){
	closeMenu();
	closeLMenu();
	pubpagem();
}

 function curpage2(){
	closeMenu();
	closeLMenu();
	curpagem();
}

 function respage2(){
	closeMenu();
	closeLMenu();
	respagem();
}








 function curpageT(){
	rmall();
	document.getElementById("main").innerHTML = "<div class=\"cur_cont\"><div class=\"cur_ltr\"></div><div class=\"cur_ctr\">\
		<h2>Current position</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">2019-now</div><div class=\"cur_des\"><p>PhD student in Mathematics at University of Rome \"La Sapienza\"</p> <p> Advisor: prof. Emanuele N. Spadaro</p></div></div>\
		<h2>Education</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">2017-2019</div><div class=\"cur_des\"><p>Master's degree in Mathematics at University of Naples \"Federico II\"</p><p>Thesis: The quantitative isoperimetric inequality</p><p>Advisor: Nicola Fusco</p><p>Graduation mark: 110/110 <i>cum laude</i></p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">2014-2017</div><div class=\"cur_des\"><p>Bachelor's degree in Mathematics at University of Naples \"Federico II\"</p><p>Thesis: Il teorema di Rouché e applicazioni</p><p>Supervisor: Luigi Greco</p><p>Graduation mark: 110/110 <i>cum laude</i></p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">2009-2014</div><div class=\"cur_des\"><p>Secondary education.</p></div></div>\
		<h2>Prizes and awards</h2>\
        <div class=\"cur_row\"><div class=\"cur_date\">June 10, 2016</div><div class=\"cur_des\"><p>Prize \"Buon compleanno Federico II\" due to excellence of his <i>cursus studiorum</i>.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">May 8-11, 2014</div><div class=\"cur_des\"><p>Silver medal at Italian National Mathematical Olympiad.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">May 9-12, 2013</div><div class=\"cur_des\"><p>Bronze medal at Italian National Mathematical Olympiad.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\"> May 5-8, 2011</div><div class=\"cur_des\"><p>Participation at Italian National Mathematical Olympiad.</p></div></div>\
		<h2>Schools and seminaries</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">August 9-20, 2021</div><div class=\"cur_des\"><p>Participation at the 30<sup>th</sup> Jyväskylä Summer School, following these courses:</p> <p><b>Shape Optimization and Free Boundary Problems</b> (held by prof. Dorin Bucur)</p> <p><b>Geometric Evolution Problems</b> (held by prof. Massimiliano Morini)</p><p><b>Differential Calculus on the Wasserstein Space and Mean Field Games</b> (held by prof. Pierre Cardaliaguet)</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">February 3-7, 2020</div><div class=\"cur_des\"><p>Participation at \"XXX Convegno Nazionale di Calcolo delle Variazioni\" in Levico Terme, Trento.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">July 22 - August 16, 2019</div><div class=\"cur_des\"><p>Participation at Scuola Matematica Interuniversitaria in Perugia, following these courses:</p> <p><b>Functional Analysis</b> (held by prof. Marius Ghergu, final mark A+)</p> <p><b>Differential Geometry</b> (held by prof. Liviu Ornea, final mark A++).</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">December 16-19, 2018</div><div class=\"cur_des\"><p>Partecipation at \"Junior Math Days\" in SISSA, Trieste.</p></div></div>\
		<h2>Other activities</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">November 1, 2018 - September 6, 2019</div><div class=\"cur_des\">Tutoring activity about \"Analisi 1\" course of first year students in Mathematics at University of Naples \"Federico II\"</div></div></div>\
		<div class=\"cur_ltr\"></div></div>";
	document.getElementById("cur").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Curriculum";
}
