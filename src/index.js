import GamePlay from './gamePlay';

class GameController {
  init() {
    const gamePlay = new GamePlay();
    gamePlay.drawUi('prairie');
  }
}