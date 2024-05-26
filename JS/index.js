/* Algoritmo con condicional */

/* Algoritmo con ciclo */

/* const NUMERO = prompt("Ingrese su valor")

if(parseFloat(NUMERO)){
    let resultado = (NUMERO * 1.63).toFixed(0);
    alert(`El valor total es ${resultado}`)
}while(!NUMERO){
    alert("El numero no es válido")
}
 */


/* let valorIngresado = prompt("Ingresá el valor que quiere calcular");
let esValido = isNaN(valorIngresado);

while(esValido){
    alert("Ingresa un numero valido");
    valorIngresado = prompt("Ingresa el valor que quiere calcular");
    esValido = isNaN(valorIngresado);
}
let valorFinal = (valorIngresado * 1.63).toFixed(0);
alert(`El valor total es $${valorFinal} `) */

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

// ACLARACION para agregar el .toFixed, tuve que investigar ya que me daban demasiados decimales en el resultado 