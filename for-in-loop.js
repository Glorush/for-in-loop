// for in loop use in object 
const person = {fname: 'shanto', lname: "roy", age: 25};
for(let x in person){
  console.log(x);
  // x variable ar value ka dorta hola array syntax use korta hoba
  console.log(person[x]);
}