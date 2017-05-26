const game = require('./index').ticTacToe

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

game(rootElement, () => window.alert('You are not a robot'))
