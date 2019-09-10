//on click grey out and strikethrough

$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delete to do 
$('ul').on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(event.which === 13){
        var newToDo = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+newToDo+"</li>");
        $(this).val("");   
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
}); 