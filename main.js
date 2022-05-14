const palavras = [
  'casa',
  'carro',
  'moto',
  'cachorro',
  'gato',
  'cavalo',
  'elefante',
  'arara',
  'porco',
  'aranha',
  'papai',
  'mamae',
  'irmao',
  'irma',
  'avo',
  'neto',
  'sobrinho',
  'sobrinha',
  'tio',
  'tia',
  'primo',
  'prima',
  'banana',
  'abacate',
  'abacaxi',
  'laranja',
  'melancia',
  'melao',
  'morango',
  'limao',
  'manga',
  'pera',
  'goiaba',
  'uva',
  'sorvete',
  'pudim',
  'bolo',
  'pizza',
  'macarrao',
  'feijao',
  'arroz',
  'farofa',
  'sopa'
]

const palpites = []

const palavra = palavras[Math.floor(Math.random() * palavras.length)]

const letras = palavra.split('')

const revelaPalavra = () => {
  const palavraElement = document.querySelector('#palavra')
  palavraElement.innerHTML = letras.map(letra => {
    return palpites.includes(letra) ? `<span>${letra.toUpperCase()}</span>` : '_'
  }).join('')
}

const adicionaLetraPalpite = (letra) => {
  if (!palpites.includes(letra)) {
    palpites.push(letra)

    const palpiteElement = document.querySelector('#palpites')
    palpiteElement.innerHTML = palpites.join(' ').toUpperCase()

    revelaPalavra()
  }
}

window.onload = () => {
  revelaPalavra()

  window.addEventListener('keyup', e => {
    const letra = e.key.toLowerCase()
    if (/^[a-z]$/.test(letra)) {
      console.log('Letra: ', letra)
      adicionaLetraPalpite(letra)
    }
  })
}
