import { Alien } from "../classes/Alien";

let aliensArr: Alien[] = [];
let currGameLevel = 0;
export const ManageAliens = (): void => {
  let aliensAmount: number = 2;

  const spawnAliens = (): void => {
    for (let i = 0; i < aliensAmount; i++) {
      console.log("robie aliena");
      let alien = new Alien("enemyDisc.gif", i * 1, 3);
      aliensArr.push(alien);
      alien.spawnAlien();
      console.log(alien);
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

export const spawnBurgers = (): void => {
  let aliensAmount: number = 16;

  const spawnAliens = (): void => {
    for (let i = 0; i < aliensAmount / 2; i++) {
      for (let j = 1; j < 4; j++) {
        console.log("robie aliena");
        let alien = new Alien("enemyHamburger.png", i * 1, j * 1.5);
        aliensArr.push(alien);
        alien.spawnAlien();
        console.log(alien);
      }
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

export const hardResetAliens = (): void => {
  aliensArr.forEach((alien: Alien) => {
    alien.alienHTML.remove();
  });
  ManageAliens();
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

const nextWave = () => {};
// const aliensStateChecker = () => {
//   // setInterval( () => {

//   // }, 500 )

// }

export { aliensArr };
