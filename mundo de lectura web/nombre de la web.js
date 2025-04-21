class holaMundo extends HTMLElement{
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
		
		
		
		
		
		
		
		
        this.innerHTML = `<div class="logo-name"><div class="logo"><img src="img/logo.png"></div><div class="name"><h1>El mundo de la lectura<h1></div></div>`;









        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}     window.customElements.define("nombre-web", holaMundo);







