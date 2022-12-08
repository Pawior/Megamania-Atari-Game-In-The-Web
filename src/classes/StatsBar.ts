import { Player } from "./Player";

export class StatsBar {
  hp: number;
  points: number;
  // player: Player;
  energyBarStartWidth: number = 10;
  energyBarStartTransform: number = 0;

  statsBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar"
  ) as HTMLDivElement;
  healthBarHTML: HTMLDivElement = document.querySelector(
    "#stats-bar_health-bar"
  ) as HTMLDivElement;

  constructor() {
    this.hp = 3;
    this.points = 0;
    // this.manageEnergyBar();
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
    for (let i = 0; i < this.hp; i++) {
      let healthDiv = document.createElement("div");
      healthDiv.classList.add("stats-bar_health-bar_heart");
      this.healthBarHTML.appendChild(healthDiv);
    }
  }
  manageEnergyBar(hurtPlayerFunc: () => void) {
    let energyBar: HTMLDivElement = document.querySelector(
      "#stats-bar_energy-bar_yellowBg"
    ) as HTMLDivElement;
    let energyBarStyle = window.getComputedStyle(energyBar);

    let energyBarWidth: number = parseInt(
      energyBarStyle.getPropertyValue("width")
    );
    let matrixValue = energyBarStyle.getPropertyValue("transform");
    let matrixArr = matrixValue.split(", ");
    // console.log(matrixValue);
    // console.log(matrixArr);
    // console.log(matrixArr[4]);

    this.energyBarChecker(energyBar, hurtPlayerFunc);
  }
  energyBarChecker(
    energyBar: HTMLDivElement,
    hurtPlayerFunc: () => void
  ): void {
    let interval = setInterval(() => {
      // console.log("managuje energy bar");
      this.energyBarStartWidth -= 0.5;
      this.energyBarStartTransform -= 0.25;
      energyBar.style.width = `${this.energyBarStartWidth}vw`;
      energyBar.style.transform = `translateX(${this.energyBarStartTransform}vw)`;
      if (this.energyBarStartWidth <= 0) {
        // clearInterval(interval);
        // resolve("done");
        hurtPlayerFunc();
        this.energyBarStartWidth = 60;
        this.energyBarStartTransform = 0;
      }
    }, 500);
  }
  addPoints(alienType: string) {
    let pointsBarTag: HTMLElement = document.querySelector(
      "#stats-bar_points-bar_text"
    ) as HTMLElement;
    let pointsCurrentText = parseInt(pointsBarTag.textContent as string);
    let pointsToAdd = 0;
    switch (alienType) {
      default:
        pointsToAdd = 20;
    }
    let newPoints = (pointsCurrentText += pointsToAdd);
    pointsBarTag.innerHTML = `${newPoints}`;
  }
  zeroPoints() {
    let pointsBarTag: HTMLElement = document.querySelector(
      "#stats-bar_points-bar_text"
    ) as HTMLElement;
    pointsBarTag.innerHTML = `${0}`;
  }
  resetEnergyBar() {
    this.energyBarStartWidth = 60;
    this.energyBarStartTransform = 0;
  }
}
