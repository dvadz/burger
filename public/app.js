$(document).ready(function(){
    console.log("Document is ready!");

    $(document).on("click", ".eatfood", function(event){
        var id = event.target.id;
        var burger_name = event.target.getAttribute("data-burgername");
        
        $.post("/api/eat", {
            id: id,
            burger_name: burger_name
        })
        .then(function(){ 
            window.location.reload()
        });
    });
});