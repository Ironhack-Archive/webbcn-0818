'use strict';

function main() {
  var nodes = document.querySelectorAll('section h3');
  
  for (var ix = 0; ix < nodes.length; ix++) {
    nodes[ix].addEventListener('click', function (event) {
      var h3 = event.currentTarget;
      var section = h3.parentNode;
      section.classList.toggle('expanded');
    });
  };
}
window.addEventListener('load', main);