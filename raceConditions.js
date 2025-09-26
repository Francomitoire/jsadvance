import promptSync from 'prompt-sync';
const prompt = promptSync();
/**
 * @return this function runs the simulation and returns the value 
 * 
 */

// MATI WORK
function runSimulation(){
    const usuarios = []
    const entradas = []
    const tickets = []
    let comprarEntradasRestantes;
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
                        let cantidadEntradas = Math.floor(Math.random() * 9) + 1
                        const ticket = {
                            nombre: usuario,
                            entradasUsuario : []
                        }
                        if(entradas.length!== 0){
                            if(cantidadEntradas <= entradas.length){ 
                                for(let i = 0; i < cantidadEntradas; i++){
                                    ticket.entradasUsuario.push(entradas.shift())
                                }

                                resolve(ticket)

                            }else{
                                permitirCompraEntradasRestantes(usuario, ticket, cantidadEntradas, resolve, reject)
                            }
                        }else{
                            reject(`Lo siento ${usuario}, no quedan entradas`)
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
    /**
     * @param {*} usuario pide el usuario que no pudo comprar suficientes entradas (type of data: string)
     * @param {*} ticket pide el ticket (el usuario y la lista de entradas que saco)  (type of data: object) 
     * @param {*} cantidadEntradas pide la cantidad de entradas que saco el usuario (type of data: integer)
     * @param {*} resolve pide el parametro de resolver la promesa (la promesa resuelve el ticket con el usuario y la lista de entradas que saco)
     * @param {*} reject pide el parametro de rechazar la promesa(la promesa rechaza en caso de que no haya entradas o el usuario desea comprar mas entradas de las que hay en stock y no acepta la opcion de comprar menos entradas)
     */
    function permitirCompraEntradasRestantes(usuario, ticket, cantidadEntradas, resolve, reject){
        do{
            try{
                console.log(`Lo siento ${usuario}, no hay suficientes entradas. Si desea comprar entradas igualmente, ingrese cuántas entradas desea comprar. Si no desea comprar ninguna entrada, ingrese 0.`);
                comprarEntradasRestantes = Number(prompt(`(${entradas.length} entradas restantes): `))
                if(comprarEntradasRestantes % 1 !== 0 || comprarEntradasRestantes < 0){
                    console.log(`El sistema solo permiten numeros positivos enteros`)
                }
            }catch(error){
                console.log("El sistema solo permite numeros")
            }
        }while(typeof comprarEntradasRestantes !== "number" || comprarEntradasRestantes % 1 !== 0 || comprarEntradasRestantes > entradas.length)
        cantidadEntradas = comprarEntradasRestantes
        if(cantidadEntradas !== 0){
            for(let i = 0; i < cantidadEntradas; i++){
                ticket.entradasUsuario.push(entradas.shift())
            }
            resolve(ticket)
        }else{
            reject("Muchas gracias por la visita.")
        }
    }
        sacarEntradas()
}
runSimulation()
// DAVID WORK

const Stock = {
    disponibles: 10,
    get() {
        return this.disponibles;
    },
    disminuir(cantidad) {
        if (!Number.isInteger(cantidad) || cantidad <= 0) throw new Error("Cantidad inválida");
        if (cantidad > this.disponibles) throw new Error("Stock insuficiente");
        this.disponibles -= cantidad;
    }
};

const colaDeCompra = [];
let processing = false; 

function validarUsuario(usuario) {
    if (!usuario || typeof usuario !== "object") return false;
    if (typeof usuario.nombre !== "string" || usuario.nombre.trim() === "") return false;
    if (!Number.isInteger(usuario.entradas) || usuario.entradas <= 0) return false;
    if (usuario.entradas > 6) throw new Error("El maxima es 6");
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
    } finally {
        processing = false;
    }
}

function comprarEntradas(usuario) {
    if (!validarUsuario(usuario)) {
        console.log("❌ Usuario inválido, compra rechazada");
        return;
    }
    colaDeCompra.push({ nombre: usuario.nombre, entradas: usuario.entradas});
    setTimeout(procesarCola, Math.random() *2000);
}

const delay = ms => new Promise(r => setTimeout(r, ms));

function simularLlegadas(usuarios) {
// lanza todos los timers en paralelo; cada uno llega tras su delay aleatorio
    return Promise.all(
        usuarios.map(async u => {
            await delay(200 + Math.random() * 2500);
            comprarEntradas(u);
        })
    );
}

async function startSimulator() {
    const usuarios = [
    { nombre: "David", entradas: 4 },
    { nombre: "Ana", entradas: 3 },
    { nombre: "Luis", entradas: 5 },
    { nombre: "Sofía", entradas: 2 },
    { nombre: "David", entradas: 4 },
    { nombre: "Ana", entradas: 3 },
    { nombre: "Luis", entradas: 1 },
    { nombre: "Sofía", entradas: 2 }
    ];

    await simularLlegadas(usuarios);
}

// startSimulator();


// IVAN WORK

// n entradas
// peticiones de entradas
// precesar/disminuir, validar
//una fila de peticiones

const comprador = { nombre: "Roberto", entradas: 8 };

let queue = [];
let entradasDisponibles = 10;

// function validarUsuario(usuarioAValidar) {
//   if (typeof usuarioAValidar === "string") {
//     console.log("Usuario válido");
//     return true;
//   } else {
//     console.log("Usuario inválido");
//     return false;
//   }
// }

// function validarEntradas(entradaAValidar) {
//   if (typeof entradaAValidar === "number" && entradaAValidar >= 0) {
//     console.log("Número válido");
//     return true;
//   } else {
//     console.log("Número inválido");
//     return false;
//   }
// }

// function queueRequest() {
//   if (
//     !validarEntradas(comprador.entradas) ||
//     !validarUsuario(comprador.nombre)
//   ) {
//     return false;
//   }

//   queue.push(comprador);
//   return true;
// }

// function comprarEntrada() {
//   if (!queueRequest()) return;

//   if (comprador.entradas <= entradasDisponibles) {
//     console.log("Gracias por la compra");
//     entradasDisponibles -= comprador.entradas;
//   } else {
//     console.log("Stock no disponible");
//   }
// }

// console.log("Cola inicial:", queue);
// comprarEntrada();
// console.log("Cola final:", queue);
// console.log("Entradas restantes:", entradasDisponibles);

// // ALEX WORK
// // DIEGO WORK

// let basededatos = []; //base de datos simulada
// let tickets = 10; //tickets disponibles
// let requests = 0; //tickets solicitados
// let ticketsSold = 0; //tickets vendidos
// let fila = Promise.resolve(); //fila de promesas

// //funcion para vender tickets
// function sellTicket(name, requests) {
//   return new Promise((resolve) => {
//     if (requests <= tickets) {
//       ticketsSold += requests;
//       tickets -= requests;
//       basededatos.push({ name, requests });
//       console.log(`${name} compró ${requests} ticket(s).`);
//     } else {
//       console.log(
//         `${name} quiso comprar ${requests}, pero no hay suficientes tickets.`
//       );
//     }
//     resolve();
//   });
// }

// // tiempo de espera random
// function randomTime() {
//   return Math.floor(Math.random() * 5000);
// }

// // simulacion de varios usuarios intentando comprar tickets al mismo tiempo
// function transactionByUser(name, requests) {
//   setTimeout(() => {
//     fila = fila.then(() => sellTicket(name, requests));
//   }, randomTime());
// }

// transactionByUser("Juan Frank", 3);
// transactionByUser("Alex", 6);
// transactionByUser("Korsu", 1);
// transactionByUser("Franco", 3);
