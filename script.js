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
