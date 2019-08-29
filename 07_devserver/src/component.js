import "./style.css";
import file from "./test.html";
console.log(file);

export const component = (type, text) => {
  var element = document.createElement(type);
  element.innerHTML = text;
  element.className = "hello";

  return element;
};
