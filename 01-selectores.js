$(document).ready(function(){
    //ID SELECTORS
    $("#red").css("background","red")
             .css("color","white"); //metodo css tiene de parametros propiedad y valor, se pueden hacer cadenas del metodo
    $("#yellow").css("background","yellow")
             .css("color","blue"); //metodo css tiene de parametros propiedad y valor, se pueden hacer cadenas del metodo
    $("#green").css("background","green")
             .css("color","black"); //metodo css tiene de parametros propiedad y valor, se pueden hacer cadenas del metodo

    //Selector de clases         
    //$(".zebra").css("border","5px dashed black");

   $("#selector_class").children().click(function() {
     if($(this).hasClass("zebra")) //attr se utiliza para sacar el nombre de clase o id
     {
     $(this).removeClass("zebra"); //removeclass quita una o todas las clases si no se define
     }
     else 
     {
     $(this).addClass("zebra");
     }
   }); //Seleccione el hijo de mi DIV para que a ese hijo se le agregue la clase deseada
 
   //Selectores de etiqueta
   var parrafos = $("p").css("cursor","pointer")
   parrafos.click(function(){
    if($(this).hasClass("Grande"))
    {
       $(this).removeClass("Grande");
    }
    else
    {
      $(this).addClass("Grande");
    }
   });

   //Selectores por atributo
   $("[title ='Google']").css('background','#ccc');
   $("[title ='Linkedin']").css("background","blue")
}); //document ready Se espera a que cargue toda la pagina web
// El $ se refiere a jquery, se puede usar eso o escribir jquery