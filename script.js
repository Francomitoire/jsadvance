let globalVar = "Esto es una variable global";

function myFunction() {
  let functionVar = "Dentro de la funcion";
  if (true) {
    let blockVar = "Dentro de un block";
    console.log(blockVar);
  }
  console.log(functionVar);
}
myFunction();

function vehiculo(marca, modelo, velocidadMaxima) {
  this.marca = marca;
  this.modelo = modelo;
  this.velocidadMaxima = velocidadMaxima;
  this.velocidadActual = 0;
}

vehiculo.prototype.acelerar = function (velocidad) {
  this.velocidadActual += velocidad;
};
