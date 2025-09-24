function Vehicle(marca, modelo, velocidadMaxima) {

    const vehicle = Object.create(Vehicle.prototype)
    
    vehicle.marca = marca
    vehicle.modelo = modelo
    vehicle.velocidadMaxima = velocidadMaxima
    
    return vehicle
}
//Acelera 10km/h
Vehicle.prototype.acelerar = function (velocidad){
    if(velocidad === Number(velocidad)){
        if(this.velocidadMaxima > (velocidad + 10)){
            console.log("Has llegado a la velocidad maxima.\nVelocidad: 120km/h")
        }else{
            velocidad += 10
            console.log(`Estas yendo a ${velocidad}km/h`)
        }
    }else{
        console.log(`Se ha recibido un parametro incorrecto\nParametro recibiDo: ${typeof velocidad}`)
    }
}
Vehicle.prototype.detener = function(){
    console.log("El vehiculo se ha detenido")
}

Vehicle.prototype.mostrarInfo = function(){
    Object.entries(this).forEach(([key, value]) => {
        console.log(`${key.charAt(0).toLocaleUpperCase() + key.slice(1)}: ${value}`);
    });
}

const autoToyota = new Vehicle("Toyota", "1234" , 120)
autoToyota.acelerar(60)
autoToyota.detener()
autoToyota.mostrarInfo()

const motoBMW = new Vehicle("BMW", "GM2DEV" , 160)
motoBMW.acelerar(60)
motoBMW.detener()
motoBMW.mostrarInfo()