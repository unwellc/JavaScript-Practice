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
  "pod",
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
  "May 1, 2022 15:00:00 PST"
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

const iPhone13ProMax = new Phone (
  "iPhone",
  "iOS",
  "September 12, 2022",
  "December 19, 2022",
  "A15",
  6,
  256,
  3,
  12
);

console.log ("Phone: ", iPhone13ProMax);
console.log ("How many days since you bought it from the release date: ", iPhone13ProMax.daysBoughtSinceRelease());
