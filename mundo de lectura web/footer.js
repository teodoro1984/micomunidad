class holaMunde extends HTMLElement{
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
        this.innerHTML = `<hr>
<br>
<p>Esta web fue creado para la divulgacion de temas para lectura en general y es creado por Teodoro Hernandez @2024</p>
<br>`;
        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("code-foot", holaMunde);