const create_element =  (element, text) => {
    element = document.createElement(element);
    text = document.createTextNode(text);
    element.appendChild(text);
    return element;
};

export default create_element;
