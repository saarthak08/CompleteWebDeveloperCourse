
if(typeof jQuery =="undefined"){
    alert("JQuery is not installed.");
}

$(document).ready(function(){
    $("#circle").click(function(){
        alert("Circle id is clicked!");
        $("#myText").html("Hi! I am Saarthak");
    });

    $(".square").click(function(){
        alert("Square class is clicked!");
        $(".square").css("background-color","cyan");
        console.log($(".square").css("background-color"));
    });

    $("#animateButton").click(function(){
        $("#circle").animate({
            width:"400px",
            height:"400px",
            borderRadius:"0",
            marginLeft:"100px",
            marginTop:"100px"

        },2000,function(){
            $("#circle").css("background-color","violet");
        })
    });

    $("#myButton").click(function(){
        if($("#hidetext").css("display")=="none"){
            $("#hidetext").fadeIn();
        }
        else{
            $("#hidetext").fadeOut();
        }
    });

    $("div").click(function(){
        alert("div element is clicked!");
        if($(this).attr("id")=="circle"){
            alert("You clicked circle div!");
        }
        else{
            alert("You clicked square div!");
        }
    });
});


