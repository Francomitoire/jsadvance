export function Vehicle(marca, modelo, velocidadMaxima) {

    const vehicle = Object.create(Vehicle.prototype)
    
    vehicle.marca = marca
    vehicle.modelo = modelo
    vehicle.velocidadMaxima = velocidadMaxima
    vehicle.velocidad = 0

    return vehicle
}

Vehicle.prototype.acelerar = function (nuevaVelocidad){
    if(typeof nuevaVelocidad === "number"){
        if(nuevaVelocidad >= this.velocidadMaxima){
            this.velocidad = this.velocidadMaxima
            console.log(`Has llegado a la velocidad maxima.\nVelocidad: ${this.velocidad}km/h`)
        }else{
            this.velocidad = nuevaVelocidad
            console.log(`Estas yendo a ${nuevaVelocidad}km/h`)
        }
    }else{
        console.log(`Se ha recibido un parametro incorrecto\nParametro recibiDo: ${typeof nuevaVelocidad}`)
    }
}
Vehicle.prototype.detener = function(velocidad){
    this.velocidad = 0
    console.log("El vehiculo se ha detenido")
}

Vehicle.prototype.mostrarInfo = function(){
    Object.entries(this).forEach(([key, value]) => {
        console.log(`${key.charAt(0).toLocaleUpperCase() + key.slice(1)}: ${value}`);
    });
}

Vehicle.prototype.compararVelocidad = function(otroVehiculo){
    if(this.velocidad > otroVehiculo.velocidad){
        console.log(this.marca, this.modelo, "es mas rapido que", otroVehiculo.marca, otroVehiculo.modelo)
    }else if(this.velocidad === otroVehiculo.velocidad){
        console.log(this.marca, this.modelo, "y", otroVehiculo.marca, otroVehiculo.modelo, "van a la misma velocidad")
    }else{
        console.log(this.marca, this.modelo, "es mas lento que", otroVehiculo.marca, otroVehiculo.modelo)
    }
}