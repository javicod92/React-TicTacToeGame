import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => { //Esta funcion chequea si hay un ganador
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // esto devuelve el ganador x u o
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  //Revisamos si todas las casillas son != null
  return newBoard.every((square) => square != null)
}