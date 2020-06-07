let partida = {
    
    //propiedades
    equipo1: [],
    equipo2: [],
    //métodos

  escoge(idLuchador){
        //player 1 selección de personajes.
        
        /*introducimos los luchadores escogidos en su array correspondiente.
          usamos el diccionario-traductor allplayers con la idLuchador como referencia para 
          direccionar a la clase instanciada*/
        if(this.equipo1.length < 3){
          this.equipo1.push(allplayers[idLuchador]);
          console.log(this.equipo1);
        }else if(this.equipo2.length < 3){
          
          this.equipo2.push(allplayers[idLuchador]);
          
          console.log(this.equipo2);
        }else if(this.equipo2.length == 3){
          resolveIn(2000).then(delay => {
            this.init3();
          })
        }
        //LLamamos a la funcion para deshabilitar los personajes
        deshabilitar(idLuchador); 

  },

  init1() {
    location.reload(true)
  },

  init2(){
  
   organizador(2);
    
  },
  init3(){

    organizador(3);

    let seccionCompleta = document.getElementById('fase3');
    seccionCompleta.innerHTML = `<div class="container-pelea">
    <div class="pelea">
        <div class="emparejamiento1"><img src="img/${this.equipo1[0].nombre}S.jpg" alt=""></div>
        
        <div class="emparejamiento2"><img src="img/${this.equipo2[0].nombre}S.jpg" alt=""></div>
    </div>
    <div class="pelea">
        <div class="emparejamiento1"><img src="img/${this.equipo1[1].nombre}S.jpg" alt="" ></div>
        <p>vs</p>
        <div id="emparejamiento2"><img src="img/${this.equipo2[1].nombre}S.jpg" alt="" ></div>
    </div>
    <div class="pelea">
        <div class="emparejamiento1"><img src="img/${this.equipo1[2].nombre}S.jpg" alt="" ></div>
        <p>vs</p>
        <div class="emparejamiento2"><img src="img/${this.equipo2[2].nombre}S.jpg" alt="" ></div>
    </div>
    
</div>`;

  },





   
}

const deshabilitar = (idLuchador) => {
     
  //Ocultamos los personajes que vayamos eligiendo
      let personaje = document.getElementById('div' + idLuchador);
  
      personaje.hidden = true;
  
}
const organizador = (arg_0) => {
  let fasewant = "fase" + arg_0;
  let ArrayFases = ["fase1", "fase2","fase3", "fase4", "fase5", "fase6"];

  ArrayFases = ArrayFases.filter(val => !fasewant.includes(val)); //esta funcion es la que te saca la fase que quieres
  
  document.getElementById(fasewant).style.display = "block";

  for(let _f of ArrayFases){
      document.getElementById(_f).style.display = "none";
  }
} 