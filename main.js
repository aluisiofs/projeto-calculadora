// Exercicio 3
console.log("main.js funcionando.")

const inputNumero1 = document.getElementById('inputNumero1')
const inputNumero2 = document.getElementById('inputNumero2')
const txtResultado = document.getElementById('txt-resultado')

// Exercicio 4
function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado
}

function gerarResultado(event) {
    event.preventDefault() // bloqueia a ação do form
    console.log('gerarResultado')    
    const num1 = parseInt(inputNumero1.value)
    const num2 = parseInt(inputNumero2.value)

    const resultado = soma(numero1, numero2)
    txtResultado.innerText = `Resultado: ${resultado}`
    
    // alert(resultado)
}