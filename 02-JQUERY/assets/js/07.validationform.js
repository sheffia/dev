$(function () {
    /**
     * A la soumission de mon formulaire contact
     * ma fonction anonyme est executé avec en parametre mon
     *  evenement de type submit
     */
    $("#contact").submit(function (e) {
        /**
         * e.prevent permet de stopper la redirection HTML
         */
        e.preventDefault();
        // reinitialiser les erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .help-block').remove();


        // recuperation des champs du formulaire
        const nom = $('#nom');
        const prenom = $('#prenom');
        const tel = $('#tel');
        const email = $('#email');

        // verifier que le champs nom n est pas  nul

        if (nom.val().length === 0) {

            /**
             * si la valeur saisie dans le champ nom alors on rajoute la classe 'has-error 
             * à son parent avec un petit message d information
             */
            nom.parent().addClass('has-error');
            $("<p class='help-block'> Noubliez pas de saisir votre nom</p>").appendTo(nom.parent());

        }
        if (prenom.val().length === 0) {

            /**
             * si la valeur saisie dans le champ nom alors on rajoute la classe 'has-error 
             * à son parent avec un petit message d information
             */
            prenom.parent().addClass('has-error');
            $("<p class='help-block'> Noubliez pas de saisir votre prenom</p>").appendTo(prenom.parent());


        }
/**
 * Permet de vérifier si une adresse email est valide, 
 * en se basant sur une expression régulière.
 * https://goo.gl/YdwQDm
 */
function validateEmail(email) {
    var TestEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return TestEmail.test(email);
}


        function isEmail(VerifEmail) {
            var TestEmail= 
            return 
            
        }
        




    







}); 

});


