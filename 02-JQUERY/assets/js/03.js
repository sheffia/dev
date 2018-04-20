/* Le CHAINAGE DE METHODE AVEC jQUERY      */


$(function () {
    console.log($('div'));

    // je souhaite cacher toute les div de ma page html
    $('div').hide('slow',function(){ 
        /**
         * une fois que la methode hide est termine mon alerte peut s executer
         * nb:la fonction s executera pour l ensemble des elements du selecteur
         * 
         */

        alert('fin de hide');
        $('div').css('background','yellow');
        $('div').css('color','red');
        $('div').show('slow');
        $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
        $('p').hide(1000).css({'color':'blue','font-size':'20px'}).delay(2000).show(500);








    }); // fin du hide
});