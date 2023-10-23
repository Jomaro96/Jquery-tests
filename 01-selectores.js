$(document).ready(function(){
    //ID SELECTORS
    $("#red").css("background","red")
             .css("color","white"); //metodo css tiene de parametros propiedad y valor, se pueden hacer cadenas del metodo
    $("#yellow").css("background","yellow")
             .css("color","blue"); //metodo css tiene de parametros propiedad y valor, se pueden hacer cadenas del metodo
    $("#green").css("background","green")
             .css("color","black"); //metodo css tiene de parametros propiedad y valor, se pueden hacer cadenas del metodo

    //Selector de clases         
    $(".zebra").css("border","5px dashed black");
}); //document ready Se espera a que cargue toda la pagina web
// El $ se refiere a jquery, se puede usar eso o escribir jquery