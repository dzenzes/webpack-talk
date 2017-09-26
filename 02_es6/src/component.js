export const component = (type, text) => {
  var element = document.createElement(type);
  element.innerHTML = text;

  return element;
};
