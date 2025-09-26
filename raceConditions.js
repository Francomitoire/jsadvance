// MATI WORK
function runSimulation() {
  const usuarios = [];
  const entradas = [];
  const tickets = [];
  for (let i = 1; i <= 15; i++) {
    usuarios.push(`ususario${i}`);
    if (i <= 10) {
      entradas.push(`entrada${i}`);
    }
  }

  const sacarEntradas = async () => {
    const promesasEntradas = usuarios.map((usuario) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (entradas.length !== 0) {
            const cantidadEntradas =
              Math.floor(Math.random() * entradas.length) + 1;
            const ticket = {
              nombre: usuario,
              entradasUsuario: [],
            };
            for (let i = 0; i < cantidadEntradas; i++) {
              ticket.entradasUsuario.push(entradas.shift());
            }

            resolve(ticket);
          } else {
            reject(`Lo siento ${usuario}, se han acabado las entradas`);
          }
        }, Math.random() * 5000);
      });
    });
    promesasEntradas.forEach((promesa) => {
      promesa
        .then((ticket) => {
          tickets.push(ticket);
          console.log(ticket);
        })
        .catch((errorMsg) => {
          console.log(errorMsg);
        });
    });
  };
  sacarEntradas();
}
runSimulation();
// DAVID WORK

const Stock = {
  disponibles: 10,
  get() {
    return this.disponibles;
  },
  disminuir(cantidad) {
    if (!Number.isInteger(cantidad) || cantidad <= 0)
      throw new Error("Cantidad inválida");
    if (cantidad > this.disponibles) throw new Error("Stock insuficiente");
    this.disponibles -= cantidad;
  },
};

const colaDeCompra = [];
let processing = false;

function validarUsuario(usuario) {
  if (!usuario || typeof usuario !== "object") return false;
  if (typeof usuario.nombre !== "string" || usuario.nombre.trim() === "")
    return false;
  if (!Number.isInteger(usuario.entradas) || usuario.entradas <= 0)
    return false;
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
        console.log(
          `✅ ${uProcesar.nombre} compró ${
            uProcesar.entradas
          }. Restan: ${Stock.get()}`
        );
      } catch (error) {
        console.log(
          `❌ ${uProcesar.nombre} no pudo comprar: ${
            error.message
          }. Restan: ${Stock.get()}`
        );
      }
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
  colaDeCompra.push({
    nombre: usuario.nombre,
    entradas: usuario.entradas,
    ts: Date.now(),
  });
  setTimeout(procesarCola, Math.random() * 1500);
}

comprarEntradas({ nombre: "David", entradas: 4 });
comprarEntradas({ nombre: "Ana", entradas: 3 });
comprarEntradas({ nombre: "Luis", entradas: 5 });
comprarEntradas({ nombre: "Sofía", entradas: 2 });
comprarEntradas({ nombre: "David", entradas: 4 });
comprarEntradas({ nombre: "Ana", entradas: 3 });
comprarEntradas({ nombre: "Luis", entradas: 1 });
comprarEntradas({ nombre: "Sofía", entradas: 2 });

// IVAN WORK
// ALEX WORK
// DIEGO WORK

let basededatos = []; // base de datos simulada
let tickets = 10; // tickets disponibles
let ticketsSold = 0; // tickets vendidos

// función para vender tickets

function sellTicket(name, requests) {
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
}

// array con todas las solicitudes
let fila = [
  { name: "Juan Frank", requests: 3 },
  { name: "Alex", requests: 6 },
  { name: "Korsu", requests: 1 },
  { name: "Franco", requests: 3 },
];

// función para tiempo aleatorio
function randomTime() {
  return Math.floor(Math.random() * 3000); // hasta 3 segundos
}

// procesamos cada usuario con retraso aleatorio
fila.forEach((user) => {
  setTimeout(() => {
    sellTicket(user.name, user.requests);
    console.log("\nTickets vendidos:", ticketsSold);
    console.log("Tickets restantes:", tickets);
    console.log("Base de datos:", basededatos);
  }, randomTime());
});
