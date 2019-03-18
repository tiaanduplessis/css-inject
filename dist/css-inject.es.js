var e=document.head,t=e.querySelector('[rel="stylesheet"]')||e.querySelector("link");export default function(r){void 0===r&&(r="");var n=document.createElement("style");return n.type="text/css",n.appendChild(document.createTextNode(r)),t?e.insertBefore(n,t):e.appendChild(n),function(){return e.removeChild(n)}}
//# sourceMappingURL=css-inject.es.js.map
