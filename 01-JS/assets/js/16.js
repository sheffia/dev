/* -- 
CONSIGNE : 
Considérons un Formulaire HTML avec les champs pseudo, age, email et mdp.
Considérons un Tableau JS contenant une liste de membre.
---------
ETAPE 1 : Lors de la saisie d'un Pseudo, vérifiez en temps réel grâce aux évènements que celui-ci n'existe pas dans le tableau de membre.
Si le Pseudo existe dans le tableau Membre, la notification pseudoError doit s'afficher et le bouton "submit" être désactivé.
A l'inverse, si le Pseudo n'existe pas dans le tableau Membre, ou que l'utilisateur à corriger son Pseudo, alors, le bouton est actif et la notification pseudoError ne s'affiche pas / plus.
---------
ETAPE 2 : L'inscription n'est possible qu'aux personnes majeurs de 18 ans.
Vous devez donc vérifier que l'age saisi est bien supérieur ou égale à 18 ans.
Si cette condition n'est pas valide, alors la notification ageError doit s'afficher et le bouton "submit" être désactivé.
Quand l'utilisateur corrige son age, la situation revient à la normal. La notification ageError ne s'affiche plus et le bouton submit est de nouveau disponible.
---------
ETAPE 3 : 

Lors de la saisie du Pseudo, vous devrez afficher en temps réel dans le titre id "Bienvenue" : Bonjour [Pseudo] : Pseudo étant la saisie en cours de l'utilisateur.

---------

ETAPE 4 : Si toutes les conditions sont validées, l'utilisateur va pouvoir procéder à son inscription.

En cliquant sur le bouton "M'inscrire", vous devrez enclencher une action permettant :

A. L'ajout de l'utilisateur dans le tableau.
B. L'affichage pour l'utilisateur sur la page d'un message de bienvenue, ainsi que la liste des membres inscrit dans une liste non-ordonnée.

Ex. Merci Hugo ! Tu es maintenant inscrit.
Voici la liste de nos Membres :

  Hugo : 26ans
  Rodrigue : 56ans
  ...
  
NB : Devra bien entendu s'afficher le membre qui vient de s'inscrire.
-- */




var membres = [
    {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
    {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
    {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
    {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
  ];  


  function verifPseudo(params) {
    for(let i = 0 ; i < membres.length ; i++) {
        if (membres.pseudo === pseudo.value ){
            var erreurPseudo = document.getElementsByClassName('pseudoError') ;
            

      console.log(pseudo.value);      
      console.log(erreurpseudo);      

  } else { }


  pseudo.addEventListener("change",verifPseudo);
  
  var contenu = document.getElementsByClassName('contenu') ;

//
// -- 1. Demander à l'utilisateur son email/mot de passe
var email   = prompt('Bonjour, Quel est votre email ?','<Saisissez votre email>');
var mdp     = prompt('votre mot de passe ?','<Saisissez votre mot de passe>');

// -- 2. Parcourir l'ensemble des données de mon tableau
// for(let user of BaseDeDonnees) {...}
for(let i = 0 ; i < BaseDeDonnees.length ; i++) {

    // -- 2a. Vérifier l'identification de l'utilisateur
    if(email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp) {
        
        // -- J'ai trouvé une correspondance
        isEmailInArray = true;
        w('Bonjour ' + BaseDeDonnees[i].prenom + ' !');

        // -- Je stop la boucle for, j'ai trouvé ce que je cherche.
        break;
    }

}









