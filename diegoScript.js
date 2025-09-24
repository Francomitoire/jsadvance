class vehicle {
  constructor(marca, modelo, velocidad, velocidadMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.velocidadMaxima = velocidadMaxima;
  }
}

vehicle.prototype.acelerar = function (velocidad) {
  if (this.velocidad + velocidad <= this.velocidadMaxima) {
    this.velocidad += velocidad;
  } else {
    this.velocidad = this.velocidadMaxima;
  }
};

vehicle.prototype.detener = function () {
  this.velocidad = 0;
};

vehicle.prototype.informacion = function () {
  return `Marca: ${this.marca}\nModelo: ${this.modelo}\nVelocidad: ${this.velocidad} km/h\nVelocidad Maxima: ${this.velocidadMaxima} km/h`;
};

const miCoche = new vehicle("Toyota", "Corolla", 0, 180);
miCoche.acelerar(150);
console.log(miCoche.informacion());
miCoche.detener();
console.log(miCoche.informacion());
