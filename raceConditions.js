// MATI WORK
// DAVID WORK
// IVAN WORK
// ALEX WORK
// DIEGO WORK

let tickets = 10; //tickets disponibles
let requests = 0; //tickets solicitados
let ticketsSold = 0; //tickets vendidos

//funcion para vender tickets
function sellTicket(requests) {
  if (requests <= tickets) {
    ticketsSold += requests;
    tickets -= requests;
  } else {
    console.log("No hay mas tickets disponibles");
  }
}

// tiempo de espera random
function randomTime() {
  return Math.floor(Math.random() * 5000);
}
