(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.cssInject = factory());
}(this, (function () { 'use strict';

var head = document.head;
var link = head.querySelector('[rel="stylesheet"]');

function cssInject (rules) {
  if ( rules === void 0 ) rules = '';

  var css = document.createElement('style');
  css.type = 'text/css';
  css.appendChild(document.createTextNode(rules));
  head.insertBefore(css, link);
  return function () { return head.removeChild(css); }
}

return cssInject;

})));
