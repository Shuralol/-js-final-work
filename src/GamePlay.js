export default class GamePlay {
  drawUi(theme) {
    const container = document.getElementById("game-container");
    container.innerHTML = "";

    const fieldSize = 8;
    const tileSize = 80;

    const gameField = document.createElement("div");
    gameField.classList.add("game-field");
    gameField.style.width = `${fieldSize * tileSize}px`;

    for (let i = 0; i < fieldSize; i++) {
      for (let j = 0; j < fieldSize; j++) {
        const tile = document.createElement("div");
        tile.classList.add("game-tile");
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;

        const tileType = calcTileType(j, i, fieldSize);
        tile.textContent = theme[tileType];

        gameField.appendChild(tile);
      }
    }

    container.appendChild(gameField);
  }
}
