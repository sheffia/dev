/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créer au minimum 5 étudiants ****

 II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/






var PremierTrimestre = [
    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais    : 4,
            math        : 7,
            physique    : 4,
            gestinfq    : 18,
            musique     : 19
        }
    },
    {
        prenom  : "Salim",
        nom     : "SOUMARE",
        moyenne : {
            francais    : 4,
            math        : 12,
            physique    : 10,
            anglais     : 15
        }
    },
    {
        prenom  : "Rachma",
        nom     : "SALIM",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 16,
            espagnol    : 16,
            philo       : 14,
        }
    },
    {
        prenom  : "Ousmane",
        nom     : "MAMA",
        moyenne : {
            francais    : 8,
            math        : 13,
            anglais     : 16,
            espagnol    : 16,
            philo       : 6,
        }
    },
    {
        prenom  : "Cheffia",
        nom     : "BENALLAL",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 13,
            allemand    : 12,
            latin       : 10
        }
    }
];
console.log(PremierTrimestre);

// https://www.codingame.com

// -- Les Flemards.js

function l(e) {
    console.log(e);
}

function w(e) {
    document.write(e);
}



// -- j affiche la liste des etudiants

var nbreEtudiant = PremierTrimestre.length;
document.write('<p> Nombre etudiant :<strong>' + nbreEtudiant + '</strong></p>');


w('<ol>')
for (let i = 0; i < PremierTrimestre.length ; i++){
    document.write('<p> Nom :<strong>' + PremierTrimestre[i].nom + '</strong></p>');
    document.write('<p> Prenom :<strong>' + PremierTrimestre[i].prenom + '</strong></p>'); 
    console.log(PremierTrimestre[i]);
     var nbreDeMatiere = PremierTrimestre[i].moyenne.length;
     document.write('<p> Nombre de matiere :<strong>' + nbreDeMatiere + '</strong></p>');
} 
w('</ol>');

// nbre de matiere 
// var nbreDeMatiere = PremierTrimestre[i].moyenne.length;
// console.log(nbreDeMatiere);

/*for (let j = 0; j < PremierTrimestre[i].moyenne.length ; j++){


    document.write('<p> moyenne :<strong>' + PremierTrimestre[i].moyenne[j] + '</strong></p>'); 



} */



//console.log(PremierTrimestre[i]);



/*
var j = Prenoms.length;
document.write('taille' + j);
for(let i = 0; i <= 7 ; i++)  {
    document.write('<p> e :<strong>' + Prenoms[i] + '</strong></p>');
    console.log(Prenoms[i]);

} */ 



// correction prof
https://www.codingame.com

// -- Les Flemards.js

function l(e) {
    console.log(e);
}

function w(e) {
    document.write(e);
}

/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créer au minimum 5 étudiants ****

 II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais    : 4,
            math        : 7,
            physique    : 4,
            gestinfq    : 18,
            musique     : 19
        }
    },
    {
        prenom  : "Salim",
        nom     : "SOUMARE",
        moyenne : {
            francais    : 4,
            math        : 12,
            physique    : 10,
            anglais     : 15
        }
    },
    {
        prenom  : "Rachma",
        nom     : "SALIM",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 16,
            espagnol    : 16,
            philo       : 14,
        }
    },
    {
        prenom  : "Ousmane",
        nom     : "MAMA",
        moyenne : {
            francais    : 8,
            math        : 13,
            anglais     : 16,
            espagnol    : 16,
            philo       : 6,
        }
    },
    {
        prenom  : "Cheffia",
        nom     : "BENALLAL",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 13,
            allemand    : 12,
            latin       : 10
        }
    },
];

console.log(PremierTrimestre);

// -- Les Flemards.js

function l(e) {
    console.log(e);
}

function w(e) {
    document.write(e);
}

// -- Je souhaite afficher la liste de mes étudiants
w('<ol>');
// var NombreDeMatiere, SommeDesNotes;
for(let i = 0 ; i < PremierTrimestre.length ; i++) {
    
    let Etudiant = PremierTrimestre[i];
    l(Etudiant);

    var SommeDesNotes = 0, NombreDeMatiere = 0;

    w('<li>');
    
        w(Etudiant.prenom + ' ' + Etudiant.nom);
        w('<ul>');

            // -- Afficher les matières d'un Etudiant
            for(let matiere in Etudiant.moyenne) {

                l(matiere);
                w('<li>');

                    w(matiere + ' : ' + Etudiant.moyenne[matiere]);

                w('</li>');

                SommeDesNotes += Etudiant.moyenne[matiere];
                NombreDeMatiere++;

            } // -- Fin de la boucle matiere

            l('NombreDeMatiere : ' + NombreDeMatiere);
            l('SommeDesNotes : ' + (SommeDesNotes));

            w('<li>');
                w('<strong>Moyenne Générale : </strong>' + ( SommeDesNotes / NombreDeMatiere).toFixed(2) );
            w('</li>');

        w('</ul>');

    w('</li><br>');

}
w('</ol>');
