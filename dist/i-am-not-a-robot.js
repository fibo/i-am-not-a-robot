require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = require('./Component');

var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell(element, dispatch, index) {
    _classCallCheck(this, Cell);

    var _this = _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).call(this, element, dispatch));

    _this.index = index;

    element.style.float = 'left';
    element.style.width = '40px';
    element.style.height = '40px';
    element.style.margin = '1px';
    element.style.borderRadius = '3px';

    element.onclick = function () {
      dispatch({
        type: 'PLAYER_CHOOSES_CELL',
        index: index
      });
    };
    return _this;
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render(state) {
      var element = this.element;
      var index = this.index;

      var cellIsNotSelected = state.cells.indexOf(index) === -1;

      var cellWasChoosedByPlayer = state.cells.indexOf(index) % 2 === 0;

      var dot = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#e74522"><path d="M17.5,35 C27.1649831,35 35,27.1649831 35,17.5 C35,7.83501688 27.1649831,0 17.5,0 C7.83501688,0 0,7.83501688 0,17.5 C0,27.1649831 7.83501688,35 17.5,35 Z M17.5,27.6171875 C23.0875684,27.6171875 27.6171875,23.0875684 27.6171875,17.5 C27.6171875,11.9124316 23.0875684,7.3828125 17.5,7.3828125 C11.9124316,7.3828125 7.3828125,11.9124316 7.3828125,17.5 C7.3828125,23.0875684 11.9124316,27.6171875 17.5,27.6171875 Z"></path></g></g></svg>';

      var cross = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#0194F7"><path d="M22.5335744,17.5 L33.9584004,6.07517407 C35.3398039,4.69377056 35.3458996,2.43406676 33.9559164,1.04408356 C32.5687616,-0.343071308 30.3134373,-0.347011737 28.9248259,1.04159963 L17.5,12.4664256 L6.07517407,1.04159963 C4.69377056,-0.339803881 2.43406676,-0.345899645 1.04408356,1.04408356 C-0.343071308,2.43123842 -0.347011737,4.6865627 1.04159963,6.07517407 L12.4664256,17.5 L1.04159963,28.9248259 C-0.339803881,30.3062294 -0.345899645,32.5659332 1.04408356,33.9559164 C2.43123842,35.3430713 4.6865627,35.3470117 6.07517407,33.9584004 L17.5,22.5335744 L28.9248259,33.9584004 C30.3062294,35.3398039 32.5659332,35.3458996 33.9559164,33.9559164 C35.3430713,32.5687616 35.3470117,30.3134373 33.9584004,28.9248259 L22.5335744,17.5 Z" stroke="none" fill="#0194F7" fill-rule="evenodd"></path></g></g></svg>';

      if (cellIsNotSelected) {
        element.style.backgroundColor = '#fff';
      } else {
        if (cellWasChoosedByPlayer) {
          element.style.background = "url('data:image/svg+xml;utf8," + cross + "') #fff no-repeat center";
        } else {
          element.style.background = "url('data:image/svg+xml;utf8," + dot + "') #fff no-repeat center";
        }
      }
    }
  }]);

  return Cell;
}(Component);

module.exports = Cell;

},{"./Component":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(element, dispatch) {
    _classCallCheck(this, Component);

    this.element = element;
    this.dispatch = dispatch;

    this.component = {};
  }

  _createClass(Component, [{
    key: 'createDiv',
    value: function createDiv() {
      var div = document.createElement('div');
      this.element.appendChild(div);
      return div;
    }
  }, {
    key: 'render',
    value: function render(state, dispatch) {
      var component = this.component;

      Object.keys(component).forEach(function (key) {
        component[key].render(state, dispatch);
      });
    }
  }]);

  return Component;
}();

module.exports = Component;

},{}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = require('./Component');
var Row = require('./Row');

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root(element, dispatch) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, element, dispatch));

    var createDiv = _this.createDiv.bind(_this);

    _this.component.row1 = new Row(createDiv(), dispatch, 0);
    _this.component.row2 = new Row(createDiv(), dispatch, 3);
    _this.component.row3 = new Row(createDiv(), dispatch, 6);
    return _this;
  }

  return Root;
}(Component);

module.exports = Root;

},{"./Component":2,"./Row":4}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = require('./Component');
var Cell = require('./Cell');

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row(element, dispatch, index) {
    _classCallCheck(this, Row);

    var _this = _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).call(this, element, dispatch));

    element.style['clear'] = 'both';

    var createDiv = _this.createDiv.bind(_this);

    _this.component.cell1 = new Cell(createDiv(), dispatch, index + 0);
    _this.component.cell2 = new Cell(createDiv(), dispatch, index + 1);
    _this.component.cell3 = new Cell(createDiv(), dispatch, index + 2);
    return _this;
  }

  return Row;
}(Component);

module.exports = Row;

},{"./Cell":1,"./Component":2}],5:[function(require,module,exports){
'use strict';

var Root = require('./components/Root');
var reducer = require('./reducer');

function ticTacToe(element, callback) {
  var currentState = {
    isMyTurn: true,
    win: false,
    cells: []
  };

  var render = Function.prototype;

  function dispatch(action) {
    currentState = reducer(currentState, action, dispatch, callback);
    render(currentState, dispatch);
  }

  var root = new Root(element, dispatch);
  render = root.render.bind(root);

  dispatch({ type: 'INIT' });
}

module.exports = ticTacToe;

},{"./components/Root":3,"./reducer":6}],6:[function(require,module,exports){
'use strict';

var winningCombinations = ['0-1-2', '3-4-5', '6-7-8', '0-3-6', '1-4-7', '2-5-8', '0-4-8', '2-4-6'];

function isTris(cells) {
  var choosenCells = [];

  for (var i = cells.length - 1; i >= 0; i = i - 2) {
    choosenCells.push(cells[i]);
  }

  for (var a = 0; a < choosenCells.length - 2; a++) {
    for (var b = a + 1; b < choosenCells.length - 1; b++) {
      for (var c = b + 1; c < choosenCells.length; c++) {
        var combination = [choosenCells[a], choosenCells[b], choosenCells[c]].sort().join('-');

        if (winningCombinations.indexOf(combination) > -1) return true;
      }
    }
  }

  return false;
}

function randomCell(cells) {
  // Try to occupy the center first.
  if (cells.indexOf(4) === -1) return 4;

  // Try to block first player combination
  if (cells.length === 3) {
    for (var i = 0; i < 9; i++) {
      // Skip cells already occupied.
      if (cells.indexOf(i) > -1) continue;

      var combination = [cells[0], cells[2], i].join('-');

      if (winningCombinations.indexOf(combination) > -1) {
        return i;
      }
    }
  }

  // Otherwise choose randomly.l
  var randomIndex = Math.floor(Math.random() * 8);

  if (cells.indexOf(randomIndex) === -1) {
    return randomIndex;
  } else {
    return randomCell(cells);
  }
}

function reducer(currenState, action, dispatch, callback) {
  var state = Object.assign({}, currenState);

  switch (action.type) {
    case 'PLAYER_CHOOSES_CELL':
      var cellIsFree = state.cells.indexOf(action.index) === -1;

      if (cellIsFree && state.isMyTurn) {
        state.cells.push(action.index);
        state.isMyTurn = false;

        setTimeout(function () {
          dispatch({
            type: 'IS_COMPUTER_TURN'
          });
        }, 1000);
      }

      break;

    case 'IS_COMPUTER_TURN':
      var gameOver = state.cells.length === 9;
      if (gameOver || isTris(state.cells)) {
        callback();
      } else {
        state.cells.push(randomCell(state.cells));
        state.isMyTurn = true;

        // Check if computer won.
        if (isTris(state.cells)) callback();
      }

      break;
  }

  return state;
}

module.exports = reducer;

},{}],"i-am-not-a-robot":[function(require,module,exports){
'use strict';

exports.ticTacToe = require('./src/ticTacToe');

},{"./src/ticTacToe":5}]},{},[]);
