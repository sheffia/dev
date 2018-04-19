/* Les selecteurs Jquery */

// --Format : $('selecteur'
//  En jQuery,tous les selecteurs CSS sont disponible

$(function () {
    l = e => console.log(e);  
    
    // -- Selectionner toutes les balises SPAN
    l(document.getElementsByTagName('span'));
    l($('span'));

    // selelectionner mon menu grace à son ID
    l(document.getElementById('menu'));
    l($('#menu'));

    // selectionner un element par sa classe
    l(document.getElementByClassName('MaClasse'));
    l($('.MaClasse'));
    //selectionner par un attribut
    l($('[href="#"]'));
});