const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Bajo peso'
    } else if (imc < 25) {
      classification = 'Peso normal'
    } else if (imc < 30) {
      classification = 'Sobrepeso'
    } else if (imc < 35) {
      classification = 'Obesidad Grado 1'
    } else if (imc < 41) {
      classification = 'Obesidad Grado 2'
    } else {
      classification = 'Obesidad mórbida'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}