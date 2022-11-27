import { Player } from "./Player";

export class StatsBar {
  hp: number;
  // player: Player;
  statsBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar"
  ) as HTMLDivElement;
  healthBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar_health-bar"
  ) as HTMLDivElement;

  constructor() {
    this.hp = 3;
    // this.player = player;
  }
  spawnStatsBar() {
    const app: HTMLDivElement = document.querySelector(
      "#app"
    ) as HTMLDivElement;
    // let statsBarDiv = document.createElement("div");
    // statsBarDiv.id = "stats-bar";
    // app.appendChild(statsBarDiv);
  }
  updateHealthBar() {
    this.healthBarHTML.replaceChildren();
    console.log("robie");
    for (let i = 0; i < this.hp; i++) {
      let healthDiv = document.createElement("div");
      healthDiv.classList.add("stats-bar_health-bar_heart");
      this.healthBarHTML.appendChild(healthDiv);
    }
  }
}
