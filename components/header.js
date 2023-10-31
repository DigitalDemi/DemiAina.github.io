import createElement from './utils/create_elements.js'

export class Header extends  HTMLElement {
    constructor(){
        super();
        this.root = this.attachShadow({ mode : 'open'})
    }
    connectedCallback(){
        const header = createElement("header", "");
        const logo = createElement("p", "D");
        header.appendChild(logo);
        this.root.appendChild(header);
    }

    disconnectedCallback(){
    }
}

if('customElements' in window){
    customElements.define('my-header' , Header)
}
export default Header;
