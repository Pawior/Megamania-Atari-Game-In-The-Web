import { Player } from "./classes/Player";
export const Game = () => {
  console.log("start the game");
  let player = new Player();
  player.respawnPlayer();
};
