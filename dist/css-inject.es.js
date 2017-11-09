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

export default cssInject;
