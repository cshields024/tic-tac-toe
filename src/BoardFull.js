function BoardFull(squares) {
  for (let i = 0; i < squares.lenght; i++) {
    if (squares[i] === null) {
      return false;
    }
  }
  return true;
}

export default BoardFull;