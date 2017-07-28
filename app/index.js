// ES 6 new concepts
// Closures - private

let call = () => {
  // private
  let secret = 'schawaskribt ES-6 rocks !';
  // reveal the private to outside
  let reveal = () => {
    console.log(secret);
  }
  // reveal can be accessed from outside
  return reveal;
}

// unveil calls call function
let unveil = call();
// call unveil
unveil();



//function factory
const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);

let h = add_ness("happy");
console.log(h);

// factory 2
const product = (x) => {
  return y => {
    return y * x
  }
}

// factory 2 shortened
const product2 = x => y => y * x;

let multiple5 = product(5);
let double = product(2);

// let multiple5 = product2(5);
// let double = product2(2);

console.log("multiple5(3): ",multiple5(3));
console.log("double(9): ",double(9));
