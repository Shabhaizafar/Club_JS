// var Array1 = [1,2,3];
// console.log(Array1);
// var Array2 = ["item1","item2"];
// console.log(Array2);
// var Array3 = [true,false];
// console.log(Array3);

// var Array4 = [1,"item2",false,2.4,null,undefined];
// console.log(Array4);
////////////////////////////////////////
// ● Primitive vs reference data types
// primitive data types :
// Number,string,boolean  

// var n1 = 15;
// var n2 = n1;
// console.log("Value of N1 : "+n1);
// console.log("Value of N2 : "+n2);
// n1++;
// console.log("Value of N1 after Increment : "+n1);
// console.log("Value of N2 after Increment : "+n2);

// reference data types :
// Array,Object
// var Arr1 = ["item1","item2","item3"];  //address
// var Arr2 = Arr1;//
// console.log("Value of Arr1 : ", Arr1);
// console.log("Value of Arr2 : ", Arr2);
// Arr1.push("item4");
// console.log("Value of Arr1 after push : ", Arr1);
// console.log("Value of Arr2 after push : ", Arr2);

///////////////////////////////
// ● Clone array & spread operator
// var Arr1 = ["item1","item2","item3"];  
// var Arr2 = Arr1;
// console.log("Value of Arr1 : ", Arr1);
// console.log("Value of Arr2 : ", Arr2);
// Arr2.push("item4");
// console.log("Value of Arr1 after push : ", Arr1);
// console.log("Value of Arr2 after push : ", Arr2);


// 1) slice
// var Arr1 = ["item1","item2","item3"];  
// var Arr2 = Arr1.slice(0);
// console.log("Value of Arr1 : ", Arr1);
// console.log("Value of Arr2 : ", Arr2);
// Arr1.push("item5");
// Arr2.push("item4");
// console.log("Value of Arr1 after push : ", Arr1);
// console.log("Value of Arr2 after push : ", Arr2);

// 2) concat 
// var Arr1 = ["item1","item2","item3"];  
// var Arr2  = Arr1.concat("item4","item7");
// console.log("Value of Arr1 : ", Arr1);
// console.log("Value of Arr2 : ", Arr2);
// Arr1.push("item5");

// console.log("Value of Arr1 after push : ", Arr1);
// console.log("Value of Arr2 after push : ", Arr2);

// Spread Operator (...)
// var Arr1 = ["item1","item2","item3"];  
// var Arr2 = [...Arr1];
// console.log("Value of Arr1 : ", Arr1);
// console.log("Value of Arr2 : ", Arr2);
// Arr1.push("item10");
// Arr2.push("item4");
// console.log("Value of Arr1 after push : ", Arr1);
// console.log("Value of Arr2 after push : ", Arr2);
/////////////////////////////////
// ● For in loop
// var  Arr1 = ["item1","item2","item3","item4","item5"];  
// console.log(Arr1);
// // ● For loop
// for (let i = 0; i <Arr1.length; i++) {
//         console.log(`Value of Element Arr[${i}] :`,Arr1[i]);
// }
// console.log(" ");
// ● While loop in array
// let i=0;
// while (i<Arr1.length) {
//     console.log(`Value of Element Arr[${i}] :`,Arr1[i]);
//     i++;
// }
// ● For of loop
// for (const Values of Arr1) {
//     console.log(Values);
// }

// for (const index in Arr1) {
//     console.log(`Value of Element Arr[${index}] :`,Arr1[index]);
// }

// Arr1.forEach(element => {
//     console.log(element);
// });
//////////////////////////////////
// ● use const for creating arrays

// 1) var
// var Arr1 = [1,2,3];
// console.log("Using var : ",Arr1);
// Arr1.push(11);
// console.log("Using var after push : ",Arr1);
// // Arr1 = [];
// var Arr1 = [1];
// console.log("Using var : ",Arr1);

// // 2) let
// let Arr2 = [5,6,7];
// console.log("Using let : ",Arr2);
// Arr2.push(12);
// console.log("Using let after push : ",Arr2);
// // Arr2 = [];
// // let Arr2 = [2];
// console.log("Using let : ",Arr2);

// // 3) const
// const Arr3 = [4,8,9];
// console.log("Using const :",Arr3);
// Arr3.push(13);
// console.log("Using const after push : ",Arr3);
// // Arr3 = [];
// console.log("Using const :",Arr3);
//////////////////////////////////
// ● Array destructuring

// const  Arr1 = ["item1","item2","item3","item4","item5"];  
// var v1 = Arr1[0];
// var v2 = Arr1[1];
// var v3 = Arr1[2];
// console.log(v1,v2,v3);
// var [v1,,v3] = Arr1;
// console.log(v1);
// console.log(v3);
 
// const [...Arr3] = Arr1;
// console.log(Arr3);
 
// const [...Arr3] = Arr1.slice(1);
// console.log(Arr3);
 
// const [,...Arr3] = Arr1;
// console.log(Arr3);
 
// const [...Arr3] = Arr1.concat();
// console.log(Arr3);


// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php