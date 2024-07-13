// - Dot ( . ) vs Bracket ( [] ) Notation.

// var obj = {
//         fname : "Raj",
//         lname : "Shah",
//     Age : 12,
//     Gender : "Male",
//     key : "sdrt"
// };

// Loop ??
// basic for  loop   index ?       ===>     not poosible
// for in loop  no index      100000%    
// for of loop  with index       ===>     not poosible
// foreach      only workable for Array  ===>     not poosible
// while      loop   index ?       ===>     not poosible  
// do-while   loop   index ?       ===>     not poosible

// console.log(obj.fname);
// console.log(obj["lname"]);


// - Iterate objects.

// for (const key in obj) {
//     // console.log(key,obj.key);
//     console.log(key,obj[key]);
// }

// var obj = {
//     "first name" : "Raj",
//     lname : "Shah",
//     true : 12,
//     Gender : "Male"
// };

// console.log(obj."first name"); // invalid
// console.log(obj["first name"]);  //Valid

// console.log(typeof obj.lname);

// for (const key in obj) {
//     console.log(key,typeof key);
// }

//////////////////////////////////////
// - Computed properties.     []
// var value1 = "abc@gmail.com";
// var value2 = 123456;

// var key1 = "email";
// var key2 = "password";

// var obj = {};

// // {
// //     email : "abc@gmail.com",
// //     password : 123456
// // }



// obj[key1] = value1;


// console.log(obj);

///////////////////////////////

// 1. **Dot Notation vs Bracket Notation:**
//    - Write a function that accepts an object and a property name as arguments. Implement the function to retrieve the value of the property using both dot notation and bracket notation.
   
// 2. **Iterate Over Object Properties:**
//    - Create an object with several properties (e.g., name, age, city). Write a function that iterates over the properties of the object and prints each property and its value.
   
// 3. **Computed Properties:**
//    - Write a function that creates an object dynamically based on user input. Prompt the user to enter key-value pairs until they indicate they are done. Use these inputs to create an object with computed property names.
   
// 5. **Manipulating Object Properties:**
//    - Implement a function that takes an object and a key as parameters. Check if the object has a property with that key. If it does, remove the property; if not, add the key with a default value to the object.

















// 4. **Nested Objects and Iteration:**
//    - Create an object that contains other nested objects. Write a function that iterates through all nested levels and prints out the keys and values at each level.
   