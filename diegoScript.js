class Vehicle {
  constructor(marca, modelo, velocidad, velocidadMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.velocidadMaxima = velocidadMaxima;
  }
}

Vehicle.prototype.acelerar = function (velocidad) {
  if (this.velocidad + velocidad <= this.velocidadMaxima) {
    this.velocidad += velocidad;
  } else {
    this.velocidad = this.velocidadMaxima;
  }
};

Vehicle.prototype.detener = function () {
  this.velocidad = 0;
};

Vehicle.prototype.informacion = function () {
  return `Marca: ${this.marca}\nModelo: ${this.modelo}\nVelocidad: ${this.velocidad} km/h\nVelocidad Maxima: ${this.velocidadMaxima} km/h`;
};

const miCoche = new Vehicle("Toyota", "Corolla", 0, 180);

miCoche.acelerar(150);
console.log(miCoche.informacion());
miCoche.detener();
console.log(miCoche.informacion());

class Car extends Vehicle {
  constructor(marca, modelo, velocidad, velocidadMaxima, openDoor) {
    this.openDoor = openDoor;
    super(marca, modelo, velocidad, velocidadMaxima);
  }
}

Car.prototype.openDoor = function () {
  if (this.openDoor) {
    console.log("La puerta del auto está abierta.");
  } else {
    console.log("La puerta del auto está cerrada.");
  }
};
