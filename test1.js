
document.getElementById('example').innerHTML = 'Javascripts innerHTML rulez!';


var dog ={
  name: 'buddy',
  breed: 'Golder Retriever',
  weight: 50,
  bark:  () =>  console.log("woooof-woof!")
};

console.log(dog["breed"]);

dog.bark();
