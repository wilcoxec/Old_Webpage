$(document).ready(function() {
  //variable for the 'stroke-dashoffset' unit
  var $dashOffset = $(".st0").css("stroke-dashoffset");
  //on a scroll event - execute function
  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
    //convert dashoffset pixel value to interger
  //  var $newUnit = parseInt($dashOffset, 10);
    //get the value to be subtracted from the 'stroke-dashoffset'
    //var $offsetUnit = $percentageComplete * ($newUnit / 100);
    //set the new value of the dashoffset to create the drawing effect
  if ($(window).scrollTop() > $("#frame").offset().top - 400 ) {
      $(".st0").css({"animation" : "dash 6s linear forwards","-webkit-animation" : "dash 6s linear forwards" });
      
      $(".fill").css({"animation" : "filling 2s linear forwards","-webkit-animation" : "filling 2s linear forwards" });

      $(".o2").css({"animation-delay" : "0.2s"});
      $(".o3").css({"animation-delay" : "0.4s"});
      $(".o4").css({"animation-delay" : "0.6s"});
      $(".o5").css({"animation-delay" : "0.8s"});
      $(".o6").css({"animation-delay" : "1s"});
      $(".o7").css({"animation-delay" : "1.2s"});
      $(".o8").css({"animation-delay" : "1.4s"});
      $(".o9").css({"animation-delay" : "1.6s"});
      $(".o10").css({"animation-delay" : "1.8s"});
      $(".o11").css({"animation-delay" : "2s"});
      $(".o12").css({"animation-delay" : "2.2s"});
      $(".o13").css({"animation-delay" : "2.4s"});
      $(".o14").css({"animation-delay" : "2.6s"});
      $(".o15").css({"animation-delay" : "2.8s"});



      $(".l1").css({"animation-delay" : "0.4s"});
      $(".l2").css({"animation-delay" : "0.6s"});
      $(".l3").css({"animation-delay" : "0.8s"});
      $(".l4").css({"animation-delay" : "1s"});
      $(".l5").css({"animation-delay" : "1.2s"});
      $(".l6").css({"animation-delay" : "1.4s"});
      $(".l7").css({"animation-delay" : "1.6s"});
      $(".l8").css({"animation-delay" : "1.8s"});
      $(".l9").css({"animation-delay" : "2s"});
      $(".l10").css({"animation-delay" : "2.2s"});
      $(".l11").css({"animation-delay" : "2.4s"});
      $(".l12").css({"animation-delay" : "2.6s"});
      $(".l13").css({"animation-delay" : "2.8s"});
      $(".l14").css({"animation-delay" : "3.0s"});
      $(".l15").css({"animation-delay" : "3.2s"});
  }
  


  if ($(window).scrollTop() > $("#aboutFrame").offset().top - 400 ) {
      $(".a").css({"animation" : "dash 6s linear forwards","-webkit-animation" : "dash 6s linear forwards" });
      
      $(".aFill").css({"animation" : "filling 2s linear forwards","-webkit-animation" : "filling 2s linear forwards" });

      $(".a2").css({"animation-delay" : "0.2s"});
      $(".a3").css({"animation-delay" : "0.4s"});
      $(".a4").css({"animation-delay" : "0.6s"});
      $(".a5").css({"animation-delay" : "0.8s"});


      $(".f1").css({"animation-delay" : "0.4s"});
      $(".f2").css({"animation-delay" : "0.6s"});
      $(".f3").css({"animation-delay" : "0.8s"});
      $(".f4").css({"animation-delay" : "1s"});
      $(".f5").css({"animation-delay" : "1.2s"});

  }


    if ($(window).scrollTop() > $("#resumeFrame").offset().top - 400) {
      $(".r").css({"animation" : "dash 6s linear forwards","-webkit-animation" : "dash 6s linear forwards" });
      
      $(".rFill").css({"animation" : "filling 2s linear forwards","-webkit-animation" : "filling 2s linear forwards" });

      $(".r2").css({"animation-delay" : "0.2s"});
      $(".r3").css({"animation-delay" : "0.4s"});
      $(".r4").css({"animation-delay" : "0.6s"});
      $(".r5").css({"animation-delay" : "0.8s"});
      $(".r6").css({"animation-delay" : "1.0s"});


      $(".rf1").css({"animation-delay" : "0.4s"});
      $(".rf2").css({"animation-delay" : "0.6s"});
      $(".rf3").css({"animation-delay" : "0.8s"});
      $(".rf4").css({"animation-delay" : "1s"});
      $(".rf5").css({"animation-delay" : "1.2s"});
      $(".rf6").css({"animation-delay" : "1.4s"});

  }

  if ($(window).scrollTop() > $("#resumeFrame").offset().top + 40 ) {
     $("#showDiv").css({"display" : "block"}); 
  }


  });




});