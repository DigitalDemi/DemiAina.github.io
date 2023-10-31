import createElement from './components/utils/create_elements.js';
import Header from './components/header.js';

let hello_world = createElement("h1" , "Hello World");
let header = createElement("my-header" , "");

console.log(hello_world);
const main = document.querySelector("main");
main.appendChild(header);
