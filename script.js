// let globalVar = "Esto es una variable global";

// function myFunction() {
//   let functionVar = "Dentro de la funcion";
//   if (true) {
//     let blockVar = "Dentro de un block";
//     console.log(blockVar);
//   }
//   console.log(functionVar);
// }
// myFunction();

function vehiculo(marca, modelo, velocidadMaxima) {
  this.marca = marca;
  this.modelo = modelo;
  this.velocidadMaxima = velocidadMaxima;
  this.velocidadActual = 0;
}

vehiculo.prototype.acelerar = function (velocidad) {
  this.velocidadActual += velocidad;
};

vehiculo.prototype.detener = function () {
  this.velocidadActual = 0;
};

const vehiculo1 = new vehiculo("toyota", "hilux", 170);
vehiculo1.acelerar(70);
console.log(vehiculo1.velocidadActual);
vehiculo1.detener();
console.log(vehiculo1.velocidadActual);

vehiculo.prototype.mostrarInfo = function () {
  console.log(
    `Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad maxima ${this.velocidadMaxima}`
  );
};

vehiculo1.mostrarInfo();
