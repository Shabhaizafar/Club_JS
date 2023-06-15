// Objects in JavaScript
// pair of Keys and Values    property
///////////////////////////
// ● Intro to objects
// var myObj = {
//     fName : "Jay",
//     lName:"Rawal"
// };


// //Dot Notation   '.'
// myObj.Age = 12;
// console.log(myObj.fName);


// //Bracket Notation []
// console.log(myObj['fName']);
// myObj["Gender"] = "Male";
// console.log(myObj);
// console.log(typeof myObj);
////////////////////////////
// Vehicle  Object
// Vehicle.name = "Car";
// Vehicle.make = "Honda";
// Vehicle.model = "Civic";
// Vehicle.color = "Black";
// Vehicle.price = "200000";


//    dot Notation 
// Vehicle.year = "2016";
// Vehicle.engine = "Civic Engine";

// Bracket Notation
// Vehicle.gear = "4";
// Vehicle.Fuel = "";

///////////////////
// ● Dot vs Bracket Notation
// var myObj = {
//     'First Name' : "Jay",
//     lName:"Rawal"
// };
// console.log(myObj);
// console.log(myObj["First Name"]);
// console.log(myObj.First Name);

/////////////////////////
// [1,2,3]
// // ● Iterate objects
// var myObj = {
//     fName : "Jay",
//     lName:"Rawal"
// };
// for (let index = 0; index < array.length; index++) {
    
// }
// console.log(myObj);
// for (const Values of myObj) {
//     console.log(Values);
// }
// myObj.forEach(element => {
//     console.log(element);
// });

// for (const key in myObj) {
    // console.log(key,myObj.key);
    // console.log(key,":",myObj[key]);
// }
////////////////////////////////////
// ● Computed properties //   []
// var Key1 = "Email";
// var Key2 = "Password";
// var Value1 ="asd@gmail.com";
// var Value2 =123456;

// // var myObj={};
// // myObj.Key1=Value1;
// // console.log(myObj);
// var myObj={};
// myObj[Key1]=Value1;
// console.log(myObj);
// {Email : "asd@gmail.com",Password : 12345}
/////////////////////////////
// ● Spread operator in objects (...)
// var myObj1 = {
//     fName : "Jay",
//     lName : "shah"
// };
// var myObj2 = myObj1;
// console.log(myObj1);
// console.log(myObj2);

// myObj2.Age = 13;
// console.log(myObj1);
// console.log(myObj2);

// var myObj2 = {...myObj1};
// console.log(myObj1);
// console.log(myObj2);



//////////////////////////////////////
// ● Object Destructuring
// ● Objects inside Array
// ● Nested Destructuring

/