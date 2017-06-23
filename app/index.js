// ES 6 new concepts
// methods and modules

let values = [20, 30, 40];

// standalone function double
// let double = (n) => {
//   return n*2;
// }

let doubled = values.map(n => n*2);

console.log('doubled values are: ', doubled);

// filter:

let points = [7, 115, 17, 21, 14, 5, 78, 95, 157, 71, 2];

let highScores = points.filter((n) => n > 15);

console.log('highScores: ', highScores);
