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
// ● For loop
// ● use const for creating arrays
// ● While loop in array
// ● For of loop
// ● For in loop
// ● Array destructuring