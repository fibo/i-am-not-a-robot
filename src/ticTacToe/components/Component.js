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
