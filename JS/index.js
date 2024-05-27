/* Algoritmo con condicional */

// Creación de cuenta

/* Algoritmo con ciclo */
function calcularConImpuestos(){

let valorIngresado;
let valor = false;

while(!valor) {
    valorIngresado = prompt ("Ingresá el valor que queres calcular");

    if(isNaN(valorIngresado)){
        alert("Por favor, ingrese un número válido.");
    }else if(valorIngresado === null){
        alert("Por favor, ingrese un número válido.");
    }else if(valorIngresado === ""){
        alert("Por favor, ingrese un número válido.");
    }else{
        let resultado = (valorIngresado * 1.62).toFixed(0)
        alert(`El valor total con impuestos es $${resultado}`)
    }
}
}

calcularConImpuestos()
// ACLARACION para agregar el .toFixed, tuve que investigar ya que me daban demasiados decimales en el resultado 