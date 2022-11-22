import { Player } from "./Player";

export class StatsBar {
  hp: number;
  player: Player;
  statsBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar"
  ) as HTMLDivElement;
  healthBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar_health-bar"
  ) as HTMLDivElement;

  constructor(player: Player) {
    this.hp = 100;
    this.player = player;
  }
  spawnStatsBar() {
    const app: HTMLDivElement = document.querySelector(
      "#app"
    ) as HTMLDivElement;
    // let statsBarDiv = document.createElement("div");
    // statsBarDiv.id = "stats-bar";
    // app.appendChild(statsBarDiv);
  }
  updateHealth() {}
}
