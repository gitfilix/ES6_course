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


// ES 2016 geilerscheiss
// a1: 2hoch5:
//old: Math.power(2, 5);
let a1 = 2 ** 5;
console.log("a1:", a1);

// is "string" part of ?
let b1 = "wonderfull".includes("wonder");
console.log("is wonder in wonderfull? ",b1);

let b2 = "wonderfull".includes("butter");
console.log("is butter in wonderfull? ",b2);

// same with arrays:
let array1 = [2, 3, 4, 5, 6, 7].includes(7);
console.log("is 7 in array1? ", array1);


// ascnc functions
async function async_one(){
    return "async1: simple one";
}

// async_one().then(response => console.log(response));


async function async_two(){
    //throw new Error("Issue with async!");
    return "ascync2: two";
}

async_two().catch(error => console.log(error));

// async_three
async function async_three(){
    const one = await async_one();
    console.log(one);
    const two = await async_two();
    console.log(two);
}

async_three();


// awaiting all:
async function async_four(){
    const [res_one, res_two] = await Promise.all(
        [async_one(), async_two()]
    )
    console.log("async 4: results of one & two:", res_one, res_two);
}

async_four();
