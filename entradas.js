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
<div class="publi-recent"><div class="iconos-sociales">
<p style="color:navy;font-size:18px;font-family:roboto;font-weight:bold;margin-bottom:20px;">Redes sociales</p>
<a href="https://es-es.facebook.com/teodoro.hernandezvelasco" target="_blank"><img alt="Sígueme en Facebook" height="54" width="54" src="https://2.bp.blogspot.com/-28mh2hZK3HE/XCrIxxSCW0I/AAAAAAAAH_M/XniFGT5c2lsaVNgf7UTbPufVmIkBPnWQQCLcBGAs/s1600/facebook.png" title="Sígueme en Facebook"></a>
<a href="https://www.youtube.com/channel/UCEsuzy7nBFD9Sa0aC9GwpCw?view_as=subscriber" target="_blank"><img alt="Sígueme en Facebook" height="54" width="54" src="https://1.bp.blogspot.com/-cAN1e-Ti9vM/XCrI4PCP8OI/AAAAAAAAIBE/AZmwfLUHlAsdyoQrMdCcOBV3hO2asAeyQCLcBGAs/s1600/youtube.png" title="Sígueme en Youtube"></a></div>

<h5>Contactanos al 919 100 54 35.</h5><img src="https://pilatelena.com/wp-content/uploads/publica-con-nosotros2-1536x406.jpg.webp"/><h5>El autor de la web.</h5><img src="img/teodoro hernandez velasco2.jpg"/><p>Nos gusta la programacion y creacion de paginas web y asi dar a conocer nuestras ideas a nuestros estimados lectores.<p>
</div><div class="recent">
<p style="color:navy;font-size:18px;font-family:roboto;font-weight:bold;">Te puede interesar</p><br><a href="https://teohervelxmen.webcindario.com/presidentes%20municipales.html"><img src="img/jesus hernandez presidente por pantepec.png"/></a><a href="https://teohervelxmen.webcindario.com/presidentes%20municipales.html"><p class="txt">BIOGRAFIA DE POLITICOS.</p></a><a href="https://teohervelxmen.webcindario.com/presidentes%20municipales.html"><p class="descripto">Conoce la vida de los politicos.</p></a><hr style="background:navy;width:100%;height:2px;margin-bottom:10px;margin-top:10px;">                                 
</div>
<style>.publi-recent{width:230px;              margin-top:40px;			  padding:20px;	          box-shadow:3px 3px 20px #7b3b3b;              border-radius:13px;			  }			  .recent{width:230px;              margin-top:40px;			  padding:20px;	          box-shadow:3px 3px 20px #7b3b3b;              border-radius:13px;}			  			  .recent img{width:100%;              height:auto;}			  			  			  .recent a{font-size:16px;font-weight:bold;color:#000057;text-decoration:none;}.recent a:hover{font-size:16px;font-weight:bold;color:#000057;text-decoration:underline;}			  			  			  .recent a .descripto{font-size:14px;color:#412973;font-weight:1;text-decoration:none;}			  			  
	
</style>`;
        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("hola-mundo", holaMund);