import { PlayScene } from "./PlayScene.js"

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 750,
  backgroundColor: "#cccccc",
  parent: "game",
  scene: [PlayScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    }
  }
}

const game = new Phaser.Game(config)