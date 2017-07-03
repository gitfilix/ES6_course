// ES 6 new concepts
// Classes in JS
// Prototypes in action

function Wizard(name, house, pet){
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => {
    return `I 'm ${this.name} from ${this.house} `;
  }
}

Wizard.prototype.pet_name;

let harry = new Wizard("Harry", "Gryffendor", "Owl");
harry.pet_name ="Hedwig";


console.log(harry);
