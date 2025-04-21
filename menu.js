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
		
		
		
		
		
		
		
		
        this.innerHTML = `<div class="logo-name"><img src="img/PLANETA.JPG"></div><div class="cabecera"><!-- start nav -->

<nav id="menu">

<!-- start menu -->
<ul>
 <li><a href="https://teohervelxmen.webcindario.com">HOME</a></li>
 <li><a>NOTICIAS</a>
                                                                      <ul>
			   <li><a href="https://teohervelxmen.webcindario.com/noticias.html">Seccion de noticias.</a></li>
			   <li><a href="https://teohervelxmen.webcindario.com/ola de calor.html">Ola de calor 2023.</a></li>													  
              <li><a href="https://teohervelxmen.webcindario.com/hundimiento.html">Se hunde el centro de la localidad.</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/sector salud.html">Aumento de diabtes.</a></li>
			  
              </ul></li>

 
 
 <li><a>POLITICA</a>
                        <ul>
						<li><a href="https://teohervelxmen.webcindario.com/amlovers.html">Inflacion 2023.</a></li>
              <li><a href="https://teohervelxmen.webcindario.com/fatal accidente en elecciones.html">Fatal accidente en elecciones.</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/obras.html">Obras municipales.</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/presidentes municipales.html">Presidentes municipales.</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/entrega de fertilizante.html">El gobierno federal entrega fertilizantes.</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/campaña medica por chiapas unido.html">Campaña medica por Chiapas Unidos.</a></li>
              </ul></li>
 
 <li><a>EDUCACION</a>
                  <ul>
				  <li><a href="https://teohervelxmen.webcindario.com/telesecundaria.html">Inicios de la telesecundaria 764</a></li>
				  <li><a href="https://teohervelxmen.webcindario.com/primavera 2023.html">Reyna de la primavera 2023-COBACH 305</a></li>
              <li><a href="https://teohervelxmen.webcindario.com/cobach.html">Fin de cursos 2023-COBACH 305</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/estudiantes geniales.html">Un alumno de 10</a></li>
			  </ul></li>
 <li><a>FOTOGRAFIAS</a>
              <!-- start menu desplegable -->
              <ul>
              <li><a href="https://teohervelxmen.webcindario.com/edgar.html">Fotografia Edgar Gael</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/galeria de imagenes alfredo perez.html">Galeria Alfredo Perez</a></li>
              <li><a href="https://teohervelxmen.webcindario.com/galeria.html">Fotografias de la localidad</a></li>
              
              </ul>
              <!-- end menu desplegable -->
              </li>
 
 <li><a>SOCIALES</a>
 <!-- start menu desplegable -->
               <ul>
                <li><a href="https://teohervelxmen.webcindario.com/iglesia catolica.html">Iglesia catolica</a></li>				              <li><a href="https://teohervelxmen.webcindario.com/feria.html">Feria San Isidro las Banderas</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/tradiciones.html">Tradicion Zoque</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/fieles difuntos.html">Tradicion fieles difuntos.</a></li>			                
                </ul>         
              
<!-- end menu desplegable -->
</li>
<li><a>ARQUITECTURA</a>
                <ul>								<li><a href="https://teohervelxmen.webcindario.com/El espacio para la arquitectura.html">Plano para hospitales</a></li>
				<li><a href="https://teohervelxmen.webcindario.com/cotizacion inicio.html">Contruyamos juntos</a></li>
              <li><a href="https://teohervelxmen.webcindario.com/cotizacion contacto.html">Cotizamos tu proyecto</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/cotizacion galeria.html">galeria de imagenes</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/cotizacion mis trabajos.html">Mis trabajos</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/cotizamos tu proyecto.html">Nuestros servicio</a></li>
			  <li><a href="https://teohervelxmen.webcindario.com/Diseña como un profesional.html">Diseña tu vivienda</a></li>
			  </ul></li>
<li><a>BLOGG</a><!-- start menu desplegable --> <ul> <li><a href="https://teohervelxmen.webcindario.com/la panela.html">Fabricacion de panelas</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/misterios.html">Desaparicion de personas</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/soldados se aprovechan de las localidades.html">Nos dejaron sin elotes y pollos</a></li> <li><a href="https://teohervelxmen.webcindario.com/venta de ritmos.html">Adquiere tus rimtos aqui</a></li> <li><a href="https://teohervelxmen.webcindario.com/ritmos.html">Ritmos para yamaha y casio</a></li> <li><a href="https://teohervelxmen.webcindario.com/turismo local.html">Aventuras y paseos</a></li>  <li><a href="https://teohervelxmen.webcindario.com/arboles%20y%20plantas%20venenosas.html">Una naturaleza venenosa</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/catalogo de venta.html">Plantas de jardin</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/cultivo de cafe.html">El cultivo de cafe</a></li>              <li><a href="https://teohervelxmen.webcindario.com/el mocoso.html">El arbol del mocoso</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/entrega de fertilizante.html">El gobierno federal entrega fertilizantes</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/huertos.html">Una huerta familiar</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/la importancia de plantar arboles.html">Planta arboles</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/rosas.html">Cultivo de rosas</a></li>			  <li><a href="https://teohervelxmen.webcindario.com/el cacate y su precio.html">Precio acttual del cacate.</a></li> </ul><!-- end menu desplegable --> </li>
<li><a href="https://teohervelxmen.webcindario.com/contactame.html">EL AUTOR</a></li>
 
</ul>
<!-- end menu -->
</nav>
<!-- end nav -->


  


</div><hr color="navy">`;









        this.style.color = "blue";
        this.style.fontFamily = "sans-serif";
    }
}

window.customElements.define("hola-pop", holaMundo);







