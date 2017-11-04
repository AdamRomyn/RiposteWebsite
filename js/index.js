$(document).ready(function(){

//Adds the correct class to the body tag based on the operating system
var add_os_class_to_body = function(){
  var OSName = "Unknown";
  if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="windows";
  if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="windows";
  if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="windows";
  if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="windows";
  if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="windows";
  if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="windows";
  if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="ios";
  if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="unix";
  if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="linux";

  $('body').addClass(OSName);
}


//Gets the year and inserts it into any element with the class year
var insert_current_year = function(){
  var year = (new Date()).getFullYear();
  document.getElementById("year").innerHTML = year;
}

//Checks if an element is currently visible to the user
var isVisible = function(elem, threshold){
  if($(document).scrollTop() > $(elem).offset().top - threshold){
    return true;
  }else{
    return false;
  }
}


//Animation
var aboutAnimated = false;
var updatesAnimated = false;

//Checks to see if any of the sections are visible and therefore causes and animation
var check_animations = function(){
  console.log("top: " + $(document).scrollTop());
  console.log("udpate block: " + $('.updates').offset().top);
  if(isVisible('.about',600) && aboutAnimated == false){
    aboutAnimated = true;
    $('.about-inner').addClass("bounceInRight animated");
    console.log("asdf");
  }
  if(isVisible('.updates',0) && updatesAnimated == false){
    updatesAnimated = true;
    $('.update-block').addClass("fadeInTop animated");
    console.log("awe");
  }
}

//Menu click toggle
$('.hamburger-icon').on('click',function(){
  $('.hamburger-icon').toggleClass('expanded');
  $('.menu-items').toggleClass('expanded');
  $('.header-main').toggleClass('expanded');
  //if($('.menu-items').hasClass('expanded')){

  //}
})

$('ul').find('a').click(function(){
    var href = $(this).attr('href');
    var anchor = $(href).offset();
    console.log(href + "     " + anchor);
    $("html, body").animate({
        scrollTop: $(anchor).offset().top
      },
      1000
    );
    return false;
});
//execute functions
insert_current_year();
add_os_class_to_body();

//Check for scrolling and animate if needed
check_animations();
$(document).on('scroll',function(){
  check_animations();
})



});
