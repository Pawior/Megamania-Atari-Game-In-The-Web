import { Player } from "./classes/Player";
import { StatsBar } from "./classes/StatsBar";
import { Alien } from "./classes/Alien";
export const Game = () => {
  console.log("start the game");
  let alien = new Alien("img");
  alien.spawnAlien();
  let player = new Player();
  // player.spawnPlayer();
  player.initialize();
  let statsBar = new StatsBar();
  statsBar.spawnStatsBar();
};
