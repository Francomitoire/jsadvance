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

// IVAN WORK
// ALEX WORK
// DIEGO WORK
