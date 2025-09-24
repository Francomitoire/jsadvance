import { Vehicle } from "./vehicle.js";

function Moto(marca, modelo, velocidadMaxima, tieneSidecar){
    Vehicle.call(marca, modelo, velocidadMaxima)
    this.marca = marca
    this.modelo = modelo
    this.velocidadMaxima = velocidadMaxima
    this.velocidad = 0
    this.tieneSidecar = tieneSidecar
}

Moto.prototype = Object.create(Vehicle.prototype)

Moto.prototype.verificarSiTieneSidecar = function(){
    if(this.tieneSidecar){
        console.log("La moto tiene sidecar")
    }else{
        console.log("La moto no tiene sidecar")
    }
}

const motoToyota = new Moto("Toyota", "1234", 150, false)
const motoBMW = new Moto("BMW", "345", 200, true)

motoBMW.compararVelocidad(motoToyota)

motoBMW.verificarSiTieneSidecar()