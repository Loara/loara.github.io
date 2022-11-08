
import { ResRecord, CurRecord, CurRecordV, LinRecord, LinCos } from './data.js';

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
		generate : "Converti in LaTeX",
		records : [
		new CurRecord( "Posizione attuale",
						[ new CurRecordV( "2019-ora",
										[
											"Studente di dottorato in Matematica presso l'Università di Roma \"La Sapienza\"",
											"Relatore: prof. Emanuele N. Spadaro"
										]
									)
						]),
		new CurRecord( "Formazione",
					   [ new CurRecordV( "9-20 Agosto 2021",
										 [
											[
												"Partecipazione alla",
												{
													"val" : "30",
													"sup" : "th"
												},
												"Jyväskylä Summer School, frequentando i seguenti corsi:"
											],
											{
												"elenco" : [
												[
													{
														"emph" : "Shape Optimization and Free Boundary Problems"
													},
													"(tenuto dal prof. Dorin Bucur)",
												],
												[
													{
														"emph" : "Geometric Evolution Problems"
													},
													"(tenuto dal prof. Massimiliano Morini)"
												],
												[
													{
														"emph" : "Differential Calculus on the Wasserstein Space and Mean Field Games"
													},
													"(tenuto dal prof. Pierre Cardaliaguet)"
												]
												]
											}
										]),
						new CurRecordV ("22 Luglio - 16 Agosto 2019",
										[
											"Partecipazione alla Scuola Matematica Interuniversitaria di Perugia, seguendo i seguenti corsi:",
											{
												"elenco" : [
													[
														{
															"emph" : "Functional Analysis"
														},
														"(tenuto dal prof. Marius Ghergu, voto finale A+)"
													],
													[
														{
															"emph" : "Differential Geometry"
														},
														"(tenuto dal prof. Liviu Ornea, voto finale A++)"
													]
												]
											}
										]
									),
						new CurRecordV( "2017-2019",
										{
											"slim":
										 [
											"Laurea magistrale in Matematica presso l'Università di Napoli \"Federico II\"",
											"Tesi: The quantitative isoperimetric inequality",
											"Relatore: prof. Nicola Fusco",
											"Voto finale: 110/110 cum laude"
										]
										}
									),
						new CurRecordV( "2014-2017",
										{
											"slim" :
										[
											"Laurea triennale in Matematica presso l'Università di Napoli \"Federico II\"",
											"Tesi: Il teorema di Rouché e applicazioni",
											"Relatore: Luigi Greco",
											"Voto finale: 110/110 cum laude"
										]
										}
									),
						new CurRecordV( "2009-2014",
										"Scuola superiore.")
						]),
		new CurRecord( "Premi e riconoscimenti",
					   [ new CurRecordV( "10 Giugno 2016",
										 "Ppremio \"Buon compleanno Federico II\" per l'eccellenza del cursus studiorum"),
						new CurRecordV( "8-11 Maggio 2014",
										"Medaglia d'argento alla fase nazionale delle Olimpiadi della Matematica"),
						new CurRecordV( "9-12 Maggio 2013",
										"Medaglia di bronzo alla fase nazionale delle Olimpiadi della Matematica"),
						new CurRecordV( "5-8 Maggio 2011",
										"Partecipazione alla fase nazionale delle Olimpiadi della Matematica")
						]),
		new CurRecord( "Altre attività",
					   [ new CurRecordV( "1 Novembre 2018 - 6 Settembre 2019",
										 "Tutoraggio per il corso \"Analisi 1\" per gli studenti del primo anno in Matematica presso l'Università di Napoli \"Federico II\"")
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

	},
	
	lin : {
		mtitle : "Links",
		mtitlem : "LINKS",
		
		LIN : [
			LinCos ("Pagina istituzionale",
				       "https://phd.uniroma1.it/web/PAOLO-DE-DONATO_nP1895870_IT.aspx",
			       		"https://phd.uniroma1.it/web/PAOLO-DE..."),
			new LinRecord ("GitHub",
				       "https://github.com/Loara"),
			new LinRecord ("ORCID",
					"https://orcid.org/0000-0002-6280-3349")
		]
	}
};


