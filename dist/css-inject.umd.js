!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.cssInject=t()}(this,function(){var e=document.head,t=e.querySelector('[rel="stylesheet"]')||e.querySelector("link");return function(n){void 0===n&&(n="");var o=document.createElement("style");return o.type="text/css",o.appendChild(document.createTextNode(n)),t?e.insertBefore(o,t):e.appendChild(o),function(){return e.removeChild(o)}}});
//# sourceMappingURL=css-inject.umd.js.map
