import { CollisonChecker } from "../functions/collisionChecker";

export class Bullet {
  bulletHTML: HTMLDivElement = document.createElement("div") as HTMLDivElement;

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
      this.checkCollision();
      // console.log(parseInt(bulletStyle.getPropertyValue("bottom")));
    }, 1000 / 20);
  }
  checkCollision() {
    CollisonChecker(this.bulletHTML);
  }
}
