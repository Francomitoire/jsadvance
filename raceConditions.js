// MATI WORK
// DAVID WORK

const Stock = {
    disponibles: 10,
    get() { return this.disponibles; },
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
            await Promise.resolve();
        }
    } finally {
        processing = false;
    }
}

// IVAN WORK
// ALEX WORK
// DIEGO WORK
