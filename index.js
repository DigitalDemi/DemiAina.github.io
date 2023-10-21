// Hello world
const h1 = document.createElement("h1");
const text = document.createTextNode("Hello world");
h1.appendChild(text);
console.log(h1);
const main = document.querySelector("main");
main.appendChild(h1);
