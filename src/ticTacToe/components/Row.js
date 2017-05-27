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
