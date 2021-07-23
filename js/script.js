function somar() {
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById("res")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = "A soma entre " + n1 + " e " + n2 + " é igual a " + s; 
}

function subtrair() {
    var tn1 = document.getElementById("txtn3")
    var tn2 = document.querySelector('input#txtn4')
    var res = document.getElementById("res2")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 - n2
    res2.innerHTML = "A subtração entre " + n1 + " e " + n2 + " é igual a " + s; 
}

function multiplicar() {
    var tn1 = document.getElementById("txtn5")
    var tn2 = document.querySelector("input#txtn6")
    var res = document.getElementById("res3")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2
    res3.innerHTML = "A multiplicação entre " + n1 + " e " + n2 + " é igual a " + s; 
}

function dividir() {
    var tn1 = document.getElementById("txtn7")
    var tn2 = document.querySelector("input#txtn8")
    var res = document.getElementById("res4")
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 / n2
    res4.innerHTML = "A divisão entre " + n1 + " e " + n2 + " é igual a " + s; 
}