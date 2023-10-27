$(document).ready(function(){
        
    reloadLinks();

        $("#add_button").click(function(){
            var c_link = ($("#add_link").val())
            $("#menu").append("<li><a href='"+c_link+"'>"+c_link+"</a></li>"); //html() incrusta, no anade, para eso usar append()
            reloadLinks();
        });

});
//html INCRUSTA
//append AGREGA AL FINAL
//prepend AGREGA AL INICIO
//before/after AGREGA FUERA DE LA LISTA

function reloadLinks(){
    $("a").each(function(index){
        var that = $(this);
        var enlace = that.attr("href"); ///attr sirve para ver los atributos de tags
        that.text(enlace);
        that .attr("target","_blank");
    }) //metodo que recorre elementos del a tag, tiene parametro de index
}