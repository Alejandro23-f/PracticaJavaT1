class Zombie {

    constructor(nombre, puntosDeVida, potencia){
        this.nombre = nombre;
        this.puntosDeVida = puntosDeVida;
        this.potencia = potencia;
    }

    atacar(objetivo){
        console.log("" + this.nombre + " ataca a " + objetivo + " y le causa " + this.potencia + " puntos de daño.");
    }

}

/* Ejercicio 1 */ 
class Jugador{
    constructor(nombre, ocupacion, puntosDeVida, faccion){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosDeVida = puntosDeVida;
        this.faccion = faccion;
    }

    toString(){
        console.log("Nombre:" + this.nombre + " Ocupacion: " +this.ocupacion+ " Puntos de vida: "+ this.puntosDeVida+ " Faccion: " + this.faccion);
    }
}

let jugador = new Jugador("Alejandro", "Ballestero", 100, "Berlin");
let jugador2 = new Jugador("Sergio", "Lancero", 100, "España");
let list = [jugador, jugador2];
list[0].toString();
list[1].toString();

/* Ejercicio 2*/
class Abominacion extends Zombie{

    constructor(nombre, puntosDeVida, potencia){
        super(nombre, puntosDeVida, potencia);
    }

    consecutiveAttack(objetivo){
        this.atacar(objetivo);
        this.atacar(objetivo);
        this.atacar(objetivo);
    }
}

let a = new Abominacion("Zombie Ab", 200, 10);
a.consecutiveAttack("Alejandro");

/* Ejercicio 3 */
class Consumible {
    constructor(nombre){
        this.nombre = nombre;
    }

    consumir(jugador){
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningun efecto");
    }
}

let manzana = new Consumible("Manzana");
let ricardo = {
    nombre : "Ricardo",
    potencia: 1,
    puntosDeVida: 8,
    maxPuntoDeVida: 10,
    consumir: function (consumible){
        consumible.consumir(this);
    }
}

ricardo.consumir(manzana);  


class PlantaCurativa extends Consumible {
    constructor(nombre, poder){
        super(nombre);
        this.poder = poder;
    }

    consumir(jugador){
        console.log(jugador.nombre + " consume " + this.nombre + " y provoca el efecto " + this.poder);
    }
}

let planta = new PlantaCurativa("planta" , "poder maximo");
let ricardo2 = {
    nombre : "Ricardo",
    potencia: 1,
    puntosDeVida: 8,
    maxPuntoDeVida: 10,
    consumir: function (consumible){
        consumible.consumir(this);
    }
}
ricardo2.consumir(planta);

/* Ejercicio 4 */

let puntuaciones = [
{ nombre: "Pablo", puntuacion: 180},
{ nombre: "Javier", puntuacion: 270},
{ nombre: "Raquel", puntuacion: 70},
{ nombre: "Mario", puntuacion: 310},
{ nombre: "Miriam", puntuacion: 90},
{ nombre: "Laura", puntuacion: 210}

];

function tablaPuntuaciones(array){
    let result = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].puntuacion > 100){
            result.push(array[i]);
        }
    }
    result.sort((a, b) => b.puntuacion - a.puntuacion);
    console.log(result);
}

tablaPuntuaciones(puntuaciones);