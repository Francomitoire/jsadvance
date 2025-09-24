import {Vehicle } from "./vehicle.js";

function Auto(marca, modelo, velocidadMaxima, puertas) {
    Vehicle.call(this, marca, modelo, velocidadMaxima)
    this.marca = marca
    this.modelo = modelo
    this.velocidadMaxima = velocidadMaxima
    this.puertas = puertas
}
Auto.prototype = Object.create(Vehicle.prototype)

Auto.prototype.abrirPuertas = function (){
    if(this.puertas){
        console.log("Has cerrado las puertas")
    }else{
        console.log("Has abierto las puertas")
    }
}

const toyota = new Auto("Toyota", "1234", 120, true)
toyota.abrirPuertas()