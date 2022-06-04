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

import Phone from "./components/phone.js";
import vapeObjectArray from "./components/vape_data.js";

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
const newImage = (img, caption) => {
  const vapeImage = document.createElement("figure");
  vapeImage.classList.add("vape_image");
  vapeImage.innerHTML = `
  <img src=${img} alt="" />
  <figcaption><center> ${caption} </center></figcaption>
  </figure>`;
  return vapeImage;
};

/* maps the vapeObjectArray and output the contents to newVape constant.
The currentVape parameters represents the array element so it will contain
one vape object at a time while mapping throughout the array*/
const newVape = vapeObjectArray.map((currentVape) => {
  //creates a new element for article
  const newArticle = document.createElement("article");
  //add classes and attributes to article element
  newArticle.classList.add("vape");
  newArticle.setAttribute("id", "pod");
  //appends the figure element to the article element
  newArticle.append(newImage(currentVape.image, currentVape.caption));
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
  // returns the vape object contents in article element to the newVape array
  return newArticle;
});

//creates variables targeting the main and header elements from HTML
const main = document.querySelector(".maincontent");
const header = document.querySelector(".siteheader");

//creates a function for appending article and nav contents to HTML file
function Append(vape, nav) {
  //append the vape contents inside the main for each object found in the array
  vape.forEach((currentVape) => {
    main.append(currentVape);
  });
  /* invoke the newNav function as a parameter of the const header
append function */
  header.append(nav());
}

//calls the append function
Append(newVape, newNav);
