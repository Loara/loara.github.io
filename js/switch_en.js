
import { ResRecord, CurRecord, CurRecordV, LinRecord, LinCos, Lin_Logo } from './data.js';

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
        [ new CurRecordV( "June 1, 2023 - now",
          {
            "slim":
            [
              "Assegno di ricerca (postdoc position) in Mathematics at University of Padua",
              "Supervisors: prof. Davide Vittone and prof. Annalisa Massaccesi",
              "Title: Some questions in Geometrie Measure Theory"
            ]
          }
        )]),
      new CurRecord( "Education",
        [ new CurRecordV( "November 1, 2022 - May 31, 2023",
          {
            "slim":
            [
              "Assegno di ricerca in Mathematics at University of Rome \"La Sapienza\"",
              "Supervisor: prof. Emanuele N. Spadaro",
              "Title: Minimal surfaces and free boundary problems: study of singularities of codimension greater than one"
            ]
          }),
          new CurRecordV( "November 1, 2019-May 29, 2023",
          {
            "slim":
            [
              "PhD in Mathematics at University of Rome \"La Sapienza\"",
              "Advisor: prof. Emanuele N. Spadaro",
              "Thesis: Rectifiability of stationary varifolds branching set with multiplicity at most 2"
            ]
          }),
          new CurRecordV( "August 9-20, 2021",
          [
            [
              "Participation at the",
              {
                "val" : "30",
                "sup" : "th"
              },
              "Jyväskylä Summer School, following these courses:"								
            ],
            {
              "elenco" : [
                [
                  {
                    "emph" : "Shape Optimization and Free Boundary Problems"
                  },
                  "(held by prof. Dorin Bucur)",
                ],
                [
                  {
                    "emph" : "Geometric Evolution Problems"
                  },
                  "(held by prof. Massimiliano Morini)"
                ],
                [
                  {
                    "emph" : "Differential Calculus on the Wasserstein Space and Mean Field Games"
                  },
                  "(held by prof. Pierre Cardaliaguet)"
                ]
              ]
            }
          ]),
          new CurRecordV ("July 22 - August 16, 2019",
            [
              "Participation at Scuola Matematica Interuniversitaria in Perugia, attending the following courses:",
              {
                "elenco" : [
                  [
                    {
                      "emph" : "Functional Analysis"
                    },
                    "(held by prof. Marius Ghergu, final mark A+)"
                  ],
                  [
                    {
                      "emph" : "Differential Geometry"
                    },
                    "(held by prof. Liviu Ornea, final mark A++)"
                  ]
                ]
              }
            ]
          ),
          new CurRecordV( "2017-2019",
            {
              "slim" :
              [
                "Master's degree in Mathematics at University of Naples \"Federico II\"",
                "Thesis: The quantitative isoperimetric inequality",
                "Advisor: prof. Nicola Fusco",
                "Graduation mark: 110/110 cum laude"
              ]
            }
          ),
          new CurRecordV( "2014-2017",
            {
              "slim":
              [
                "Bachelor's degree in Mathematics at University of Naples \"Federico II\"",
                "Thesis: Il teorema di Rouché e applicazioni",
                "Advisor: prof. Luigi Greco",
                "Graduation mark: 110/110 cum laude"
              ]
            }
          ),
          new CurRecordV( "2009-2014",
            "Secondary education.")
        ]),
      new CurRecord( "Prizes and awards",
        [ new CurRecordV( "June 10, 2016",
          "Prize \"Buon compleanno Federico II\" due to excellence of his cursus studiorum"),
          new CurRecordV( "May 8-11, 2014",
            "Silver medal at Italian National Mathematical Olympiad."),
          new CurRecordV( "May 9-12, 2013",
            "Bronze medal at Italian National Mathematical Olympiad."),
          new CurRecordV( "May 5-8, 2011",
            "Participation at Italian National Mathematical Olympiad.")
        ]),
      new CurRecord( "Other activities",
        [ new CurRecordV( "November 1, 2018 - September 6, 2019",
          "Tutoring activity about \"Analisi 1\" course of first year students in Mathematics at University of Naples \"Federico II\"")
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
        "ORCID-iD_icon-vector.svg")
    ]
  },

  ema : {
    tit : "Email",
    war : [
      {
        emph : "Warning"
      },
      "Only plain text emails are accepted by this address. To prevent your messages from being automatically trashed you should be sure to use the MIME type text/plain for your email."
    ],
    cli :  "Click here to get the address"
  }
};


