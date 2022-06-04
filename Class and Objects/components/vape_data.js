import Vape from "./vape.js";

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
  "../assets_other/images/uwell_caliburn_black_1604833997_f0b649c7.jpg",
  "Caliburn Uwell A1"
);

const oxvaVape = new Vape(
  "Oxva",
  "Hybrid",
  "Mint Green",
  true,
  false,
  "Cartridge or Tank",
  3.0,
  80,
  true,
  18,
  60,
  40,
  "Free Base",
  true,
  "July 4, 2022 07:00:00 PST",
  "../assets_other/images/11_01.webp",
  "OXVA Origin 2"
);

// Adds the vape objects into array
const vapeObjectArray = [caliburnPod, oxvaVape];

// Export the array to be used in other files
export default vapeObjectArray;
