(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const game = require('./index').ticTacToe

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

game(rootElement, () => window.alert('You are not a robot'))

},{"./index":2}],2:[function(require,module,exports){
exports.ticTacToe = require('./src/ticTacToe')

},{"./src/ticTacToe":8}],3:[function(require,module,exports){
const Component = require('./Component')

class Cell extends Component {
  constructor (element, dispatch, index) {
    super(element, dispatch)

    this.index = index

    element.style['float'] = 'left'
    element.style['width'] = '40px'
    element.style['height'] = '40px'
    element.style['margin'] = '1px'

    element.onclick = function () {
      dispatch({
        type: 'PLAYER_CHOOSES_CELL',
        index: index
      })
    }
  }

  render (state) {
    const element = this.element
    const index = this.index

    const cellIsNotSelected = state.cells.indexOf(index) === -1

    const cellWasChoosedByPlayer = state.cells.indexOf(index) % 2 === 0

    if (cellIsNotSelected) {
      element.style.backgroundColor = 'beige'
    } else {
      if (cellWasChoosedByPlayer) {
        element.style.backgroundColor = 'lightgreen'
      } else {
        element.style.backgroundColor = 'salmon'
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
        console.log(combination)

        if (winningCombinations.indexOf(combination) > -1) return true
      }
    }
  }

  return false
}

function randomCell (cells) {
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
    case 'PLAYER_CHOOSES_CELL':
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

    case 'IS_COMPUTER_TURN':
      const gameOver = state.cells.length === 9
      if (gameOver || isTris(state.cells)) {
        callback()
      } else {
        state.cells.push(randomCell(state.cells))
        state.isMyTurn = true
      }

      break
  }

  return state
}

module.exports = reducer

},{}],8:[function(require,module,exports){
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

},{"./components/Root":5,"./reducer":7}]},{},[1]);
