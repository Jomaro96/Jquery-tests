$(document).ready(function(){
/*
    var ef_box = $("#ef_box")
    $("#show").click(function(){
        $(this).hide()
        $("#hide").show()
        ef_box.show("fast");
    });
    $("#hide").click(function(){
        $(this).hide()
        $("#show").show()
        ef_box.hide("fast");
    });
*/
/*var ef_box = $("#ef_box")
    $("#show").click(function(){
        $(this).hide()
        $("#hide").show()
        ef_box.fadeIn("slow");
    });
    $("#hide").click(function(){
        $(this).hide()
        $("#show").show()
        ef_box.fadeOut("fast");
    });*/

    var ef_box = $("#ef_box")
    $("#show").click(function(){
        $(this).hide()
        $("#hide").show()
        ef_box.fadeTo("slow", 1);
    });
    $("#hide").click(function(){
        $(this).hide()
        $("#show").show()
        ef_box.fadeTo("slow", 0);
    });
    $("#toggle").click(function(){
         ef_box.toggle("fast");/// HACE TODO EN UNO
    });

   
    $("#animate").click(function(){
        window.setTimeout(function(){
            ef_box.animate({marginLeft: '500px'}, 'slow')
              .animate({marginTop: "100px"},"slow")

              .animate({marginLeft:"0px"},"slow")

              .animate({marginTop: "0px",
                        borderRadius:"0px"},"slow");
        },"500");
    })

});
//SE PUEDEN AGREGAR FUNCIONES CALLBACK A LAS ANIMACIONES COMO SEGUNDO PARAMETRO
//slidetoggle
//slideup
//slidedown