//creamos la estructura básica de personajes y juego.

//clase luchador, con sus propiedades y métodos.

class Fighter {
    constructor(nombre, defensa, ataque, agilidad, suerte){

        this.nombre = nombre;
        this.defensa = defensa;
        this.ataque = ataque;
        this.agilidad = agilidad;
        this.suerte = suerte;
        this.vida = 100;
        /*this.setImage = function(idImage,src){
            document.getElementById(idImage).src = src;
        }*/
    }
    atacar(enemigo){

        /*En este caso tenemos la referencia de una lógica muy básica para programar el ataque.
        Declaramos una variable luck que será igual al resultado que nos devuelve una función random 
        que tenemos en el archivo utiles.js, los parámetros que devuelve esta función tienen un mínimo de 1
        y un máximo de la suerte del enmigo
        */

        let luck = funciones.random(1, enemigo.suerte);

        /*A continuación, depositamos en la variable hit, el resultado de primero restarle la defensa 
        del enemigo al luchador que emite el golpe, y posteriormente multiplicarlo por la variable luck
        obtenida antes.*/

        let hit = (this.ataque - enemigo.defensa) * luck;


        /*finalmente , restamos a la vida del enemigo el valor establecido en el golpe (hit)*/
        enemigo.vida -= hit;
    }
    defenderse(){
        /*........*/ 
    }
    esquivar(){
        /*........*/ 
    }
    especial(){
        let hit = (this.ataque + 2 );

        enemigo.vida -= hit;
    }
}
//instanciamos a los luchadores 
let f1 = new Fighter('abascal', 15, 30, 25, 40);
//f1.setImage("img1",'./img/abascal.jpg');

let f2 = new Fighter('Rivera', 15, 20, 50, 20);
//f2.setImage("img1", './img/Rivera.jpg');

let f3 = new Fighter('esperanza', 30, 30, 60, 20);
//f3.setImage("img2", './img/esperanza.jpg');

let f4 = new Fighter('rajoy', 35, 30, 15, 50);
//f4.setImage("img2", './img/rajoy.jpg');

let f5 = new Fighter('echenique', 15, 35, 5, 35);
//f5.setImage("img2", './img/echenique.jpg');

let f6 = new Fighter('Zapatero', 20, 20, 15, 25);
//f6.setImage("img2", './img/Zapatero.jpg');

let f7 = new Fighter('Iglesias', 20, 20, 30, 35);
//f7.setImage("img2", './img/Iglesias.jpg');

let f8 = new Fighter('PedroSchz', 40, 10, 15, 30);
//f8.setImage("img2", './img/PedroSchz.jpg');


//traductor
let allplayers = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6,
    "7": f7,
    "8": f8,
}

//juego

let juego = {

    turno: 0,
    player1: "",
    player2: "",
    ganador: "",

    resetearLucha(){

    },

    turnoLucha(){

    },
}