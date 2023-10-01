$("button").click(function(){
    $("input").attr("type","text");
    document.body.style.backgroundColor = document.getElementById("color").value;
    $("input").after(function(){
        $("button").text("Double Click");
        $("button").dblclick(function(){
            $("input").attr("type","color");
            $("button").text("Click");
            
        });
    });
});
document.body.style.backgroundColor = document.getElementById("color").value;