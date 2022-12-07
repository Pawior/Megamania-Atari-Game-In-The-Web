import { CollisonChecker } from "../functions/collisionChecker";
import { StatsBar } from "./StatsBar";
import { aliensArr, spawnBurgers } from "../functions/manageAliens";

export class Bullet {
  bulletHTML: HTMLDivElement = document.createElement("div") as HTMLDivElement;

  statsBar: StatsBar;
  constructor(statsBar: StatsBar) {
    this.statsBar = statsBar;
  }
  spawnBullet(playerHTML: HTMLDivElement) {
    const bulletZone: HTMLDivElement = document.querySelector(
      "#bullet-zone"
    ) as HTMLDivElement;
    // const playerHTML

    this.bulletHTML.classList.add("bullet");

    let bulletStyle = window.getComputedStyle(this.bulletHTML);
    let bulletLeft = parseInt(bulletStyle.getPropertyValue("left"));

    let bulletBotProp = -2;

    // Probably dont needed
    let style = window.getComputedStyle(playerHTML);
    let left = parseInt(style.getPropertyValue("left"));
    left -= 10;
    this.bulletHTML.style.setProperty("left", `calc(50% + ${left}px)`);
    bulletZone.appendChild(this.bulletHTML);

    setInterval(() => {
      bulletBotProp += 3;
      // console.log(bulletBotProp);
      this.bulletHTML.style.bottom = `${bulletBotProp}vh`;
      let res: any = this.checkCollision();
      // console.log(res);
      if (res.hit) {
        this.addPointsAfterHit();
        if (aliensArr.length == 0) {
          console.log("Brak alienów");
          spawnBurgers();
        }
      }
      // console.log(parseInt(bulletStyle.getPropertyValue("bottom")));
    }, 1000 / 20);
  }
  checkCollision() {
    return CollisonChecker(this.bulletHTML);
  }
  addPointsAfterHit() {
    this.statsBar.addPoints("hamburger");
  }
}
