var Contacts = [

    {
        prenom      :   "Hugo",
        nom         :   "LIEGEARD",
        coordonnees :   {
            email   :   "wf3@hl-media.fr",
            tel     :   {
                fixe    :   "0596 108 328",
                fax     :   "0596 108 632",
                port    :   {
                    prive   :   "07 83 97 10 15",
                    pro     :   "07 83 97 15 15"
                }
            },
            adresse :  {
                ville   :   "Ducos",
                cp      :   "97224",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
        
    },

    {
        prenom      :   "Rodrigue",
        nom         :   "NOUEL",
        coordonnees :   {
            email   :   "rodrigue.nouel@hl-media.fr",
            tel     :   {
                fixe    :   "0596 56 78 89",
                fax     :   "0596 32 15 22",
                port    :   {
                    prive   :   "0696 78 89 56",
                    pro     :   "0696 89 23 45"
                }
            },
            adresse :  {
                ville   :   "Fort-de-France",
                cp      :   "97200",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },





    {
        prenom      :   "Gregory",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "greg.dhaem@hl-media.fr",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "les Mesnuls",
                cp      :   "78490",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    }

];







// -- Déclaré un Tableau Indexé
var Prenoms = ["Salim", "Greg", "Rachma", "Freddy", "Cheffia"];

// -- Aperçu dans la console
console.log(Prenoms);

// -- Si je veux connaitre le nombre d'éléments de mon tableau ?
var NombreElementsDansMonTableau = Prenoms.length;
console.log(NombreElementsDansMonTableau);

// -- Pour récupérer une valeur dans un tableau indexé, j'utilise son index.
console.log(Prenoms[2]); // -- Rachma
console.log(Prenoms[0]); // -- Salim
console.log(Prenoms[4]); // -- Cheffia

// --
var i = 3;
console.log(Prenoms[i]); // -- Freddy

// -- Pour i = 0 (Au départ i vaut 0) ; tant que i est strictement inférieur à "NombreElementsDansMonTableau" (Prenoms.length) ; alors i++ (Incrementation par pas de 1)
for(let i = 0 ; i < NombreElementsDansMonTableau ; i++) {

    // -- Tous ce qui est située à l'intérieur des accolades, sera dans la boucle.
    console.log("Ici, i = " + i);
    console.log(Prenoms[i]);
    console.log("---");

}

// -- Voyons maintenant comment procéder avec des objets

var Contact = {
 // INDICE    VALEUR 
    prenom  : "Hugo",
    nom     : "LIEGEARD",
    tel     : "0783 97 15 15"
};

// -- Aperçu dans la console.
console.log(Contact);

// -- Pour récupérer les valeurs d'un objet j'utilise le " . " suivi de l'indice.
console.log("Prénom = " + Contact.prenom);
console.log("Nom = " + Contact.nom);
console.log("Téléphone = " + Contact.tel);

// -- Supposons que je souhaite avoir un tableau de contacts...
var ContactsAsArray = [
    [
        'Hugo',
        'LIEGEARD',
        [
            '0783 97 15 15',
            'wf3@hl-media.fr',
            [
                'Campus EDF',
                '17 Rue Albert Thomas',
                '78130',
                'Les Mureaux'
            ]
        ]
    ],
    [
        'Salim',
        'SOUMARE',
        [
            '0645 78 43 12',
            'salim@hl-media.fr',
            [
                'Campus EDF',
                '17 Rue Albert Thomas',
                '78130',
                'Les Mureaux'
            ]
        ]
    ],
]

console.log(ContactsAsArray)

// -- Ce n'est vraiment pas pratique pour manipuler les données... On va plutôt privilégier les Objets.

var Contacts = [
    "Hugo",
    "Greg",
    {
     // INDICE    VALEUR 
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        tel     : {
            fixe : "0596 108 328",
            port : "0783 97 15 15"
        }
    },
    {
    //  INDICE    VALEUR 
        prenom  : "Salim",
        nom     : "SOUMARE",
        tel     : {
            fixe : "01 45 78 89 56",
            port : "06 78 96 54 35"
        }
    }
];

// -- Aperçu dans la console de mon tableau de Contacts
console.log(Contacts);

// -- Comment accéder aux valeurs de mon objet, dans un tableau indexé !

    // -- 1. D'abord, je récupère l'objet
    console.log(Contacts[3]);

    // -- 2. Pour accéder aux valeurs de mon objet
    console.log("Prénom = " + Contacts[3].prenom);
    console.log("Nom = " + Contacts[3].nom);
    console.log("Téléphone Fixe = " + Contacts[3].tel.fixe);
    console.log("Téléphone Portable = " + Contacts[3].tel.port);

    // -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet située à l'index 3 de mon tableau "Contacts"


    var Prenoms = ["Salim", "Greg", "Rachma", "Freddy", "Cheffia"];
    
    // -- Aperçu dans la console
    console.log(Prenoms);
    
    // -- Si je veux connaitre le nombre d'éléments de mon tableau ?
    var NombreElementsDansMonTableau = Prenoms.length;
    console.log(NombreElementsDansMonTableau);
    
    // -- Pour récupérer une valeur dans un tableau indexé, j'utilise son index.
    console.log(Prenoms[2]); // -- Rachma
    console.log(Prenoms[0]); // -- Salim
    console.log(Prenoms[4]); // -- Cheffia
    
    // --
    var i = 3;
    console.log(Prenoms[i]); // -- Freddy
    
    // -- Pour i = 0 (Au départ i vaut 0) ; tant que i est strictement inférieur à "NombreElementsDansMonTableau" (Prenoms.length) ; alors i++ (Incrementation par pas de 1)
    for(let i = 0 ; i < NombreElementsDansMonTableau ; i++) {
    
        // -- Tous ce qui est située à l'intérieur des accolades, sera dans la boucle.
        console.log("Ici, i = " + i);
        console.log(Prenoms[i]);
        console.log("---");
    
    }
    
    // -- Voyons maintenant comment procéder avec des objets
    
    var Contact = {
     // INDICE    VALEUR 
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        tel     : "0783 97 15 15"
    };
    
    // -- Aperçu dans la console.
    console.log(Contact);
    
    // -- Pour récupérer les valeurs d'un objet j'utilise le " . " suivi de l'indice.
    console.log("Prénom = " + Contact.prenom);
    console.log("Nom = " + Contact.nom);
    console.log("Téléphone = " + Contact.tel);
    
    // -- Supposons que je souhaite avoir un tableau de contacts...
    var ContactsAsArray = [
        [
            'Hugo',
            'LIEGEARD',
            [
                '0783 97 15 15',
                'wf3@hl-media.fr',
                [
                    'Campus EDF',
                    '17 Rue Albert Thomas',
                    '78130',
                    'Les Mureaux'
                ]
            ]
        ],
        [
            'Salim',
            'SOUMARE',
            [
                '0645 78 43 12',
                'salim@hl-media.fr',
                [
                    'Campus EDF',
                    '17 Rue Albert Thomas',
                    '78130',
                    'Les Mureaux'
                ]
            ]
        ],
    ]
    
    console.log(ContactsAsArray)
    
    // -- Ce n'est vraiment pas pratique pour manipuler les données... On va plutôt privilégier les Objets.
    
    var Contacts = [
        "Hugo",
        "Greg",
        {
         // INDICE    VALEUR 
            prenom  : "Hugo",
            nom     : "LIEGEARD",
            tel     : {
                fixe : "0596 108 328",
                port : "0783 97 15 15"
            }
        },
        {
        //  INDICE    VALEUR 
            prenom  : "Salim",
            nom     : "SOUMARE",
            tel     : {
                fixe : "01 45 78 89 56",
                port : "06 78 96 54 35"
            }
        }
    ];
    
    // -- Aperçu dans la console de mon tableau de Contacts
    console.log(Contacts);
    
    // -- Comment accéder aux valeurs de mon objet, dans un tableau indexé !
    
        // -- 1. D'abord, je récupère l'objet
        console.log(Contacts[3]);
    
        // -- 2. Pour accéder aux valeurs de mon objet
        console.log("Prénom = " + Contacts[3].prenom);
        console.log("Nom = " + Contacts[3].nom);
        console.log("Téléphone Fixe = " + Contacts[3].tel.fixe);
        console.log("Téléphone Portable = " + Contacts[3].tel.port);
    
        // -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet située à l'index 3 de mon tableau "Contacts"
    
        console.log("---");
        var j = 2;
        console.log("Prénom = " + Contacts[j].prenom);
        console.log("Nom = " + Contacts[j].nom);
        console.log("Téléphone Fixe = " + Contacts[j].tel.fixe);
        console.log("Téléphone Portable = " + Contacts[j].tel.port);
    
        // -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet située à l'index 2 de mon tableau "Contacts"
    
        // -- Comment parcourir mon tableau avec des objets.
        // -- Supposons le tableau suivant :
        var Apprenants = [
            {
                nomcomplet  : "Hugo LIEGEARD",
                classe      : "Terminale S"
            },
            {
                nomcomplet  : "Greg D'HAEM",
                classe      : "CAP Cuisine"
            },
            {
                nomcomplet  : "Glenn PETERSON",
                classe      : "Master II Informatique"
            },
            {
                nomcomplet  : "Rachma SALIM",
                classe      : "Doctorat Scientifique"
            },
        ];
    
    console.log(Apprenants);
    
    // -- Si je veux connaitre le nombre d'apprenants ?
    var NombreDeApprenants = Apprenants.length;
    
    for(let i = 0 ; i < NombreDeApprenants ; i++) {
        console.log("Ici, i = " + i);
        // console.log(Apprenants[i]);
        console.log(Apprenants[i].nomcomplet + ' : ' + Apprenants[i].classe);
        console.log("---");
    }
    
    