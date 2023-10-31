class Header extends  HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
    }

    disconnectedCallback(){
    }
}

if('customElements' in window){
    customElements.define('Header' , Header)
}
