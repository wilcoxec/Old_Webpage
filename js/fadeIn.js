$(document).ready(function() {

  $(window).scroll(function() {
    //calculate how far down the page the user is 
    var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);

  if ($(window).scrollTop() > $("#fadeInE").offset().top - 400 ) {
      $("#fadeInE").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#fadeInE1").offset().top - 400 ) {
      $("#fadeInE1").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#fadeInE2").offset().top - 400 ) {
      $("#fadeInE2").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#fadeInE3").offset().top - 400 ) {
      $("#fadeInE3").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#fadeInEdu").offset().top - 400 ) {
      $("#fadeInEdu").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#fadeInEdu1").offset().top - 400 ) {
      $("#fadeInEdu1").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#fadeInEdu2").offset().top - 400 ) {
      $("#fadeInEdu2").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#backgroundQuote").offset().top - 100) {
      $("#backgroundQuote").animate({"opacity" : "1"}, 1200);
       
  }

  if ($(window).scrollTop() > $("#fadeInContact").offset().top - 400) {
      $("#fadeInContact").animate({"opacity" : "1"}, 1000);
       
  }

  if ($(window).scrollTop() > $("#fadeInAbout").offset().top - 400) {
      $("#fadeInAbout").animate({"opacity" : "1"}, 1000);
       
  }


  });




});