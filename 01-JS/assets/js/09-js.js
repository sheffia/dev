/*   BOUCLES
*/

//  -- Boucle for


for(let i = 0; i <= 10 ; i++)  {
    document.write('<p> IInstruction Executée :<strong>' + i + '</strong></p>');

} 


var j = 0;
// -- La Boucle While
while (j <= 10 ) {
            document.write('<p> Instruction Executée :<strong>' + j + '</strong></p>')
    // incrementation

    j++;
    
}



/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

// Console.log(Prenoms);
var j = Prenoms.length;
document.write('taille' + j);
for(let i = 0; i <= 7 ; i++)  {
    document.write('<p> Instruction Executée :<strong>' + Prenoms[i] + '</strong></p>');
    console.log(Prenoms[i]);

} 
var j = Prenoms.length;
document.write('taille' + j);
for(let i = 0; i < j ; i++)  {
    document.write('<p> Instruction Executée :<strong>' + Prenoms[i] + '</strong></p>');

} 

// boucle while

var j = 0;
while(j < Prenoms.length){
    console.log(Prenoms[j]);
}


// Boucle ForEach

 /* Prenoms.forEach(affichePrenom);
function affichePrenom(valeur, i ){
    Console.log(i + ' ' + valeur);
} */

// Boucle For of

/* for(apotre of Prenoms) {
    console.log(apotre);
}
*/

// site à consulter boucle optimisation
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
// https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/




