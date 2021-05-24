const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);

function clientes(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const Cliente1 = new clientes('Pedro', 555);


console.log(Cliente1);