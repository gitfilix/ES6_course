// ES 6 new concepts
// Asynchronous programming

// promises exist in three states: pending, fulfilled, and rejected
// promises
const root = 'http://jsonplaceholder.typicode.com/posts/1';

const googlebooks = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

// fetch root const and use and apply the json method directly
fetch(root, { method: "GET"})
    .then(response => response.json())
    .then(json => console.log(json));


fetch(googlebooks, {method: "GET"})
    .then(response => response.json()).then(json => console.log('googlebooks:', json));
