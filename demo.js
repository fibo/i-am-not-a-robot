const game = require('i-am-not-a-robot').ticTacToe

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

game(rootElement, () => window.alert('You are not a robot'))
