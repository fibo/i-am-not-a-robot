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
