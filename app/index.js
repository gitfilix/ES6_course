// ES 6 new concepts
// methods and modules

let values = [20, 30, 40];

// standalone function double
// let double = (n) => {
//   return n*2;
// }

let doubled = values.map(n => {
  return n*2;
});



console.log('doubled values are: ', doubled);
