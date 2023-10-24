$(document).ready(function(){

    var caja = $("#caja");
    
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    });
*/

    // HOVER
    function toRed(){
        $(this).css("background","red");
    }
    function toGreen(){
        $(this).css("background","green");
    }
    caja.hover(toRed,toGreen);

   /// CLICK DOUBLE CLICK
   caja.click(function() {
     $(this).css("background","blue")
            .css("color","white");
   });

   caja.dblclick(function() {
    $(this).css("background","orange")
           .css("color","black");
  });

   // FOCUS Y BLUR FOR INPUTS
    var input_nombre = $("#nombre");
    var div_datos = $("#datos");
   input_nombre.focus(function(){
      $(this).css("border","2px solid green");
   });

   input_nombre.blur(function(){
    $(this).css("border","2px solid transparent");
    div_datos.text($(this).val()).show(); //Cadena de funciones donde se guarda el texto y se Muestra elementos ocultos
    });

    //Mousedown y mouseup
    div_datos.mousedown(function(){
         $(this).css("border-color","grey")
    });

    div_datos.mouseup(function(){
        $(this).css("border-color","black")
   });

   //Mousemove Obtener cordenadas del mouse
   $(document).mousemove(function(){
    $('body').css("cursor","none");
     console.log(event.clientX);
     console.log(event.clientY);
     $("#sigueme").css("left",event.clientX);
     $("#sigueme").css("top",event.clientY);
   });
});