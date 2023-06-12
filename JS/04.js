// "use strict";
// ● Null, undefined, BigInt, typeof
// var n1 = null; //object
// var n2 = undefined;//undefined
// console.log(n1);
// console.log(n2);
// console.log(typeof n1);
// console.log(typeof n2);

//number 1   1.5  
//

// var n3 = 12345678901234567890n;
// console.log(n3);
// console.log(typeof n3);

// var n4 = 12n;
// // var s1 = "zafar";
// var n5 = 13;
// console.log(Number(n4+BigInt(n5)));
///////////////////////////////////
// ● Booleans and Comparison Operator
// Boolean : 0  X    false
//           1  Y    true
// var n6 = 12;
// var n7= 9;
// console.log(n6<n7); //false
// console.log(n6>n7); //true

// var b1 = true;
// var b2 = false;
// console.log(b1);
// console.log(b2);

// Comparison Operator
// >,<,<=,>=,    (==,!=)      (===,!==)
// var s1 = 12; //number
// var s2 = "12";//string
// console.log(s2);
// console.log(s1==s2);//true //Compare only value
// console.log(s1===s2);//false //Compare  value with data type

///////////////////////////
// ● Truthy and Falsy Values
// Truthy 
// true,1 , 5, "Zafar",[1],-1234

// // Falsy Value : 
// false , 0 ,"",null,undefined,NaN,[]
// var n1;
// console.log(n1);
/////////////////////////////
// ● If else statement

//Syntax :
// if(condition){
//     statement1;
// }
// else{
//     statement2;
// }
// var Age = prompt("Enter the Value of Age : ");//string
// var Age = +prompt("Enter the Value of Age : ");//number
// var Age = Number(prompt("Enter the Value of Age : "));//number
// console.log(Age);
// console.log(typeof Age);
// if(Age===18)
// {
//    console.log("You are Eligible");
// }
// else{
//     console.log("You are not Eligible");
// }
///////////////////////
// ● Ternary Operator

// Syntax : 

// (condition) ? statement1 : statemet2;     

// var Age = +prompt("Enter the Value of Age : ");//number
// var Product;

// if(Age<=5)
// {
//     Product = "Milk";
// }
// else{
//     Product = "Coffee";
// }
// console.log(Product);
// var Age = +prompt("Enter the Value of Age : ");//number
// var Product = (Age<=5) ? "Milk" :((Age<=18)? "Tea":"coffee");
// console.log(Product);


// a<=5  milk        <=18  tea       coffee
//////////////////////////////////
// ●

///////////////////
// ● Nested if else
// var Age = +prompt("Enter the Value of Age : ");//number
// var Product;
// if(Age<=5)
// {
//     Product = "Milk";
// }
// else{
//     if(Age<=18)
//     {
//         Product = "Tea";
//     }
//     else{
//         Product = "Coffee";
//     }
// }
// console.log(Product);
/////////////////////////////
// ● If elseif else      && || operator

var n1 = +prompt("Enter the Value of n1 : ");//number
var n2 = +prompt("Enter the Value of n2 : ");//number
var n3 = +prompt("Enter the Value of n3 : ");//number
console.log(n1);
console.log(n2);
console.log(n3);
// if(n1>n2)
// {
//     console.log("N1 is Grater");
// }
// else{
//     if(n1==n2)
//     {
//         console.log("Both are same");      
//     }
//     else{
//         console.log("N2 is Grater");
//     }
// }

// if(n1>n2)
// {
//     console.log("N1 is Grater");
// }
// else if(n1==n2)
// {
//     console.log("Both are same");      
// }
// else{
//         console.log("N2 is Grater");
// }
// -------------------------------For Three Number

// if(n1>n2)
// {
//     if(n1>n3)
//     {
//         console.log("N1 is Grater");
//     }
//     else if(n1==n3)
//     {
//         console.log("N1 and N3 are same/Grater");
//     }
//     else{
//         console.log("N3 is Grater");
//     }
// }
// else if(n1==n2)
// {
//     if(n1>n3)
//     {
//         console.log("N1 and N2 are same/Grater");
//     }
//     else if(n1==n3)
//     {
//         console.log("All are Same");
//     }
//     else{
//         console.log("N3 is Grater");
//     }
// }
// else{
//     if(n2>n3)
//     {
//         console.log("N2 is Grater");
//     }
//     else if(n2==n3)
//     {
//         console.log("N2 and N3 are same/Grater");
//     }
//     else{
//         console.log("N3 is Grater");
//     }
// }
// if(n1>n2 && n1>n3){
//     console.log("N1 is Grater");
// }
// else if(n2>n1 && n2>n3){
//     console.log("N2 is Grater");
// }
// else if(n3>n1 && n3>n2){
//     console.log("N3 is Grater");
// }
// else if(n1==n2 && n1>n3)
// {
//     console.log("N1 and N2 are same/Grater");
// }
// else if(n1==n3 && n1>n2)
// {
//     console.log("N1 and N3 are same/Grater");
// }
// else if(n3==n2 && n2>n1)
// {
//     console.log("N2 and N3 are same/Grater");
// }
// else{
//     console.log("All are Same");
// }
///////////////////////////



