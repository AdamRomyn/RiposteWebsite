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

//execute functions
insert_current_year();
add_os_class_to_body();

});
