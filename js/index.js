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

function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter   = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}

//Gets the year and inserts it into any element with the class year
var insert_current_year = function(){
  var year = (new Date()).getFullYear();
  document.getElementById("year").innerHTML = year;
}

var aboutAnimated = false;
var updatesAnimated = false;

var check_animations = function(){
  //console.log("top: " + $(document).scrollTop());
  //console.log("udpate block: " + $('.updates').offset().top);
  if(isVisible('.about',600) && aboutAnimated == false){
    aboutAnimated = true;
    $('.about-inner').addClass("bounceInRight animated");
    console.log("asdf");
  }
  if(isVisible('.updates') && updatesAnimated == false){
    updatesAnimated = true;
    $('.update-block').addClass("fadeInTop animated");
    console.log("awe");
  }
}

var isVisible = function(elem, threshold){
  if($(document).scrollTop() > $(elem).offset().top - threshold){
    return true;
  }else{
    return false;
  }
}

//execute functions
insert_current_year();
add_os_class_to_body();

//Check for scrolling and animate if needed
check_animations();
$(document).on('scroll',function(){
  check_animations();
})

});
