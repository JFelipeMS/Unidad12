//creacion de la clase singleton   //conexion a BD
class Singleton {
    #port
    constructor(port){
        //logica para crear la instamcia del Singleton
        if (!Singleton.instance){ //no existe una instancia
            this.#port = port
            Singleton.instance = this
        }
        return Singleton.instance
    }
    metodo1(){
        console.log("Conectado a la BD... metodo del Singleton")
    }
    get port() {
        return this.#port + " atributo del Singleton"
    }
}

//Uso del Singleton
const conexion01 = new Singleton(8082)
const conexion02 = new Singleton(1024)

console.log(conexion01 === conexion02)
conexion01.metodo1()
console.log(conexion01.port)
console.log(conexion02.port)