// MATI WORK
// DAVID WORK
// IVAN WORK
// ALEX WORK
// DIEGO WORK

let basededatos = []; //base de datos simulada
let tickets = 10; //tickets disponibles
let requests = 0; //tickets solicitados
let ticketsSold = 0; //tickets vendidos
let fila = Promise.resolve(); //fila de promesas

//funcion para vender tickets
function sellTicket(name, requests) {
  return new Promise((resolve) => {
    if (requests <= tickets) {
      ticketsSold += requests;
      tickets -= requests;
      basededatos.push({ name, requests });
      console.log(`${name} compró ${requests} ticket(s).`);
    } else {
      console.log(
        `${name} quiso comprar ${requests}, pero no hay suficientes tickets.`
      );
    }
    resolve();
  });
}

// tiempo de espera random
function randomTime() {
  return Math.floor(Math.random() * 5000);
}

// simulacion de varios usuarios intentando comprar tickets al mismo tiempo
function transactionByUser(name, requests) {
  setTimeout(() => {
    fila = fila.then(() => sellTicket(name, requests));
  }, randomTime());
}

transactionByUser("Juan Frank", 3);
transactionByUser("Alex", 6);
transactionByUser("Korsu", 1);
transactionByUser("Franco", 3);
