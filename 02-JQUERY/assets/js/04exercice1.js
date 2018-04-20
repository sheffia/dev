


 // document.getElementById('MonFormulaire').addEventListener('submit', MaFonctionAExecuter);

        // $('#MonFormulaire').submit(function() {...});

        $('#MonFormulaire').on('submit', function(e) {

            // -- Permet d'annuler l'action par défaut du submit (La redirection HTML)
            e.preventDefault();
            
            // -- Version Courte
            // console.log($(this));

            $(this).replaceWith('<p>Bonjour ' + $('#nomcomplet').val() + ' !</p>');

            // -- Version Longue
            $('#MonFormulaire').hide();

            // -- Exemple 1
            // document.createElement('p')

            $('<p>').append('Bonjour ' + $('#nomcomplet').val() + ' !').appendTo($('body'))

            // -- Exemple 2
            $('<p>Bonjour ' + $('#nomcomplet').val() + ' !</p>').appendTo('body');

        });



        /* -------------------------------------------------
        |             ~~~   LA CONSIGNE     ~~~            |
        |                                                  |
        | A partir du Formulaire de Contact ci-dessus :    |
        |                                                  |
        |   1. Afficher à l'utilisateur un Récapitulatif   |
        |   de sa demande de contact.                      |
        |                                                  |
        ------------------------------------------------- */


        $('#MonFormulaire').on('submit', function(e) {
            e.preventDefault();
            $('#MonFormulaire').hide();




        });


        <form action="traitement.php" id="MonFormulaire">
        <input type="text" required placeholder="Nom et Prénom" id="nomcomplet">
        <input type="submit" value="Je Valide">
    </form>