// ES 6 new concepts
// Asynchronous programming

// promises exist in three states: pending, fulfilled, and rejected
// promises
const root = 'http://jsonplaceholder.typicode.com/posts/1';

const googlebooks = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';

fetch(googlebooks, {
  method: "GET"
}).then(response => response.json())
  .then(json => console.log(json));
