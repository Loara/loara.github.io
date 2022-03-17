
import { ResRecord, CurRecord, CurRecordV } from './data.js';

export const dictio = {

	hom : {
		mtitle : "Home",
		mtitlem : "HOME",
		description : "\"I think that at the origin of creativity there is what I call the ability or willingness to dream; to imagine different worlds, different things, trying to combine them in your imagination in various ways.\"",
		author : "Ennio De Giorgi"
	},

	pub : {
		mtitle : "Pubblications",
		mtitlem : "PUBBLICATIONS",
		nothing : "So far, nothing interesting."
	},

	cur : {
		mtitle : "Curriculum",
		mtitlem : "CURRICULUM",
		generate : "Convert to LaTeX",
		records : [
		new CurRecord( "Current position",
						[ new CurRecordV( "2019-now",
									   "<p>PhD student in Mathematics at University of Rome \"La Sapienza\"</p> <p> Advisor: prof. Emanuele N. Spadaro</p>")
						]),
		new CurRecord( "Education",
					   [ new CurRecordV( "August 9-20, 2021",
										 "<p>Participation at the 30<sup>th</sup> Jyväskylä Summer School, following these courses:</p> <p><b>Shape Optimization and Free Boundary Problems</b> (held by prof. Dorin Bucur)</p> <p><b>Geometric Evolution Problems</b> (held by prof. Massimiliano Morini)</p><p><b>Differential Calculus on the Wasserstein Space and Mean Field Games</b> (held by prof. Pierre Cardaliaguet)</p>"),
						new CurRecordV ("July 22 - August 16, 2019",
									   "<p>Participation at Scuola Matematica Interuniversitaria in Perugia, following these courses:</p> <p><b>Functional Analysis</b> (held by prof. Marius Ghergu, final mark A+)</p> <p><b>Differential Geometry</b> (held by prof. Liviu Ornea, final mark A++).</p>"),
						new CurRecordV( "2017-2019",
										 "<p>Master's degree in Mathematics at University of Naples \"Federico II\"</p><p>Thesis: The quantitative isoperimetric inequality</p><p>Advisor: Nicola Fusco</p><p>Graduation mark: 110/110 <i>cum laude</i></p>"),
						new CurRecordV( "2014-2017",
										"<p>Bachelor's degree in Mathematics at University of Naples \"Federico II\"</p><p>Thesis: Il teorema di Rouché e applicazioni</p><p>Supervisor: Luigi Greco</p><p>Graduation mark: 110/110 <i>cum laude</i></p>"),
						new CurRecordV( "2009-2014",
										"<p>Secondary education.</p>")
						]),
		new CurRecord( "Prizes and awards",
					   [ new CurRecordV( "June 10, 2016",
										 "<p>Prize \"Buon compleanno Federico II\" due to excellence of his <i>cursus studiorum</i>.</p>"),
						new CurRecordV( "May 8-11, 2014",
										"<p>Silver medal at Italian National Mathematical Olympiad.</p>"),
						new CurRecordV( "May 9-12, 2013",
										"<p>Bronze medal at Italian National Mathematical Olympiad.</p>"),
						new CurRecordV( "May 5-8, 2011",
										"<p>Participation at Italian National Mathematical Olympiad.</p>")
						]),
		new CurRecord( "Other activities",
					   [ new CurRecordV( "November 1, 2018 - September 6, 2019",
										 "<p>Tutoring activity about \"Analisi 1\" course of first year students in Mathematics at University of Naples \"Federico II\"</p>")
					   ])
		]
	},

	res : {
		mtitle : "Resources",
		mtitlem : "RESOURCES",
		Rname : "Resource name",
		Rlan : "Language",
		Rtype : "File type",
		war : "All these documents are only draft. <br /> If you find errors or if you want to make a remark please contact me.",

		RES : [
			new ResRecord ( "Topics in Functional Analysis",
							"Italian",
							"PDF",
							"assets/res/AnalisiFunzionale.pdf" ),
			new ResRecord ( "Notes about Advanced Group Theory",
							"Italian",
							"PDF",
							"assets/res/IstAlgSup.pdf" ),
			new ResRecord ( "Notes about Algebraic Geometry",
							"Italian",
							"PDF",
							"assets/res/geoma.pdf" ),
			new ResRecord ( "Limits in Two or more variables",
							"Italian",
							"PDF",
							"assets/res/formula_it.pdf" ),
			new ResRecord ( "Generalized Fibonacci sequences",
							"Italian",
							"PDF",
							"assets/res/Fibonacci.pdf" )
		]

	}
};


