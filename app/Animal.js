

// animal Classes
class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  hello(){
    console.log(`Hi! I'am ${this.name} and I am this tall: ${this.height}. I am form the Animal kingdom. `);
  }
}

export default Animal;
