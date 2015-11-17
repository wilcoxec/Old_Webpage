$(function(){
    var bgimage = new Image();      
    bgimage.src="../images/b.png";       
$(".feature").hide();
    $(bgimage).load(function(){
        $(".feature").css("background-image","url("+$(this).attr("src")+")").fadeIn(2000);                  
    });
});