//
import React from 'react';
import ReactDom from 'react-dom';

// the SET: primitive values or objects
let a = new Set();

a.add(5);
a.add(3354);
a.add("Yeaaapiiie: a set can contain strings");
// objects
a.add({x: 50, y: 431, z: "not determiated", k: 242, copyright: "by Filix"})


console.log("Set a: ", a);
console.log("Set size:", a.size);
console.log("Set has(5):", a.has(5));


let numbers = [5, 7, 7, 32, 1, 19];
let numSet = new Set(numbers);
console.log("numbers array in a Set", numSet);

// enhanced ForLoop
for (let element of numSet.values()) {
    console.log("element:", element);
}



let characters = "fdadfajlkkfdajjlfjaljfi4tvblcnnfakfjatsgfs";
let characters_arr = characters.split("");
let characters_set = new Set(characters_arr);


console.log("characters length:", characters.length);
// UNIQUE values of characters in the new Set
console.log("characters_set:", characters_set);
