const Root = require('./components/Root')
const reducer = require('./reducer')

function ticTacToe (element, callback) {
  var currentState = {
    isMyTurn: true,
    win: false,
    cells: []
  }

  var render = Function.prototype

  function dispatch (action) {
    currentState = reducer(currentState, action, dispatch, callback)
    render(currentState, dispatch)
  }

  const root = new Root(element, dispatch)
  render = root.render.bind(root)

  dispatch({ type: 'INIT' })
}

module.exports = ticTacToe
