
import { ResRecord, LinRecord, LinCos, Lin_Logo, LinCos_Logo } from '/js/data.js';
import {Elenco, Slim, Sup, Emph, Cors} from './format.js'

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
    nothing : "In preparazione"
  },

  cur : {
    mtitle : "Curriculum",
    mtitlem : "CURRICULUM",
    generate : "Converti in LaTeX",
    records : [
      {
        title : "Posizione attuale",
        value : [
          {
            date : "1 giugno 2023 - ora",
            text : new Slim([
              "Assegno di ricerca in Matematica all'Università di Padova",
              [
                new Cors("Referenti:"),
                " prof. Davide Vittone e prof. Annalisa Massaccesi"
              ],
              [
                new Cors("Titolo:"),
                " Alcune questioni di Teoria Geometrica della Misura"
              ]
            ])
          }
        ]
      },
      {
        title : "Posizioni precedenti",
        value : [
          {
            date : "1 novembre 2022 - 31 maggio 2023",
            text : new Slim([
              "Assegno di ricerca in Matematica all'Università di Roma \"La Sapienza\"",
              [
                new Cors("Referente:"),
                " prof. Emanuele N. Spadaro",
              ],
              [
                new Cors("Titolo:"),
                " Superfici minime e problemi a frontiera libera: studio delle singolarità di codimensione maggiore di uno"
              ]
            ])
          }
        ]
      },
      {
        title : "Formazione",
        value : [
          {
            date : "1 novembre 2019-29 maggio 2023",
            text : new Slim([
              "Dottorato in Matematica all'Università di Roma \"La Sapienza\"",
              [
                new Cors("Relatore:"),
                " prof. Emanuele N. Spadaro"
              ],
              [
                new Cors("Tesi:"),
                " Rectifiability of stationary varifolds branching set with multiplicity at most 2"
              ]
            ])
          },
          
          {
            date : "2017-2019",
            text : new Slim([
              "Laurea magistrale in Matematica presso l'Università di Napoli \"Federico II\"",
              [
                new Cors("Tesi:"),
                " The quantitative isoperimetric inequality"
              ],
              [
                new Cors("Relatore:"),
                " prof. Nicola Fusco"
              ],
              [
                new Cors("Voto finale:"),
                " 110/110 cum laude"
              ]
            ])
          },
          {
            date : "2014-2017",
            text : new Slim([
              "Laurea triennale in Matematica presso l'Università di Napoli \"Federico II\"",
              [
                new Cors("Tesi:"),
                " Il teorema di Rouché e applicazioni"
              ],
              [
                new Cors("Relatore:"),
                " Luigi Greco"
              ],
              [
                new Cors("Voto finale:"),
                " 110/110 cum laude"
              ]
            ])
          },
          {
            date : "2009-2014",
            text : "Scuola superiore."
          }
        ]
      },
      {
        title : "Scuole e workshops",
        value : [
          {
            date : "9-20 agosto 2021",
            text : [
              "Partecipazione alla ",
              new Sup("30", "th"),
              " Jyväskylä Summer School, frequentando i seguenti corsi: ",
              new Elenco([
                [
                  new Emph("Shape Optimization and Free Boundary Problems"),
                  " (tenuto dal prof. Dorin Bucur)"
                ],
                [
                  new Emph("Geometric Evolution Problems"),
                  " (tenuto dal prof. Massimiliano Morini)"
                ],
                [
                  new Emph("Differential Calculus on the Wasserstein Space and Mean Field Games"),
                  " (tenuto dal prof. Pierre Cardaliaguet)"
                ]
              ])
            ]
          },
          {
            date : "22 luglio - 16 agosto 2019",
            text : [
              "Partecipazione alla Scuola Matematica Interuniversitaria di Perugia, seguendo i seguenti corsi: ",
              new Elenco([
                [
                  new Emph("Functional Analysis"),
                  " (tenuto dal prof. Marius Ghergu, voto finale A+)"
                ],
                [
                  new Emph("Differential Geometry"),
                  " (tenuto dal prof. Liviu Ornea, voto finale A++)"
                ]
              ])
            ]
          }
        ]
      },
      {
        title : "Premi e riconoscimenti",
        value : [ 
          {
            date : "10 giugno 2016",
            text : "Premio \"Buon compleanno Federico II\" per l'eccellenza del cursus studiorum"
          },
          {
            date : "8-11 maggio 2014",
            text : "Medaglia d'argento alla fase nazionale delle Olimpiadi della Matematica"
          },
          {
            date : "9-12 maggio 2013",
            text : "Medaglia di bronzo alla fase nazionale delle Olimpiadi della Matematica"
          },
          {
            date : "5-8 maggio 2011",
            text : "Partecipazione alla fase nazionale delle Olimpiadi della Matematica"
          }
        ]
      },
      {
        title : "Altre attività",
        value : [ 
          {
            date : "1 novembre 2018 - 6 settembre 2019",
            text : "Tutoraggio per il corso \"Analisi 1\" per gli studenti del primo anno in Matematica presso l'Università di Napoli \"Federico II\""
          }
        ]
      }
    ]
  },

  res : {
    mtitle : "Risorse",
    mtitlem : "RISORSE",
    Rname : "Nome risorsa",
    Rlan : "Lingua",
    Rtype : "Tipo di file",

    RES : [
      new ResRecord ( "Tesi di dottorato",
        "Inglese",
        "PDF",
        "assets/res/Tesi_dottorato_De_Donato.pdf"),
      new ResRecord ( "Appunti di Analisi Funzionale (bozza)",
        "Italiano",
        "PDF",
        "assets/res/AnalisiFunzionale.pdf" ),
      new ResRecord ( "Appunti di Teoria dei Gruppi avanzata (bozza)",
        "Italiano",
        "PDF",
        "assets/res/IstAlgSup.pdf" ),
      new ResRecord ( "Appunti di Geometria Algebrica (bozza)",
        "Italiano",
        "PDF",
        "assets/res/geoma.pdf" ),
      new ResRecord ( "Limiti in due o più variabili (bozza)",
        "Italiano",
        "PDF",
        "assets/res/formula_it.pdf" ),
      new ResRecord ( "Successioni di Fibonacci generalizzate (bozza)",
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
        "https://www.math.unipd.it/dipartimento/persone/paolo.de_donato/",
        "https://www.math.unipd.it/dipart..."),
      Lin_Logo ("Pagina GitHub",
        "https://github.com/Loara",
        "GitHub-Mark-120px-plus.png"),
      Lin_Logo ("ORCID iD",
        "https://orcid.org/0000-0002-6280-3349",
        "ORCID-iD_icon-vector.svg"),
      LinCos_Logo ("Baduk Club",
        "https://baduk.club/profile/1689092500874x366725001519756740",
        "https://baduk.club/profile/...",
        "baduk.png")
    ]
  },

  ema : {
    tit : "Email",
    war : [
      new Emph("Attenzione:"),
      " Solo le email contenenti testo semplice verranno accettate. Per evitare che i suoi messaggi vengano automaticamente cestinati si assicuri di usa text/plain come MIME type per le  sue email."
    ],
    cli :  "Clicca qui per ottenere l'indirizzo"
  }

};


