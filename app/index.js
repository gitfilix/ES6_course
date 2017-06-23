// ES 6 new concepts
// strings helper methods with numbers

// check if number is finite
const addToCart = (item, number) => {
  return Number.isFinite(number) && Number.isSafeInteger(number);
}

// wayy to high
console.log(addToCart('shirt', Math.pow(3, 45)));

// way okay
console.log(addToCart('shirt', 53545));
