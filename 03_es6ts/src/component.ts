export const component = <K extends keyof HTMLElementTagNameMap>(
  type: K,
  text: string
) => {
  var element = document.createElement(type);
  element.innerHTML = text;

  return element;
};
