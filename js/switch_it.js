
import { ResRecord, CurRecord, CurRecordV } from './data.js';

export const dictio = {

	hom : {
		mtitle : "Home",
		mtitlem : "HOME",
		description : "\"Io penso che all'origine della creatività ci sia quella che io chiamo la capacità o la disponibilità a sognare; a immaginare mondi diversi, cose diverse, cercando di combinarle nella propria immaginazione in vario modo.\"",
		author : "Ennio De Giorgi"
	},

	pub : {
		mtitle : "Pubblicazioni",
		mtitlem : "PUBBLICAZIONI",
		nothing : "Nulla di nuovo sul fronte occidentale."
	},

	cur : {
		mtitle : "Curriculum",
		mtitlem : "CURRICULUM",
		records : [
		new CurRecord( "Posizione attuale",
						[ new CurRecordV( "2019-ora",
									   "<p>Studente di dottorato in Matematica presso l'Università di Roma \"La Sapienza\"</p> <p> Relatore: prof. Emanuele N. Spadaro</p>")
						]),
		new CurRecord( "Formazione",
					   [ new CurRecordV( "9-20 Agosto 2021",
										 "<p>Partecipazione alla 30<sup>th</sup> Jyväskylä Summer School, frequentando i seguenti corsi:</p> <p><b>Shape Optimization and Free Boundary Problems</b> (tenuto dal prof. Dorin Bucur)</p> <p><b>Geometric Evolution Problems</b> (tenuto dal prof. Massimiliano Morini)</p><p><b>Differential Calculus on the Wasserstein Space and Mean Field Games</b> (tenuto dal prof. Pierre Cardaliaguet)</p>"),
						new CurRecordV ("22 Luglio - 16 Agosto 2019",
									   "<p>Partecipazione alla Scuola Matematica Interuniversitaria a Perugia, frequentando i seguenti corsi:</p> <p><b>Functional Analysis</b> (tenuto dal prof. Marius Ghergu, voto finale A+)</p> <p><b>Differential Geometry</b> (tenuto dal prof. Liviu Ornea, voto finale A++).</p>"),
						new CurRecordV( "2017-2019",
										 "<p>Laurea Magistrale in Matematica presso l'Università di Napoli \"Federico II\"</p><p>Tesi: The quantitative isoperimetric inequality</p><p>Relatore: Nicola Fusco</p><p>Voto di laurea: 110/110 <i>cum laude</i></p>"),
						new CurRecordV( "2014-2017",
										"<p>Laurea Triennale in Matematica presso l'Università di Napoli \"Federico II\"</p><p>Tesi: Il teorema di Rouché e applicazioni</p><p>Relatore: Luigi Greco</p><p>Voto di laurea: 110/110 <i>cum laude</i></p>"),
						new CurRecordV( "2009-2014",
										"<p>Liceo scientifico.</p>")
						]),
		new CurRecord( "Premi e riconoscimenti",
					   [ new CurRecordV( "10 Giugno 2016",
										 "<p>Premio \"Buon compleanno Federico II\" per l'eccellenza del <i>cursus studiorum</i>.</p>"),
						new CurRecordV( "8-11 Maggio 2014",
										"<p>Medaglia d'Argento alla fase nazionale delle Olimpiadi della Matematica.</p>"),
						new CurRecordV( "9-12 Maggio 2013",
										"<p>Medaglia di Bronzo alla fase nazionale delle Olimpiadi della Matematica.</p>"),
						new CurRecordV( "5-8 Maggio 2011",
										"<p>Ammissione alla fase nazionale delle Olimpiadi della Matematica.</p>")
						]),
		new CurRecord( "Altre attività",
					   [ new CurRecordV( "1 Novembre 2018 - 6 Settembre 2019",
										 "<p>Tutoraggio per il corso \"Analisi 1\" per gli studenti del primo anno in Matematica presso l'Università di Napoli \"Federico II\"</p>")
					   ])
		]
	},

	res : {
		mtitle : "Risorse",
		mtitlem : "RISORSE",
		Rname : "Nome risorsa",
		Rlan : "Lingua",
		Rtype : "Tipo di file",
		war : "Tutti questi documenti sono da considerarsi bozze e possono contenere errori. <br /> Se trovi qualche errore o vuoi fare una semplice osservazione contattami.",

		RES : [
			new ResRecord ( "Appunti di Analisi Funzionale",
							"Italiano",
							"PDF",
							"assets/res/AnalisiFunzionale.pdf" ),
			new ResRecord ( "Appunti di Teoria dei Gruppi avanzata",
							"Italiano",
							"PDF",
							"assets/res/IstAlgSup.pdf" ),
			new ResRecord ( "Appunti di Geometria Algebrica",
							"Italiano",
							"PDF",
							"assets/res/geoma.pdf" ),
			new ResRecord ( "Limiti in due o più variabili",
							"Italiano",
							"PDF",
							"assets/res/formula_it.pdf" ),
			new ResRecord ( "Successioni di Fibonacci generalizzate",
							"Italiano",
							"PDF",
							"assets/res/Fibonacci.pdf" )
		]

	}
};


