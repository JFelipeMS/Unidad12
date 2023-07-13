// Objetivo
class Target {  //motor
    arrancar(){
        console.log("el Motor arranca")
    }
}
//Adaptado
class Adaptee {  //motor electrico
    conectar(){
        console.log("el motor se conecto")
    }
    iniciar(){
        console.log("el motor inicio")
    }
}

//Adaptador
class Adapter extends Target {
    constructor(adaptee){
        super()
        this.adaptee = adaptee
    }
    arrancar(){
        console.log("Adatador: adaptando solicitud")
        this.adaptee.conectar()
        this.adaptee.iniciar()
    }
}

//Usar el Adaptador
const adaptee = new Adaptee()
const adapter = new Adapter(adaptee)

adapter.arrancar()