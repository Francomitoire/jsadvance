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

/**
 * Representa el stock de entradas disponibles. Incluye métodos para obtener y disminuir el stock.
 * @namespace Stock
 */

const Stock = {
    /**
     * Número actual de entradas disponibles.
     * @type {number}
     */
    disponibles: 10,
    /**
     * Obtiene el número de entradas disponibles.
     * @returns {number} El número de entradas disponibles.
     */
    get() {
        return this.disponibles;
    },
    /**
     * Disminuye el número de entradas disponibles.
     * @param {number} cantidad - La cantidad de entradas a disminuir.
     */
    disminuir(cantidad) {
        if (!Number.isInteger(cantidad) || cantidad <= 0) throw new Error("Cantidad inválida");
        if (cantidad > this.disponibles) throw new Error("Stock insuficiente");
        if (cantidad > 6) throw new Error("No se pueden comprar más de 6 entradas a la vez");
        this.disponibles -= cantidad;
    }
};

/**
 * Cola de compra para gestionar las peticiones de entradas.
 * @type {Array}
 */

const colaDeCompra = [];
let processing = false; 


function validarUsuario(usuario) {
    if (!usuario || typeof usuario !== "object") throw new Error("Usuario inválido");
    if (typeof usuario.nombre !== "string" || usuario.nombre.trim() === "") throw new Error("Nombre inválido");
    if (!Number.isInteger(usuario.entradas) || usuario.entradas <= 0) throw new Error("Entradas inválidas");
    return true;
}

async function procesarCola() {
    if (processing || colaDeCompra.length === 0) return;
    processing = true;

    try {
        while (colaDeCompra.length) {
            const uProcesar = colaDeCompra.shift();
            try {
                Stock.disminuir(uProcesar.entradas);
                console.log(`✅ ${uProcesar.nombre} compró ${uProcesar.entradas}. Restan: ${Stock.get()}`);
            } catch (error) {
                console.log(`❌ ${uProcesar.nombre} no pudo comprar: ${error.message}. Restan: ${Stock.get()}`);
            }
            //cuando se crea-resuelve una nueva promesa le das espacio a actualizar al event loop, lo que permite tener un flujo continuo de datos, y no por paquetes.
            await Promise.resolve();
        }
    } catch (error) {
        console.error("Error procesando la cola:", error);
        return;
    } finally {
        processing = false;
    }
}

function comprarEntradas(usuario) {
    try {
        validarUsuario(usuario);
    } catch (error) {
        console.log("❌ Compra rechazada", "Error:", error.message);
        return;
    }
    colaDeCompra.push({ nombre: usuario.nombre, entradas: usuario.entradas });
    setTimeout(procesarCola, Math.random() * 2000);
}

const delay = ms => new Promise(r => setTimeout(r, ms));

function simularLlegadas(usuarios) {
// lanza todos los timers en paralelo; cada uno llega tras su delay aleatorio
    return Promise.all(
        usuarios.map(async u => {
            await delay(700 + Math.random() * 2000);
            comprarEntradas(u);
        })
    );
}

async function startSimulator() {
    const usuarios = [
        { nombre: "Ana", entradas: 2 },
        { nombre: "Luis", entradas: 1 },
        { nombre: "Pedro", entradas: 3 },
        { nombre: "María", entradas: 4 },
        { nombre: "Juan", entradas: 2 },
        { nombre: "Lucía", entradas: 5 },
        { nombre: "Carlos", entradas: 1 },
        { nombre: "Marta", entradas: 2 },
        { nombre: "Jorge", entradas: 6 },
        { nombre: "Sofía", entradas: 3 },
        { nombre: "InvalidUser1", entradas: -1 }, // inválido
        { nombre: "", entradas: 2 },               // inválido
        { nombre: "InvalidUser2", entradas: 0 },   // inválido
        { nombre: "InvalidUser3", entradas: 10 },  // inválido (más de 6)
        { nombre: "InvalidUser4", entradas: "two" } // inválido
    ];

    await simularLlegadas(usuarios);
}

startSimulator();


// IVAN WORK

// n entradas
// peticiones de entradas
// precesar/disminuir, validar
//una fila de peticiones

const comprador = { nombre: "Roberto", entradas: 8 };

let queue = [];
let entradasDisponibles = 10;

function validarUsuario(usuarioAValidar) {
  if (typeof usuarioAValidar === "string") {
    console.log("Usuario válido");
    return true;
  } else {
    console.log("Usuario inválido");
    return false;
  }
}

function validarEntradas(entradaAValidar) {
  if (typeof entradaAValidar === "number" && entradaAValidar >= 0) {
    console.log("Número válido");
    return true;
  } else {
    console.log("Número inválido");
    return false;
  }
}

function queueRequest() {
  if (
    !validarEntradas(comprador.entradas) ||
    !validarUsuario(comprador.nombre)
  ) {
    return false;
  }

  queue.push(comprador);
  return true;
}

function comprarEntrada() {
  if (!queueRequest()) return;

  if (comprador.entradas <= entradasDisponibles) {
    console.log("Gracias por la compra");
    entradasDisponibles -= comprador.entradas;
  } else {
    console.log("Stock no disponible");
  }
}

console.log("Cola inicial:", queue);
comprarEntrada();
console.log("Cola final:", queue);
console.log("Entradas restantes:", entradasDisponibles);

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
