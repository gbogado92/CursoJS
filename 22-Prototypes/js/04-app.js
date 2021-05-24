function cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de cliente: ${this.tipoCliente()}`
}

cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}

function Persona(nombre, saldo, telefono) {
    cliente.call(this, nombre,saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create(cliente.prototype);

Persona.prototype.constructor = cliente;

const Diego = new Persona('diego', 500, 1534342349);

console.log(Diego);

console.log(Diego.nombreClienteSaldo() );

cliente.prototype.mostrarTelefono = function() {
    return `El telefono de ${this.nombre} es ${this.telefono}`;
}
console.log(Diego.mostrarTelefono() );