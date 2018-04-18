/*-----------------------------
    Les evenements
 les evenements vont me permettre de déclencher une fonction ie une serie d instructions
 suite a une action de mon utilisateur


 Objectif :etre en mesure de capturer ces evenements afin d executer une fonction

 Les evenements : MOUSE
    click : au click sur un element
    mouseenter : la souris passe au dessus de la zone element
    mouseleave : la souris sort de la zone


 Les évenements KEYBOARD
  keydown : une touche du clavier est enfoncé
  keyup  : une touche du clavier a été relaché


 Les évenements WINDOW
 scroll : defilement de la fenetre
 resize : redimmensionnement de la fenetre
 
 Les évenements FORM
 change pour les elmts <input> <select><textarea>
 submit soumission du formulaire
 input :pour capter la saisie de l utilisateur sur un champ <input> 

############################## Les ecouteurs d evenements #############

pour attacher un événement à un element pour declarer un ecouteur d evenement
 qui se chargera de declencher une action 
je vais utiliser la syntaxe suivante :


 ---------------------------------- */
 var p = document.getElementById('MonParagraphe');

 // je souhaite que mon pragraphe change dcouleur rouge au clic de la souris
 
 function changerLaCouleurEnRouge() {
     p.style.color = "red";
     
 }
 p.addEventListener("click", changerLaCouleurEnRouge);


/* --------------------------------------------------------
                ~ LES EVENEMENTS 😈🤕 ~      
    
    Les évènements vont me permettre de déclencher une
    fonction, c'est à dire une série d'instructions ;
    suite à une action de mon utilisateur...
    
    OBJECTIF : Etre en mesure de capturer ces évènements
    afin d'executer une fonction.

    Les Evenements : MOUSE (Souris)

        click       : au clic sur un élément
        mouseenter  : la souris passe au dessus de la zone d'un élément.
        mouseleave  : la souris sort de cette zone.

    Les Evenements : KEYBOARD (Clavier)

        keydown     : une touche du clavier est enfoncée  ;
        keyup       : une touche du clavier a été relachée.

    Les Evenements : WINDOW (Fenêtre)

        scroll      : défilement de la fenêtre ;
        resize      : redimensionnement de la fenêtre.

    Les Evenements : FORM (Formulaire)

        change      : pour les éléments <input>, <select> et <textarea> ;
        submit      : à l'envoi (soumission) du formulaire ;
        input       : pour capter la saisie d'un utilisateur sur un champ <input>.

    ############# LES ECOUTEURS D'EVENEMENTS #############

    Pour attacher un évènement à un élément, ou autrement dit,
    pour déclarer un écouteur d'événement qui se chargera de
    déclencher une fonction, je vais utiliser la syntaxe suivante :

-------------------------------------------------------- */

var p = document.getElementById('MonParagraphe');

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris.

function changerLaCouleurEnRouge() {
    p.style.color = "red";
}

p.addEventListener('click', changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

 /* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/
var form1 = document.createElement("form");

var input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('setholder','saisissez du contenu ');
input1.id ="MonId";


form1.appendChild(input1);

document.body.appendChild(form1);

// var input11 = document.getElementById('saisie1');


 function alertinput1() { 
    console.log(input1.value); 
    alert("Vous venez de saisir le champ 1 de saisie")
    
}

input1.addEventListener("change",alertinput1);








