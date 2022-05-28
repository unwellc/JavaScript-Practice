/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

//Create and Define Vape object based from Vape class

import Vape from "./vape.js";

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

console.log("old juice: ", caliburnPod.juice.mg);
caliburnPod.juiceContents(30);
console.log("new juice: ", caliburnPod.juice.mg);

console.log("battery before vape usage: ", caliburnPod.HasBattery);
caliburnPod.canVape(false);
console.log("battery after usage: ", caliburnPod.HasBattery);
