function calcular() {
    let a = parseInt(document.getElementById("a").value, 10);
    let b = parseInt(document.getElementById("b").value, 10);
    document.getElementById("resultado").innierHTML = "el primer numero es: " + a + "\nEl segundo numero es: " + b + "\nla suma es: " + ( a + b ) + "\nLa resta es: " + (a - b) + "\nel producto es: " + ( a * b ) + " \nla divioson es: " + ( a / b ) +"\nel resto es: " + ( a % b );
}