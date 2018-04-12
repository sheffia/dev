// -- alert('WOW tu es toujour avec moi');
// -- deux slach pour faire une ligne de commentaire
/*     ici  commentaire  deux lignes 
  plusieur ligne  
  raccourci  ctrl+ shift +A
  alt+shift+A */
/* declaration de la variable */
var Prenom;
/* affectation variable */
Prenom = " Cheffia";
/* affichage console */
console.log(Prenom);


// --ici typeof me permet de connaitre le type de ma variable
console.log(typeof Prenom);
//-- d declaration 




// -- declaration d un nombre
var Age = 40;
// -- afficher dans la console
console.log(Age);
// -- connaitre son type
console.log(Prenom);
/* -------------------------------------------------------------- 
|               LA PORTEE DES VARIABLES                                                                                        |
|  LES VARIABLES DECLARE DIRECTEMENT A LA RACINE DU FICHIER JS                                                                 |
| sont appellées les variables globales                                                                                        |
| Elles sont disponible dans l ensemble de votre document y compris dans les fonstions                                         |
|     Les variables déclaré à l interieur dune fonction sont appellées variable locale                                         |
|    Elles sont disponible uniquement dans le contexte  de la fonction , ou du bloc qui les contients                           |
| Depuis Ecma 6 ; vous pouvez declare une variable avec le mot "let".                                                          |
| votre variable sera accessible uniquement dans le bloc qui la contient .C est à dire dans le bloc dans lequel ,elle est contenue |
| Si elle est déclaré dans une condition elle sera disponible uniquement dans le bloc de la condition.                      |
| ---------------------------------------------------------------------------------------------------------------------------- */

//  -- Les variables  Float
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);
// -- les booleens
var unBooleen = false; //
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les constantes

/**
 * la declaration CONST permet de creer une constante accessible uniquement en lecture. Sa valeur ne pourra pas etre modifier par des reaffectations ulterieurs
 * *
 * généralement , par convention les constantes sont en majuscule
 * 
 * Depuis ECMA 6 , on recommande l utilisation des constants plutot que var ou let
 * s il il ny aura pas de modification de valeur à votre variable
 *   
 *  
 */

 const HOST = "localhost";
 const USER = "root";
const PASSWORD = "Cheffia";

// -- on ne peut faire USER = "Benallal" apres
// --            ou    const USER = "Benallal" apres


/* -------------------------------------------------------------\
|   La minute info
| au fur et à mesure que l on affecte et reaffecte des valeurs à une variable
| celle ci prend une nouvelle valeur et un nouveau type
| en javascript les variables sont autotypé
| pour convertir une variable de type NUMBER en STRING et STRING en NUMBER
| je peux utiliser les fonctions natives de JavaScript.
----------------------------------------------------------------------- */

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* la fonction parseInt() pour retourner un entier à partir d une string */

unNombre = parseInt(unNombre) ;
console.log(typeof unNombre);


// -- je reaffecte une valeur à ma variable
unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// -- La conversion d un nombre enstring avec toString();

unNombre = 10;
var unNombreEnString = unNombre.toString();
console.log(unNombre);
console.log(unNombreEnString);


































