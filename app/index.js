// ES 6 new concepts
// Classes in JS

// realate to each other throug inheritance
import Animal from './Animal';


// inheritance from external class
class Lion extends Animal {
  constructor(name, height, color){
    // to use this keyword
    super(name, height);
    this.color = color;

  }
  helloLion(){
    console.log(`Hi! I am ${this.name} from Pride Rock!`);
  }
}

let son = new Lion("Simba" , 2, "golden");
son.helloLion();
