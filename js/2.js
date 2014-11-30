if(!Array.prototype.filter)
{Array.prototype.filter=function(fun)
{"use strict";if(this==null)
throw new TypeError();var t=Object(this);var len=t.length>>>0;if(typeof fun!="function")
throw new TypeError();var res=[];var thisp=arguments[1];for(var i=0;i<len;i++)
{if(i in t)
{var val=t[i];if(fun.call(thisp,val,i,t))
res.push(val);}}
return res;};}
(function($){Drupal.behaviors.ais=function(){var width=[window.outerWidth,window.screen.availWidth,$(window).width()];var height=[window.outerHeight,window.screen.availHeight,$(window).height()];width=width.filter(Number);height=height.filter(Number);var width=Math.min.apply(Math,width);var height=Math.min.apply(Math,height);var size=width;if(Drupal.settings.ais_method=='both-max'){size=Math.max(width,height);}else if(Drupal.settings.ais_method=='both-min'){size=Math.min(width,height);}else if(Drupal.settings.ais_method=='width'){size=width;}else if(Drupal.settings.ais_method=='height'){size=height;}
var style=Drupal.settings.ais[0];for(i in Drupal.settings.ais){if(Number(Drupal.settings.ais[i].size)<size&&Number(Drupal.settings.ais[i].size)>Number(style.size)){style=Drupal.settings.ais[i];}}
if(style){document.cookie='ais='+style.name+'; path=/';}else{document.cookie='ais=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT';}}
$(window).resize(Drupal.behaviors.ais);}(jQuery));Drupal.behaviors.ais();;