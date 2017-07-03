// ES 6 new concepts
// Classes in JS

// realate to each other throug inheritance

class Calculator{
    static multiply(a, b){
      return a*b;
    }

    static add(a, b){
      return a+b;
    }
}


let a = Calculator.add(5, 7);
console.log(a);
