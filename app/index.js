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
