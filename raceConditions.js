// MATI WORK
function runSimulation(){
    const usuarios = []
    const entradas = []
    const tickets = []
    for(let i = 1; i <= 15; i++){
        usuarios.push(`ususario${i}`)
        if(i<=10){
            entradas.push(`entrada${i}`)
        }
    }
    
    const sacarEntradas = async ()=>{
        const promesasEntradas = usuarios.map((usuario)=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if(entradas.length !== 0){
                        const cantidadEntradas = Math.floor(Math.random() * entradas.length) + 1
                        const ticket = {
                            nombre: usuario,
                            entradasUsuario : []
                        }
                        for(let i = 0; i < cantidadEntradas; i++){
                            ticket.entradasUsuario.push(entradas.shift())
                        }

                        resolve(ticket)
                    }else{
                        reject(`Lo siento ${usuario}, se han acabado las entradas`)
                    }
                }, Math.random() * 5000)
            })
        })
        promesasEntradas.forEach((promesa)=>{
            promesa
            .then((ticket)=>{
                tickets.push(ticket)
                console.log(ticket)
            })
            .catch((errorMsg)=>{
                console.log(errorMsg)
            })
        })
    }
    sacarEntradas()
}
runSimulation()
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
