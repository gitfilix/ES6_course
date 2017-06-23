// ES 6 new concepts
// strings helper methods

let b = "wooo" + "oo".repeat(50) + "hooo !";
console.log(b);

// with template strings
let c = `"woo${"oo".repeat(10)} !" `;
console.log(c);


//searching in strings

// is string beginning with butter?
console.log(
  "butterfly".startsWith("butter")
);
// is string beginning with fly?
console.log(
  "butterfly".startsWith("fly")
);

// is string beginning with fly?
console.log(
  "butterfly".endsWith("fly")
);

// is string fly within?
console.log(
  "butterfly".includes("fly")
);

// is string "tt" within?
console.log(
  "butterfly".includes("tt")
);

// is string "" within?
console.log(
  "butterfly".includes("caterpillar")
);
