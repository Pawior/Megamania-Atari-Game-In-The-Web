export class StatsBar {
  hp: number;
  constructor() {
    this.hp = 100;
  }
  spawnStatsBar() {
    const app: HTMLDivElement = document.querySelector(
      "#app"
    ) as HTMLDivElement;
    let statsBarDiv = document.createElement("div");
    statsBarDiv.id = "stats-bar";
    app.appendChild(statsBarDiv);
  }
}
