var DebutDePhrase  ="Aujourd hui";
var DateDuJour = new Date;
var SuiteDephrase ="sont presents";
var NbApprenants = 12;
var FinDePhrase = "Apprenants .<br>";



/* nous souhaitons grace à la concatenation afficher la date */
document.write(DebutDePhrase + DateDuJour.getDate() + "/" + DateDuJour.getMonth() +DateDuJour.getFullYear() +SuiteDePhrase+ NbApprenants+FinDePhrase);




/* ----------------------------------------------
  EXERCICE :
  Créez une concaténation à partir des éléments suivants :  
---------------------------------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "Hugo et j'ai ";
var age     = 28;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3) ;