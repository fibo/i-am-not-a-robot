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
