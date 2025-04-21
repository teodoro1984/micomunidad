class holaMund extends HTMLElement{
    constructor(){
        super();
        this.name;
        this.surname;
    }

    static get observedAttributes(){
        return ['name', "surname"];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        switch(nameAttr){
            case "name":
                this.name = newValue;
            break;
            case "surname":
                this.surname = newValue;
            break;
        }
    }

    connectedCallback(){
        this.innerHTML = `
<div class="block"><a href="https://teohervelxmen.webcindario.com/mundo de lectura web/Escases alimentaria..html">ECONOMIA.</a></div><div class="block"><a href="https://teohervelxmen.webcindario.com/mundo de lectura web/Noticia 6 de diciembre del 1998.html">NOTICIAS.</a></div>`;
        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("enlazar-web", holaMund);