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

/* creates a constant function expression for the navigation menu
using arrow function */
const newNav = () => {
  //creates a nav element
  const headerNav = document.createElement("nav");
  //add a class name for the nav element to reference the css script
  headerNav.classList.add("vape_nav");
  headerNav.setAttribute("id", "simplenav");
  //add HTML contents to the nav element
  headerNav.innerHTML = `
    <ul class="simpleVapeNav">
    <li><a class="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
    </ul>
    `;
  return headerNav;
};

//create a new function for figure element
const newImage = (img) => {
  const vapeImage = document.createElement("figure");
  vapeImage.classList.add("vape_image");
  vapeImage.innerHTML = `
  <img src=${img} alt="" />
  <figcaption><center> Caliburn Uwell A1 </center></figcaption>
  </figure>`;
  return vapeImage;
};

/* create a constant function expression for printing vape contents
using arrow function */
const newVape = (currentVape) => {
  //creates a new element for article
  const newArticle = document.createElement("article");
  //add classes and attributes to article element
  newArticle.classList.add("vape");
  newArticle.setAttribute("id", "pod");
  //appends the figure element to the article element
  newArticle.append(newImage(currentVape.image));
  //adds other HTML contents below using template literals
  newArticle.innerHTML += `
    <h1 class="vape_brand">${currentVape.brand}</h1>
    <ul class="vape_features">
      <li class="vapeprop vape_type">Type: <span> ${
        currentVape.vapeType
      }</span></li>
      <li class="vapeprop vape_color">Vape Color: <span> ${
        currentVape.color
      }</span></li>
      <li class="vapeprop vape_tank">Tank: <span>${currentVape.tank}</span></li>
      <li class="vapeprop vape_cartridge_ohms">Ohms: <span> ${
        currentVape.cartridge.ohms
      } ohms</span></li>
      <li class="vapeprop vape_cartridge_wattage">Wattage: <span> ${
        currentVape.cartridge.wattage
      } watts</span></li>
      <li class="vapeprop vape_juice_type">Juice Type: <span> ${
        currentVape.juice.juiceType
      }</span></li>
      <li class="vapeprop vape_juice_mg">Nicotine: <span> ${
        currentVape.juice.mg
      } mg</span></li>
      <li class="vape_age">Days since Acquired: <span> ${currentVape.vapeAge()} days old</span></li>
      <li class="vape_age">Battery Status: <span> ${
        currentVape.HasBattery ? "Has Battery" : "Low Battery"
      }</span></li>
    </ul>
`;
  return newArticle;
};

//creates variables targeting the main and header elements from HTML
const main = document.querySelector(".maincontent");
const header = document.querySelector(".siteheader");

function Append(vape, nav) {
  /*invokes the main append function containing the newVape method
with the object as a parameter*/
  main.append(vape(caliburnPod));

  /* invoke the newNav function as a parameter of the const header
append function */
  header.append(nav());
}

Append(newVape, newNav);
