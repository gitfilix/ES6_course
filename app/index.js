// ES 6 new concepts
// Classes in JS

// realate to each other throug inheritance


// animal Classes
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  hello(){
    console.log(`Hi! I'am ${this.name} and I am so tall: ${this.height}. I am form the Animal kingdom. `);
  }
}



let king = new Animal("Mufassa", 4.5);
king.hello()
