/* ------------------------------------------------------
            LE DOM       
        ---------------------------------
         Le Dom est une interface de developement en js pour HTML 
         grace au DOM je peux acceder et modifier mon HTML
         L objet "Document" est le point d entrée vers mon contenu HTML
         Chaque page chargé dans mon navigateura un objet "document"     */


         /**
          * * Comment puis je faire pour recuperer les differentes informations de ma page HTML?
          */




          /*---------------------------------------------
                document.getElementById
                -----------------------------------
           document.getElementById est une fonction qui permet
            de recuperer un element HTML à partir de son ID   */
            var bonjour = document.getElementById('bonjour');
            console .log(bonjour);

        /*---------------------------------------------
                document.getElementByClassName
                 -----------------------------------
       document.getElementByClassName() est une fonction qui permet de récuperer un 
       ou plusieur éléments (une liste) HTML à partir de leur classe */
       
       var contenu = document.getElementsByClassName('contenu') ;
       console.log(contenu);


       // -- Me renvoi un tableau JS avec mes elements HTML (collection HTML)



          /*---------------------------------------------
                document.getElementByTagName
                 -----------------------------------
       document.getElementByTagName() est une fonction qui permet de récuperer un 
       ou plusieur éléments (une liste) HTML à partir de leur nom de balise  */


       var span = document.getElementByTagName('span');
       console.log(span);









