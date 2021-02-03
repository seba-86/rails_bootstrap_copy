$(document).ready(function(){
    console.log(">> alert file");

    $(".alert-close").click(function(){
        $(".alert").fadeOut('slow', function(){
            $(this).remove()
        })
    })
});