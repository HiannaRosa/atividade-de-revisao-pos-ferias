const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    somar()
})

function somar() {
    const value1 = document.querySelector("#num1").valueAsNumber
    const value2 = document.querySelector("#num2").valueAsNumber

    const paragrafo = document.querySelector("form p")
    paragrafo.innerHTML = `Resultado: ${value1 + value2}`
}