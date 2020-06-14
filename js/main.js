let partida = {
    
    //propiedade
    
    equipo1: [],
    equipo2: [],
    equipo1Gana: 0,
    equipo2Gana: 0,
    cont: 0,
    cont_fight: 0,
    arg1: "",
    arg2: "",
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
        }
        
        if(this.equipo1.length == 3){
          let titulo = document.getElementById('tituloEleccion');
          titulo.textContent = "ELIGE ENTRE ESTOS PERSONAJES.. EQUIPO 2"
        }
        
        if(this.equipo2.length == 3){

          resolveIn(2000).then(delay => {
            this.init3();
          });
        }
        //LLamamos a la funcion para deshabilitar los personajes
        deshabilitar(idLuchador); 

  },
  init1(){
    location.reload(true);
  },

  init2(){
  
   this.organizador(2);
    
  },
  init3(){

    this.organizador(3);

    let seccionCompleta = document.getElementById('fase3');
    seccionCompleta.innerHTML = `<div class="container-pelea">
    <div class="pelea">
        <div class="emparejamiento1"><img src="img/${this.equipo1[0].nombre}S.jpg" alt=""></div>
        <p class="vs">vs</p>
        <div class="emparejamiento2"><img src="img/${this.equipo2[0].nombre}S.jpg" alt=""></div>
    </div>
    <div class="pelea">
        <div class="emparejamiento1"><img src="img/${this.equipo1[1].nombre}S.jpg" alt="" ></div>
        <p class="vs">vs</p>
        <div class="emparejamiento2"><img src="img/${this.equipo2[1].nombre}S.jpg" alt="" ></div>
    </div>
    <div class="pelea">
        <div class="emparejamiento1"><img src="img/${this.equipo1[2].nombre}S.jpg" alt="" ></div>
        <p class="vs">vs</p>
        <div class="emparejamiento2"><img src="img/${this.equipo2[2].nombre}S.jpg" alt="" ></div>
    </div>
    
  </div>`;
  

    resolveIn(2550).then(delay => {
      this.init4();
    });

  },

  init4() {

    this.organizador(4);

    if (this.cont_fight < 3) {
            
      //luchadores actuales.
      arg1 = this.equipo1[this.cont_fight];
      arg2 = this.equipo2[this.cont_fight];

      let seccionLucha = document.getElementById("fase4");
      seccionLucha.innerHTML = `<div class="cabecera">
          <div class="cab1"></div>
          <div class="cab2">FIGHT ${this.cont_fight + 1}</div>
          <div class="cab3"></div>
        </div>
        <div class="cuadroLucha">
          <div class="bloque1">
              <div id="contenedorBarras1"><div id="barraVida1"></div></div>
              <div id="dieta1"><img id="paguita1" src="./img/paguita.png" draggable="true"></div>
              <div class="nombreLuchador1">${this.equipo1[this.cont_fight].nombre}</div>
              <div class="imgLuchador1"><img src="./img/${this.equipo1[this.cont_fight].nombre}p1.png"></div>
              <div id="vidaLuchador1" class="luch1life">VIDA JUGADOR 1 : ${this.equipo1[this.cont_fight].vida}</div>
          </div>
          <div class="bloque2">
              <div id="contenedorBarras2"><div id="barraVida2"></div></div>
              <div id="dieta2"><img id="paguita2" src="./img/paguita.png"></div>
              <div class="nombreLuchador2">${this.equipo2[this.cont_fight].nombre}</div>
              <div class="imgLuchador2"><img src="./img/${this.equipo2[this.cont_fight].nombre}p2.png"></div>
              <div id="vidaLuchador2" class="luch2life">VIDA JUGADOR 2 : ${this.equipo2[this.cont_fight].vida}</div>
              
          </div>
        </div>
        <div class="announcement">
          <div class="ann1"></div>
          <div id ="anuncioko" class="ann2"></div>
          <div class="ann3"></div>
        </div>
        <div class="punch">
          <div class="pun1"></div>
          <div class="pun2"><img id="fist" class ="hitter" src="./img/microfono.jpg" onclick="juego.turnoLucha(arg1,arg2)"></div>
          <div class="pun3"></div>
        </div>`;
    }else {
  

  
      resolveIn(2000).then(delay => {
        
        this.init5();
      });
    }

  },
  init5() {
    this.organizador(5);
    
    let eg = "";

    //comprobando equipo ganador
    if (this.equipo1Gana > this.equipo2Gana) {
        numero = 1;
        eg = this.equipo1;
    } else {
        numero = 2;
        eg = this.equipo2;
    };    console.log('estoy aqui')

      let seccionGanador = document.getElementById('fase5');

      seccionGanador.innerHTML = `
      <div class="tituloGanador">
        <h1>EL EQUIPO GANADOR ES.. EQUIPO ${numero}</h1>
      </div>
      <div class="equipoGanador">
        <img src="img/${eg[0].nombre}.jpg"  alt="">
        <img src="img/${eg[1].nombre}.jpg"  alt="">
        <img src="img/${eg[2].nombre}.jpg"  alt="">
      </div>
      <div>
          <p class="reiniciarJuego" onclick="partida.init1()">REINICIAR JUEGO</p>
      </div>`

  },

 organizador(arg_0) {

    let fasewant = "fase" + arg_0;
    let ArrayFases = ["fase1", "fase2","fase3","fase4","fase5"];

    ArrayFases = ArrayFases.filter(val => !fasewant.includes(val)); //esta funcion es la que te saca la fase que quieres
    
    document.getElementById(fasewant).style.display = "block";

    for(let _f of ArrayFases){
        document.getElementById(_f).style.display = "none";
      }
  } 
}  
  const deshabilitar = (idLuchador) => {
       
    //Ocultamos los personajes que vayamos eligiendo
        let personaje = document.getElementById('div' + idLuchador);
    
        personaje.hidden = true;
    
  }
  
  