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
