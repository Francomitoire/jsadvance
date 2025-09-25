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

function validarUsuario(usuario) {
    if (!usuario || typeof usuario !== "object") return false;
    if (typeof usuario.nombre !== "string" || usuario.nombre.trim() === "") return false;
    if (!Number.isInteger(usuario.entradas) || usuario.entradas <= 0) return false;
    if (usuario.entradas > 6) throw new Error("El maxima es 6");
    return true;
}

// IVAN WORK
// ALEX WORK
// DIEGO WORK
