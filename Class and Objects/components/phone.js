/* Creates a new object class for phone
   Create an object constructor defining the parameters
   Create object functions
   Created by: Anwille Catindig 
*/

class Phone {
  constructor(
    brand,
    color,
    os,
    dateReleased,
    dateAcquired,
    processor,
    RAM,
    HDD,
    camNum,
    camMP,
    image
  ) {
    this.brand = brand;
    this.color = color;
    this.os = os;
    this.dateReleased = dateReleased;
    this.dateAcquired = dateAcquired;
    this.specs = {
      processor: processor,
      RAM: RAM,
      HDD: HDD,
      cam: {
        camNum: camNum,
        camMP: camMP,
      },
    };
    this.image = image;
  }
  //Creates methods
  daysBoughtSinceRelease() {
    let released = new Date(this.dateReleased);
    let acquired = new Date(this.dateAcquired);
    let daysBoughtSinceRelease = Math.floor(
      (acquired - released) / (1000 * 3600 * 24)
    );
    return daysBoughtSinceRelease;
  }
}

export default Phone;
