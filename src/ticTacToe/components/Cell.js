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
