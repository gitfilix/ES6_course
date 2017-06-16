// ES 6 new concepts
// const is read-only
const emails =['frodo@email.com', 'samwise@email.com', 'merry@email.com'];

emails.push('pipi@email.com');

console.log(emails);

const limit = 200;
// block scoping limit in a block
{
  const limit= 20;
  console.log('backstage limit: ', limit);
}

console.log('overall venue limit', limit);
