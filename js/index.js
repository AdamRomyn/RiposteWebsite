$(document).ready(function(){


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
  console.log(OSName);
  $('body').addClass(OSName);
}


add_os_class_to_body();

});
