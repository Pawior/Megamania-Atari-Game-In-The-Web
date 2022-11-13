import { Alien } from "../classes/Alien";

export const ManageAliens = (): void => {
  let aliensAmount: number = 8;

  for (let i = 0; i < 4; i++) {
    console.log("robie aliena");
    let alien = new Alien("img", i * 160);
    alien.spawnAlien();
    alien.standardMove();
  }
};
