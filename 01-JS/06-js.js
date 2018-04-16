/* Les fonctions */


/* cette fonction ne retourne aucune valeur et ne prends pas de parametre */
function Bonjour() {
     alert(" Bonjour !");
}


/* j execute ma fonction  */
Bonjour();



function ditBonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong></p>");
    
}

/* appeler une fonction avec parametre */

ditBonjour("Cheffia", "Benallal");


/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */

function addition(nb1, nb2 ) {
    var somme = nb1 + nb2 ;
    document.write("La somme est " + somme);
    
}

addition(5, 3);

/* ------------------------------ 
 La fonction retourne le resultat */

 function addition(nb1, nb2 ) {
     return nb1 + nb2 ;
     
 }
 document.write("<p>" + addition(14,12) + "</p>" );













