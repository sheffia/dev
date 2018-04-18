/*  --------------------------------------------------------
             LA MANIPULATION DES CONTENUS
             ------------------------------------ */



             function l(e) {
                 console.log(e)
             }



             
// function l(e) {
//     console.log(e)
// }
// Nouvelle Syntaxe ECMA 6 avec les fonctions fléchées
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

l = e => console.log(e);


/* -- Je souhaite récuperer mon lien google    */
var google = document.getElementsById('google');
var bonjour = document.getElementById('bonjour');

l(google);

// acceder aux info de ce lien
l(google.href);
// acceder a l id
l(google.id);
// b: le texte de la balise
l(google.textContent);

//je modifie le contenu de mon lien
google.textContent ="Mon lien vers gooooooooooogle !";


/*----------------------------------------------
 Ajouter un élément Dans ma page 
 --------------------------------*/

/**
 * nous allons utilisé deux etapes
 * 1- La fonction document.createElement() va permettre de generer un nouvel element dans le DOM. 
 */

 // --def de l element 
 var span = document.createElement('span');
 // -- Si je souhaite lui donner un ID

 span.id = "MonSpan";

 // -- Lui attribuer du contenu 
 span.textContent ="Mon Beau Texte en JS";

 // -- 
 google.appendChild
 document.body.appendChild(p);





 /* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
<h1><a>TITRE</a></h1>
-------------------------------- */

var h1 = document.createElement('h1');
var a =document.createElement('a');
a.textContent ="Titre de mon article";
a.href("#");

// je met mon lien dans a dans mon h1
h1.appendChild(a);


// je met mon h1 dans la page
document.body.appendChild(h1);

//je veux que mon lien soit rouge
a.style.color ="red";

// mon lien ne doit pas etre souligné

a.style.textDecoration = "none";




































