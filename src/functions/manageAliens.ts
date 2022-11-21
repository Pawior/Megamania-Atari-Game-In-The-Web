import { Alien } from "../classes/Alien";

let aliensArr: Alien[] = [];
export const ManageAliens = (): void => {
  let aliensAmount: number = 8;

  const spawnAliens = (): void => {
    for (let i = 0; i < aliensAmount; i++) {
      console.log("robie aliena");
      let alien = new Alien("img", i * 2.5);
      aliensArr.push(alien);
      alien.spawnAlien();
    }
  };

  const moveAliens = (): void => {
    aliensArr.forEach((alien: Alien) => {
      alien.standardMove();
    });
  };
  spawnAliens();
  moveAliens();
};

export { aliensArr };
