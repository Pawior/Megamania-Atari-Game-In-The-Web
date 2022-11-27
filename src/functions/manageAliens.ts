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
export const resetAliens = (): void => {
  // let restAliens = document.querySelectorAll(".alien");
  // for (let i = 0; i < restAliens.length; i++) {
  //   restAliens[i].remove();
  // }

  // for (let i = 0; i < aliensArr.length; i++) {
  //   console.log("robie aliena");
  //   let alien = new Alien("img", i * 2.5);
  //   alien.spawnAlien();
  //   alien.standardMove();
  // }

  const respawnAliens = () => {
    aliensArr.forEach((alien) => {
      alien.respawnAlien();
      console.log("przemieszczam");
      alien.standardMove();
    });
  };
  respawnAliens();
  // for (let i = 0; i < aliensArr.length; i++) {
  //   aliensArr[i].standardMove();
  // }
  // aliensArr.forEach((alien: Alien) => {
  //   console.log();
  //   alien.standardMove();
  // });
};

export { aliensArr };
