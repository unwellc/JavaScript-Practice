/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

//Create and Define Vape and Phone object based from Vape and Phone class

import Vape from "./vape.js";
import Phone from "./phone.js";

const caliburnPod = new Vape(
  "Caliburn",
  "Pod",
  "Gun Metal",
  false,
  true,
  "Cartridge",
  0.9,
  15,
  true,
  24,
  60,
  40,
  "Salt Nic",
  true,
  "May 1, 2022 15:00:00 PST",
  "../assets_other/images/uwell_caliburn_black_1604833997_f0b649c7.jpg"
);

console.log("Vape", caliburnPod);
console.log("Date acquired:", caliburnPod.dateAcquired);
console.log("Days since acquired: ", caliburnPod.vapeAge());

console.log("old juice: ", caliburnPod.juice.mg);
caliburnPod.juiceContents(30);
console.log("new juice: ", caliburnPod.juice.mg);

console.log("battery before vape usage: ", caliburnPod.HasBattery);
caliburnPod.canVape(false);
console.log("battery after usage: ", caliburnPod.HasBattery);

const iPhone13ProMax = new Phone(
  "iPhone",
  "Blue",
  "iOS",
  "September 12, 2022",
  "December 19, 2022",
  "A15",
  6,
  256,
  3,
  12
);

console.log("Phone: ", iPhone13ProMax);
console.log(
  "How many days since you bought it from the release date: ",
  iPhone13ProMax.daysBoughtSinceRelease()
);

const content = `
    <figure class="vape_image">
      <img src=${caliburnPod.image} alt="" />
    </figure>
    <h1 class="vape_brand">${caliburnPod.brand}</h1>
    <ul class="vape_features">
      <li class="vapeprop vape_type">Type: <span> ${
        caliburnPod.vapeType
      }</span></li>
      <li class="vapeprop vape_color">Vape Color: <span> ${
        caliburnPod.color
      }</span></li>
      <li class="vapeprop vape_tank">Tank: <span>${caliburnPod.tank}</span></li>
      <li class="vapeprop vape_cartridge_ohms">Ohms: <span> ${
        caliburnPod.cartridge.ohms
      } ohms</span></li>
      <li class="vapeprop vape_cartridge_wattage">Wattage: <span> ${
        caliburnPod.cartridge.wattage
      } watts</span></li>
      <li class="vapeprop vape_juice_type">Juice Type: <span> ${
        caliburnPod.juice.juiceType
      }</span></li>
      <li class="vapeprop vape_juice_mg">Nicotine: <span> ${
        caliburnPod.juice.mg
      } mg</span></li>
      <li class="vape_age">Days since Acquired: <span> ${caliburnPod.vapeAge()} days old</span></li>
    </ul>
  </article>
`;

//creates a variable targeting the existing element from HTML
const main = document.querySelector(".maincontent");

//creates a new element
const newArticle = document.createElement("article");

//add classes and attributes to article element
newArticle.classList.add("vape");
newArticle.setAttribute("id", "pod");

//adds the content template literal to the newArticle element
newArticle.innerHTML = content;

/*adds the newArticle const containing the article element to the main
element*/
main.append(newArticle);
