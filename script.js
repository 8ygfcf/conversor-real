let btnDollar = document.querySelector("#dollar")
let btnEuro = document.querySelector("#euro")
let btnLibras = document.querySelector("#libra")

btnDollar.addEventListener("click", function () {
    
    let resultado = document.querySelector(".resultado-div")
    let valor = parseFloat(document.querySelector(".valor").value)

    valorDollar = valor / 5.24

    if (valor != valor || valor == "" || valor < 0) {
        resultado.style.color = "black"
        resultado.innerHTML = "Digite um valor valido"
        setTimeout(() => {
            resultado.style.color = "transparent"
            resultado.innerHTML = "a"
          }, "1100")
    }
    else {
        resultado.style.color = "black"
        resultado.innerHTML = valorDollar.toFixed(2) + " US$"
    }
})

btnEuro.addEventListener("click", function () {
    
    let resultado = document.querySelector(".resultado-div")
    let valor = parseFloat(document.querySelector(".valor").value)

    valorEuro = valor / 5.19

    if (valor != valor || valor == "" || valor < 0) {
        resultado.style.color = "black"
        resultado.innerHTML = "Digite um valor valido"
        setTimeout(() => {
            resultado.style.color = "transparent"
            resultado.innerHTML = "a"
          }, "1100")
    }
    else {
        resultado.style.color = "black"
        resultado.innerHTML = valorEuro.toFixed(2) + " €"
    }
})

btnLibras.addEventListener("click", function () {
    
    let resultado = document.querySelector(".resultado-div")
    let valor = parseFloat(document.querySelector(".valor").value)

    valorLibras = valor / 6.04

    if (valor != valor || valor == "" || valor < 0) {
        resultado.style.color = "black"
        resultado.innerHTML = "Digite um valor valido"
        setTimeout(() => {
            resultado.style.color = "transparent"
            resultado.innerHTML = "a"
          }, "1100")
    }
    else {
        resultado.style.color = "black"
        resultado.innerHTML = valorLibras.toFixed(2) + " £"
    }
})
