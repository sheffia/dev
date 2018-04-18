/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/



var PremierTrimestre = [
    {
        nom: "Benallal",
        prenom: "Cheffia",
        matieres: {
            français: 12,
            Math: 15,
            Physique: 10,
            svt: 12
        }
    },

    {

        nom: "Liegeard",
        prenom: "Hugo",
        matieres: {
            français: 13,
            Math: 14,
            Physique: 13,
            svt: 14
        }
    },
    {
    nom: "D'HAEM",
    prenom: "Gregory",
    matieres: {
        français: 14,
        Math: 16,
        Physique: 16,
        svt: 14
    }
},
{
    nom: "NOUEL",
    prenom: "Rodrigue",
    matieres: {
        français: 11,
        Math: 11,
        phylosophie: 13,
        allemand: 13,
        anglais: 10
    }
},
{
    nom: "SOUMARE",
    prenom: "Salim",
    matieres: {
        français: 12,
        Math: 12,
        sport: 13,
        musique: 12
    }
}

]
var j = PremierTrimestre.length;
for (let i = 0; i < PremierTrimestre.length ; i++){
    document.write('<p> Etudiant :<strong>' + PremierTrimestre[i] + '</strong></p>'); 
    console.log(PremierTrimestre[i]);

}



/*
var j = Prenoms.length;
document.write('taille' + j);
for(let i = 0; i <= 7 ; i++)  {
    document.write('<p> e :<strong>' + Prenoms[i] + '</strong></p>');
    console.log(Prenoms[i]);

} */ 







