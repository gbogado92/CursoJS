// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}



// Clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {

}

// Instanciar

const ui = new UI();
let presupuesto;

// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');
    
    // console.log(presupuestoUsuario);
    
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }
    
    // presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);
    

}