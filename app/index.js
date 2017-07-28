// ES 6 new concepts
// Asynchronous programming

// promises exist in three states: pending, fulfilled, and rejected
// promises
let p = new Promise((resolve, reject) => {
  // resolve('Resolved promise data');
  reject('Rejected promise data');
});

//access promise by consuming the promise and
p.then(response =>
  console.log(response)
)
// catch error
.catch(error =>
  console.log(error)
);
//
