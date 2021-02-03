$(document).on("turbolinks:load",function() {
    $("#alerta").click(function(){
        $("body").prepend("<p style='background:yellow; font-weight:bold'>Alerta</p>")
    })
    $("#slide").click(function() {
        $("#parrafo").slideToggle("slow")
    })
    $(".oculto").hide();
    $('h3').click(function() {
        switch($(this).attr('id')) {
            case 'titulo1':
                $('#parrafo1').slideToggle("slow")
                break;
            case 'titulo2':
                $('#parrafo2').slideToggle("slow")
                break;
            case 'titulo3':
                $('#parrafo3').slideToggle("slow")
                break;
        }
    })
})
