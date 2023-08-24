
import { ResRecord, LinRecord, LinCos, Lin_Logo, LinCos_Logo } from './data.js';
import {Elenco, Slim, Sup, Emph, Cors} from './format.js'

export const dictio = {
  hom : {
    mtitle : "Home",
    mtitlem : "HOME",
    description : "\"I think that at the origin of creativity there is what I call the ability or willingness to dream; to imagine different worlds, different things, trying to combine them in your imagination in various ways.\"",
    author : "Ennio De Giorgi"
  },

  pub : {
    mtitle : "Publications",
    mtitlem : "PUBLICATIONS",
    nothing : "In preparation"
  },

  cur : {
    mtitle : "Curriculum",
    mtitlem : "CURRICULUM",
    generate : "Convert to LaTeX",
    records : [
      {
        title : "Current position",
        value : [ 
          {
            date : "June 1, 2023 - now",
            text : new Slim([
                "Assegno di ricerca (postdoc position) in Mathematics at University of Padua",
                [
                  new Cors("Supervisors:"),
                  " prof. Davide Vittone and prof. Annalisa Massaccesi"
                ],
                [
                  new Cors("Title:"),
                  " Some questions in Geometrie Measure Theory"
                ]
              ])
          }
        ]
      },
      {
        title : "Previous positions",
        value : [
          {
            date : "November 1, 2022 - May 31, 2023",
            text : new Slim([
              "Assegno di ricerca in Mathematics at University of Rome \"La Sapienza\"",
              [
                new Cors("Supervisor:"),
                " prof. Emanuele N. Spadaro"
              ],
              [
                new Cors("Title:"),
                " Minimal surfaces and free boundary problems: study of singularities of codimension greater than one"
              ]
            ])
          }
        ]
      },
      {
        title : "Education",
        value : [ 
          {
            date : "November 1, 2019-May 29, 2023",
            text : new Slim([
              "PhD in Mathematics at University of Rome \"La Sapienza\"",
              [
                new Cors("Advisor:"),
                " prof. Emanuele N. Spadaro"
              ],
              [
                new Cors("Thesis:"),
                " Rectifiability of stationary varifolds branching set with multiplicity at most 2"
              ]
            ])
          },
          {
            date : "2017-2019",
            text : new Slim([
              "Master's degree in Mathematics at University of Naples \"Federico II\"",
              [
                new Cors("Thesis:"),
                " The quantitative isoperimetric inequality"
              ],
              [
                new Cors("Advisor:"),
                " prof. Nicola Fusco"
              ],
              [
                new Cors("Graduation mark:"),
                " 110/110 cum laude"
              ]
            ])
          },
          {
            date : "2014-2017",
            text : new Slim([
              "Bachelor's degree in Mathematics at University of Naples \"Federico II\"",
              [
                new Cors("Thesis:"),
                " Il teorema di Rouché e applicazioni"
              ],
              [
                new Cors("Advisor:"),
                " prof. Luigi Greco"
              ],
              [
                new Cors("Graduation mark:"),
                " 110/110 cum laude"
              ]
            ])
          },
          {
            date : "2009-2014",
            text : "Secondary education."
          }
        ]
      },
      {
        title : "Schools and workshops",
        value : [
          {
            date : "August 9-20, 2021",
            text : [
              "Participation at the ",
              new Sup("30", "th"),
              " Jyväskylä Summer School, following these courses: ",
              new Elenco([
                  [
                    new Emph("Shape Optimization and Free Boundary Problems"),
                    " (held by prof. Dorin Bucur)"
                  ],
                  [
                    new Emph("Geometric Evolution Problems"),
                    " (held by prof. Massimiliano Morini)"
                  ],
                  [
                    new Emph("Differential Calculus on the Wasserstein Space and Mean Field Games"),
                    " (held by prof. Pierre Cardaliaguet)"
                  ]
                ])
            ]
          },
          {
            date : "July 22 - August 16, 2019",
            text : [
              "Participation at Scuola Matematica Interuniversitaria in Perugia, attending the following courses: ",
              new Elenco([
                [
                  new Emph("Functional Analysis"),
                  " (held by prof. Marius Ghergu, final mark A+)"
                ],
                [
                  new Emph("Differential Geometry"),
                  " (held by prof. Liviu Ornea, final mark A++)"
                ]
              ])
            ]
          },
        ]
      },
      {
        title : "Prizes and awards",
        value : [ 
          {
            date : "June 10, 2016",
            text : "Prize \"Buon compleanno Federico II\" due to excellence of his cursus studiorum"
          },
          {
            date : "May 8-11, 2014",
            text : "Silver medal at Italian National Mathematical Olympiad."
          },
          {
            date : "May 9-12, 2013",
            text : "Bronze medal at Italian National Mathematical Olympiad."
          },
          {
            date : "May 5-8, 2011",
            text : "Participation at Italian National Mathematical Olympiad."
          }
        ]
      },
      {
        title : "Other activities",
        value : [ 
          {
            date : "November 1, 2018 - September 6, 2019",
            text : "Tutoring activity about \"Analisi 1\" course of first year students in Mathematics at University of Naples \"Federico II\""
          }
        ]
      }
    ]
  },

  res : {
    mtitle : "Resources",
    mtitlem : "RESOURCES",
    Rname : "Resource name",
    Rlan : "Language",
    Rtype : "File type",

    RES : [
      new ResRecord ( "PhD Thesis",
        "English",
        "PDF",
        "assets/res/Tesi_dottorato_De_Donato.pdf"),
      new ResRecord ( "Topics in Functional Analysis (draft)",
        "Italian",
        "PDF",
        "assets/res/AnalisiFunzionale.pdf" ),
      new ResRecord ( "Notes about Advanced Group Theory (draft)",
        "Italian",
        "PDF",
        "assets/res/IstAlgSup.pdf" ),
      new ResRecord ( "Notes about Algebraic Geometry (draft)",
        "Italian",
        "PDF",
        "assets/res/geoma.pdf" ),
      new ResRecord ( "Limits in Two or more variables (draft)",
        "Italian",
        "PDF",
        "assets/res/formula_it.pdf" ),
      new ResRecord ( "Generalized Fibonacci sequences (draft)",
        "Italian",
        "PDF",
        "assets/res/Fibonacci.pdf" )
    ]
  },
  
  lin : {
    mtitle : "Links",
    mtitlem : "LINKS",	
    LIN : [
      LinCos ("Institutional page",
        "https://www.math.unipd.it/en/department/people/paolo.de_donato/",
        "https://www.math.unipd.it/en/depa..."),
      Lin_Logo ("GitHub page",
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
      new Emph("Warning"),
      " Only plain text emails are accepted by this address. To prevent your messages from being automatically trashed you should be sure to use the MIME type text/plain for your email."
    ],
    cli :  "Click here to get the address"
  }
};


