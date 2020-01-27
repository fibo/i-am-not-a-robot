(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const game = require('i-am-not-a-robot').ticTacToe

const rootElement = document.getElementById('root')
document.body.appendChild(rootElement)

game(rootElement, () => window.alert('You are not a robot'))

},{"i-am-not-a-robot":2}],2:[function(require,module,exports){
exports.ticTacToe = require('./src/ticTacToe')

},{"./src/ticTacToe":7}],3:[function(require,module,exports){
const Component = require('./Component')

class Cell extends Component {
  constructor (element, dispatch, index) {
    super(element, dispatch)

    this.index = index

    element.style.float = 'left'
    element.style.width = '40px'
    element.style.height = '40px'
    element.style.margin = '1px'
    element.style.borderRadius = '3px'
    element.style.boxShadow = '1px 1px 2px 0px rgba(0,0,0,0.75)'


    element.addEventListener('click', function () {
      dispatch({
        type: 'PLAYER_CHOOSES_CELL',
        index: index
      })
    })
  }

  render (state) {
    const element = this.element
    const index = this.index

    const cellIsNotSelected = state.cells.indexOf(index) === -1

    const cellWasChoosedByPlayer = state.cells.indexOf(index) % 2 === 0

    const dot = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style="padding: 2px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#e74522"><path d="M17.5,35 C27.1649831,35 35,27.1649831 35,17.5 C35,7.83501688 27.1649831,0 17.5,0 C7.83501688,0 0,7.83501688 0,17.5 C0,27.1649831 7.83501688,35 17.5,35 Z M17.5,27.6171875 C23.0875684,27.6171875 27.6171875,23.0875684 27.6171875,17.5 C27.6171875,11.9124316 23.0875684,7.3828125 17.5,7.3828125 C11.9124316,7.3828125 7.3828125,11.9124316 7.3828125,17.5 C7.3828125,23.0875684 11.9124316,27.6171875 17.5,27.6171875 Z"></path></g></g></svg>'

    const cross = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style="padding: 2px"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#0194F7"><path d="M22.5335744,17.5 L33.9584004,6.07517407 C35.3398039,4.69377056 35.3458996,2.43406676 33.9559164,1.04408356 C32.5687616,-0.343071308 30.3134373,-0.347011737 28.9248259,1.04159963 L17.5,12.4664256 L6.07517407,1.04159963 C4.69377056,-0.339803881 2.43406676,-0.345899645 1.04408356,1.04408356 C-0.343071308,2.43123842 -0.347011737,4.6865627 1.04159963,6.07517407 L12.4664256,17.5 L1.04159963,28.9248259 C-0.339803881,30.3062294 -0.345899645,32.5659332 1.04408356,33.9559164 C2.43123842,35.3430713 4.6865627,35.3470117 6.07517407,33.9584004 L17.5,22.5335744 L28.9248259,33.9584004 C30.3062294,35.3398039 32.5659332,35.3458996 33.9559164,33.9559164 C35.3430713,32.5687616 35.3470117,30.3134373 33.9584004,28.9248259 L22.5335744,17.5 Z" stroke="none" fill="#0194F7" fill-rule="evenodd"></path></g></g></svg>'

    if (cellIsNotSelected) {
      element.style.backgroundColor = '#fff'
    } else {
      if (cellWasChoosedByPlayer) {
        element.innerHTML = cross
      } else {
        element.innerHTML = dot
      }
    }
  }
}

module.exports = Cell

},{"./Component":4}],4:[function(require,module,exports){
class Component {
  constructor (element, dispatch) {
    this.element = element
    this.dispatch = dispatch

    this.component = {}
  }

  createDiv () {
    const div = document.createElement('div')
    this.element.appendChild(div)
    return div
  }

  render (state, dispatch) {
    var component = this.component

    Object.keys(component).forEach(function (key) {
      component[key].render(state, dispatch)
    })
  }
}

module.exports = Component

},{}],5:[function(require,module,exports){
const Component = require('./Component')
const Row = require('./Row')

class Root extends Component {
  constructor (element, dispatch) {
    super(element, dispatch)

    const createDiv = this.createDiv.bind(this)

    element.style.display = 'table'
    element.style.margin = '2px auto'

    this.component.row1 = new Row(createDiv(), dispatch, 0)
    this.component.row2 = new Row(createDiv(), dispatch, 3)
    this.component.row3 = new Row(createDiv(), dispatch, 6)
  }
}

module.exports = Root

},{"./Component":4,"./Row":6}],6:[function(require,module,exports){
const Component = require('./Component')
const Cell = require('./Cell')

class Row extends Component {
  constructor (element, dispatch, index) {
    super(element, dispatch)

    element.style['clear'] = 'both'

    const createDiv = this.createDiv.bind(this)

    this.component.cell1 = new Cell(createDiv(), dispatch, index + 0)
    this.component.cell2 = new Cell(createDiv(), dispatch, index + 1)
    this.component.cell3 = new Cell(createDiv(), dispatch, index + 2)
  }
}

module.exports = Row

},{"./Cell":3,"./Component":4}],7:[function(require,module,exports){
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

},{"./components/Root":5,"./reducer":8}],8:[function(require,module,exports){
const winningCombinations = [
  '0-1-2',
  '3-4-5',
  '6-7-8',
  '0-3-6',
  '1-4-7',
  '2-5-8',
  '0-4-8',
  '2-4-6'
]

function isTris (cells) {
  var choosenCells = []

  for (var i = cells.length - 1; i >= 0; i = i - 2) {
    choosenCells.push(cells[i])
  }

  for (var a = 0; a < choosenCells.length - 2; a++) {
    for (var b = a + 1; b < choosenCells.length - 1; b++) {
      for (var c = b + 1; c < choosenCells.length; c++) {
        var combination = [choosenCells[a], choosenCells[b], choosenCells[c]].sort().join('-')

        if (winningCombinations.indexOf(combination) > -1) return true
      }
    }
  }

  return false
}

function randomCell (cells) {
  // Try to occupy the center first.
  if (cells.indexOf(4) === -1) return 4

  // Try to block first player combination
  if (cells.length === 3) {
    for (var i = 0; i < 9; i++) {
      // Skip cells already occupied.
      if (cells.indexOf(i) > -1) continue

      var combination = [cells[0], cells[2], i].join('-')

      if (winningCombinations.indexOf(combination) > -1) {
        return i
      }
    }
  }

  // Otherwise choose randomly.l
  const randomIndex = Math.floor(Math.random() * 8)

  if (cells.indexOf(randomIndex) === -1) {
    return randomIndex
  } else {
    return randomCell(cells)
  }
}

function reducer (currenState, action, dispatch, callback) {
  var state = Object.assign({}, currenState)

  switch (action.type) {
    case 'PLAYER_CHOOSES_CELL': {
      const cellIsFree = state.cells.indexOf(action.index) === -1

      if (cellIsFree && state.isMyTurn) {
        state.cells.push(action.index)
        state.isMyTurn = false

        setTimeout(function () {
          dispatch({
            type: 'IS_COMPUTER_TURN'
          })
        }, 1000)
      }

      break
    }

    case 'IS_COMPUTER_TURN': {
      const gameOver = state.cells.length === 9
      if (gameOver || isTris(state.cells)) {
        callback()
      } else {
        state.cells.push(randomCell(state.cells))
        state.isMyTurn = true

        // Check if computer won.
        if (isTris(state.cells)) callback()
      }

      break
    }
  }

  return state
}

module.exports = reducer

},{}]},{},[1]);
