// for in loop use in object 
const person = {fname: 'shanto', lname: "roy", age: 25};
for(let x in person){
  // get here property
  console.log(x);
  // x variable ar value ka dorta hola array syntax use korta hoba
  console.log(person[x]);
}


// Do not use for in over an Array if the index order is important.