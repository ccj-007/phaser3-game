import Phaser from "phaser";

import Game from "./scenes/Game";
import UI from "./scenes/UI";
import GameOver from "./scenes/GameOver";
import AudioPlay from "./scenes/AudioPlay";
import GameStart from "./scenes/GameStart";
import GameSuc from "./scenes/GameSuc";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 600,
  height: 600,
  physics: {
    default: "matter",
    matter: {
      debug: false,
    },
  },
  scene: [GameStart, Game, UI, AudioPlay, GameOver, GameSuc],
};

export default new Phaser.Game(config);
