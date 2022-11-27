import { Player } from "./classes/Player";
import { StatsBar } from "./classes/StatsBar";
// import { Alien } from "./classes/Alien";
import { ManageAliens } from "./functions/manageAliens";
import { CollisonChecker } from "./functions/collisionChecker";
export const Game = () => {
  console.log("start the game");
  // let alien = new Alien("img", 100);
  // alien.spawnAlien();
  let player = new Player();
  // player.spawnPlayer();
  player.initialize();
  player.shooting();
  // let statsBar = new StatsBar(player);
  // statsBar.spawnStatsBar();
  ManageAliens();
  // CollisonChecker();
};
