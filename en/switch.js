function rmall(){
	document.getElementById("hom").classList.remove("active");
	document.getElementById("pub").classList.remove("active");
	document.getElementById("cur").classList.remove("active");
	document.getElementById("res").classList.remove("active");
}

function closeMenu(){
	document.getElementById("nav_drop").style.height = "0px";
	document.getElementById("nav_label").style.backgroundColor = "#68a1fc";
}

function my_toggle(){
	var trg = document.getElementById("nav_drop");
	var dis = window.getComputedStyle(trg).getPropertyValue("height");
	if(dis === "0px"){
		trg.style.height = "200px";
		document.getElementById("nav_label").style.backgroundColor = "#2270c9";
	}
	else{
		trg.style.height = "0px";
		document.getElementById("nav_label").style.backgroundColor = "#68a1fc";
	}
}

function mainpage2(){
	closeMenu();
	mainpage();
}

function pubpage2(){
	closeMenu();
	pubpage();
}

function curpage2(){
	closeMenu();
	curpage();
}

function respage2(){
	closeMenu();
	respage();
}

function mainpage(){
	rmall();
	document.getElementById("main").innerHTML = "<div><img src=\"../assets/img/foto.jpg\" class=\"maimage\"></div><div><div><h2 style=\"font-family: \'Indie Flower\';margin: 0 5%\">\"I think that at the origin of creativity there is what I call the ability or willingness to dream; to imagine different worlds, different things, trying to combine them in your imagination in various ways.\"</h2><h3 style=\"margin: 0 10%;text-align:right;font-family: \'Indie Flower\';font-style:italic\">Ennio De Giorgi</h3>";
	document.getElementById("hom").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Paolo De Donato";
}

function pubpage(){
	rmall();
	document.getElementById("main").innerHTML = "<h2>So far, nothing interesting.</h2>";
	document.getElementById("pub").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Pubblications";
}

function curpage(){
	rmall();
	document.getElementById("main").innerHTML = "<div class=\"cur_cont\"><div class=\"cur_ltr\"></div><div class=\"cur_ctr\">\
		<h2>Education</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">2017-2019</div><div class=\"cur_des\"><p>Master degree in Mathematics at University of Naples \"Federico II\"</p><p>Thesis: The quantitative isoperimetric inequality</p><p>Advisor: Nicola Fusco</p><p>Graduation mark: 110/110 <i>cum laude</i></p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">2014-2017</div><div class=\"cur_des\"><p>Bachelor degree in Mathematics at University of Naples \"Federico II\"</p><p>Thesis: Il teorema di Rouché e applicazioni</p><p>Supervisor: Luigi Greco</p><p>Graduation mark: 110/110 <i>cum laude</i></p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">2009-2014</div><div class=\"cur_des\"><p>Secondary education at Salerno.</p></div></div>\
		<h2>Prizes and awards</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">May 8-11, 2014</div><div class=\"cur_des\"><p>Silver medal at Italian National Mathematical Olympiad.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">May 9-12, 2013</div><div class=\"cur_des\"><p>Bronze medal at Italian National Mathematical Olympiad.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\"> May5-8, 2011</div><div class=\"cur_des\"><p>Participation at Italian National Mathematical Olympiad.</p></div></div>\
		<h2>Schools and seminaries</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">July 22 - August 16, 2019</div><div class=\"cur_des\"><p>Participation at Scuola Matematica Interuniversitaria in Perugia, following these courses:</p> <p><b>Functional Analysis</b> (held by prof. Marius Ghergu, final mark A+)</p> <p><b>Differential Geometry</b> (held by prof. Liviu Ornea, final mark A++).</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">April 16-17, 2019</div><div class=\"cur_des\"><p>Participation at workshop \"Some topics of Geometric Analysis and Geometric Measure Theory\" held in Centro di Ricerca Matematica Ennio De Giorgi, Pisa.</p></div></div>\
		<div class=\"cur_row\"><div class=\"cur_date\">December 16-19, 2018</div><div class=\"cur_des\"><p>Partecipation at \"Junior Math Days\" in SISSA, Trieste.</p></div></div>\
		<h2>Other activities</h2>\
		<div class=\"cur_row\"><div class=\"cur_date\">November 1, 2018 - September 6, 2019</div><div class=\"cur_des\">Tutoring activity about \"Analisi 1\" course of first year students in Mathematics at University of Naples \"Federico II\"</div></div></div>\
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
				<th>Resource name</th>\
				<th><div class=\"tb_empty\"></div></th>\
				<th>Language</th>\
				<th>File type</th>\
				</tr>\
			</thead>\
			<tbody>\
				<tr>\
				<td><a href=\"assets/res/AnalisiFunzionale.pdf\">Topics in Functional Analysis</a></td>\
				<td></td>\
				<td>Italian</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/complementi.pdf\">Additional topics in Functional Analysis</a></td>\
				<td></td>\
				<td>Italian</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/IstAlgSup.pdf\">Notes about Advanced Group Theory</a></td>\
				<td></td>\
				<td>Italian</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/geoma.pdf\">Notes about Algebraic Geometry</a></td>\
				<td></td>\
				<td>Italian</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/formula_it.pdf\">Limits in two or more variables</a></td>\
				<td></td>\
				<td>Italian</td>\
				<td>PDF</td>\
				</tr>\
				<tr>\
				<td><a href=\"assets/res/Fibonacci.pdf\">Generalized Fibonacci sequences</a></td>\
				<td></td>\
				<td>Italian</td>\
				<td>PDF</td>\
				</tr>\
			</tbody>\
		</table>\
		<p>All these documents are only draft. <br /> If you find errors or if you want to make a remark please contact me.</p> \
	</div>";
	document.getElementById("res").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Resources";
}


