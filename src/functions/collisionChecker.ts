import { aliensArr } from "./manageAliens";
export const CollisonChecker = (bullet: HTMLDivElement): void => {
  console.log(aliensArr);
  aliensArr.forEach((alien, idx) => {
    let alienPos = alien.alienHTML.getBoundingClientRect();

    let div1Top = alienPos.top;
    let div1Left = alienPos.left;
    let div1Right = alienPos.right;
    let div1Bottom = alienPos.bottom;

    let bulletPos = bullet.getBoundingClientRect();
    let div2Top = bulletPos.top;
    let div2Left = bulletPos.left;
    let div2Right = bulletPos.right;
    let div2Bottom = bulletPos.bottom;

    let verticalMatch;
    if (
      (div2Top > div1Top && div2Top < div1Bottom) ||
      (div2Bottom > div1Top && div2Bottom < div1Bottom)
    ) {
      verticalMatch = true;
    } else {
      verticalMatch = false;
    }

    let horizontalMatch;
    if (
      (div2Right > div1Left && div2Right < div1Right) ||
      (div2Left < div1Right && div2Left > div1Left)
    ) {
      horizontalMatch = true;
    } else {
      horizontalMatch = false;
    }

    if (horizontalMatch && verticalMatch) {
      //   let intersect = true;
      console.log("kolizja!!! Juhu");
      alien.alienHTML.remove();
      aliensArr.splice(idx, 1);
    }
  });
};
