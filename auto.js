import {Vehicle } from "./vehicle.js";

function Auto(marca, modelo, velocidadMaxima, puertasEstanAbiertas) {
    Vehicle.call(this, marca, modelo, velocidadMaxima)
    this.marca = marca
    this.modelo = modelo
    this.velocidadMaxima = velocidadMaxima
    this.velocidad = 0
    this.puertasEstanAbiertas = puertasEstanAbiertas
}
Auto.prototype = Object.create(Vehicle.prototype)

Auto.prototype.abrirPuertas = function (){
    if(this.puertasEstanAbiertas){
        console.log("Has cerrado las puertas")
    }else{
        console.log("Has abierto las puertas")
    }
}

const toyota = new Auto("Toyota", "1234", 120, true)
toyota.abrirPuertas()

const autoToyota = new Auto("Toyota", "1234", 120, true)
const autoBMW = new Auto("BMW", "345", 180, false)

autoBMW.compararVelocidad(autoToyota)

autoToyota.abrirPuertas()
autoBMW.abrirPuertas()