/* Class declaration: class Name {}
 Class expression:  const Name = class {} */

//Creates class vape for vape object
class Vape {
  constructor(
    // Defines parameters:
    brand,
    vapeType,
    color,
    battIsRemovable,
    mouthSensor,
    tank,
    ohms,
    wattage,
    replaceable,
    mg,
    vg,
    pg,
    juiceType,
    HasBattery,
    dateAcquired,
    image,
    caption
  ) {
    // Define properties:
    this.brand = brand;
    this.vapeType = vapeType;
    this.color = color;
    this.battIsRemovable = battIsRemovable;
    this.mouthSensor = mouthSensor;
    this.tank = tank;
    this.cartridge = {
      ohms: ohms,
      wattage: wattage,
      replaceable: replaceable,
    };
    this.juice = {
      mg: mg,
      vg: vg,
      pg: pg,
      juiceType: juiceType,
    };
    this.HasBattery = HasBattery;
    this.dateAcquired = dateAcquired;
    this.image = image;
    this.caption = caption;
  }
  // Add methods like normal functions:
  canVape(BatteryStatus) {
    this.HasBattery = BatteryStatus;
  }
  juiceContents(newJuiceMg) {
    this.juice.mg = newJuiceMg;
  }
  vapeAge() {
    let now = new Date(); //defines the now property using the built-in Date object
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Vape;
