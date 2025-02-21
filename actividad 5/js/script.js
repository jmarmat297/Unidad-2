function calcular() {
    let a = parseInt(document.getElementById("a").value, 10);
    let b = parseInt(document.getElementById("b").value, 10);
    document.getElementById("resultado").innerHTML = "el primer numero es: " + a + "<br>El segundo numero es: " + b + "<br>a suma es: " + ( a + b ) + "<br>La resta es: " + (a - b) + "<br>el producto es: " + ( a * b ) + " <br>la divioson es: " + ( a / b ) +"\<br> resto es: " + ( a % b );
}
