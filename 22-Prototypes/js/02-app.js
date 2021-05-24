function cliente(nombre, categoria) {
    this.nombre = nombre;
    this.categoria = categoria;
}

const juan = new cliente('Juan', 'dueño');

function formatearCliente(cliente) {
    const { nombre, categoria } = cliente;
    return `El cliente ${nombre} el es ${categoria} de la empresa`; 
}

console.log(formatearCliente(juan));

function empresa(nombre, categoria, totalEmpleados) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.totalEmpleados = totalEmpleados;
}

function formatearEmpresa(empresa) {
    const { nombre, categoria, totalEmpleados } = empresa;
    return `El cliente ${nombre} el es ${categoria} de una empresa que tiene un total de ${totalEmpleados} empleados`; 
}

const CRZ = new empresa('Sergio', 'dueño', 500);

console.log(formatearEmpresa(CRZ));

