const game = require('i-am-not-a-robot').ticTacToe

const rootElement = document.getElementById('root')
document.body.appendChild(rootElement)

game(rootElement, () => window.alert('You are not a robot'))
