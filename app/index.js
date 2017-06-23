// ES 6 new concepts
// destructing and spread operator


function collect(...a) {
  console.log('collect is: ', a);
}

collect(3, 6, 9, 18, 28);

// destructing

let z = [4, 5, 6, 7];
// longform
// let four = s[0];
// let five = s[1];
// console.log(four, five);

// assigment
let [four, five] = z;
console.log(four, five);


let animals =["simba", "zazu", "fluffysky", "Ed"];

let [lion, birds] = animals;

console.log('lion, birds', lion, birds);

// with objects:
let king = { name: 'Mufasa', kids: 1};
// long vesion:
//let name = king.name;
//let kids = king.kids;

// short es6 version:
let {name, kids} = king;

console.log('name, kids: ', name, kids);


// complex objects

let son = {nameKid: 'Simba', NumParents: 2};
// let is block scoped
let nameKid, NumParents;
//
({ nameKid, NumParents} = son);

console.log('nameKid and NumParents:', nameKid, NumParents);
