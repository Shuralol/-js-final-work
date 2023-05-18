export function calcTileType(index, boardSize) {
  const isFirstRow = index < boardSize;
  const isLastRow = index >= boardSize * (boardSize - 1);
  const isFirstColumn = index % boardSize === 0;
  const isLastColumn = (index + 1) % boardSize === 0;

  if (isFirstRow && isFirstColumn) {
    return "top-left";
  } else if (isFirstRow && isLastColumn) {
    return "top-right";
  } else if (isFirstRow) {
    return "top";
  } else if (isLastRow && isFirstColumn) {
    return "bottom-left";
  } else if (isLastRow && isLastColumn) {
    return "bottom-right";
  } else if (isLastRow) {
    return "bottom";
  } else if (isFirstColumn) {
    return "left";
  } else if (isLastColumn) {
    return "right";
  } else {
    return "center";
  }
}
