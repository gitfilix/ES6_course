// ES 6 new concepts
// spread operators

let a = [20, 30, 40, 50];
let b = [11, 12, ...a, 13];
console.log(b);


let namesD = ['Dana', 'Daphne', 'Duffy'];
let namesA = ['Alice', ...namesD, 'Amoranama', 'Alphamara'];

console.log(namesA);



function collect(...x){
  console.log("collect returns: ", x);
}

collect(1, 2, 3, 4, 5, 6);
