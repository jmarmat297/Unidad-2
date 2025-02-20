function comprobar() {
    let numero = parseInt(document.getElementById("Numero").value);

    if (numero % 2 === 0) {
        document.getElementById("mensaje").innerHTML = "El número es par"; 
    } else {
        document.getElementById("mensaje").innerHTML = "El número es impar";
    }
}
