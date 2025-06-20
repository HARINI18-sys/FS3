let jsObject = {
  "name": "Harini",
  "age": 19
};

let stringJSON = JSON.stringify(jsObject); // Convert object to JSON string
console.log(stringJSON);                   // Output: {"name":"Harini","age":19}
console.log(typeof stringJSON);            // Output: string

let normalJSON = JSON.parse(stringJSON);   // Convert JSON string back to object
console.log(normalJSON);                   // Output: { name: 'Harini', age: 19 }
console.log(typeof normalJSON);            // Output: object

localStorage.setItem("username", "varna");

let item = localStorage.getItem("username");
console.log(item); 


localStorage.removeItem("username");
