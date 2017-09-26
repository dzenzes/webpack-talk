var leftPad = require("left-pad");

function component() {
  var title = leftPad("Hello Webworker!", 20, "+");

  var element = document.createElement("h1");
  element.innerHTML = title;

  return element;
}

document.body.appendChild(component());
