// console.log("hello from app.js");
// alert("hrlloo");

//Object overview

// collection of key value pair

// const laptop = {
//   model: "white",
//   price: 2.2,
// };

// console.log(laptop);
// console.log(laptop.model);

//variables
// var,let,const
//start with
// 1) Const
// 2)let
// 3)Var  never use

// let languageName;//camalCase

// language ='javascript';
// console.log(language)

// const secondsInMinute = 60;
// secondsInMinute = 32; //not possible  /// Uncaught TypeError: Assignment to constant variable.
// console.log(secondsInMinute);

//function scope
// var language='js'

//block scope (let,const)
// if(true){
//     let age =25;
// }

// console.log(age)//////////Uncaught ReferenceError: age is not defined

/**Hoisting */

// console.log(greeting); //undefined
// var greeting='hello';

// // //not possbile hoisting using let
// console.log(greeting); // Uncaught ReferenceError: Cannot access 'greeting' before initialization
// let greeting='hello';////////////Temporal dead zone(TDM)

// //not possbile hoisting using const
// console.log(greeting); // Uncaught ReferenceError: Cannot access 'greeting' before initialization
// const greeting='hello';

/**data type */

// let age=25;
// age='twenty fne'
// console.log(age)

/**Operatoos
 *
 */
// 1.Assignment Operators (=)
// let x = 10;
// let y = 20;
// x += y;//compound operator;  x = x+y
// x -= y;//compound operator;  x = x-y
// x *= y;//compound operator;  x = x*y
// x /= y;//compound operator;  x = x/y

// console.log(y);

//
// ----------------------------------------------
/**
 * / Array
 */
// const actors = [
//   { name: "abc1", payment: 100 },
//   { name: "abc2", payment: 150 },
//   { name: "abc3", payment: 180 },
// ];

//*****************************************************for
// for (let i = 0; i < actors.length; i++) {
//   console.log(actors[i]);
// //   console.log(actors[i].payment - 10);
// }

//***************************************foreach
// actors.forEach((x,i) => {
//   console.log(x.payment-10,i);
// });

//***********************************for of
// for(let actor of actors){
//     actor.payment =actor.payment-10
// }
// console.log(actors)

//**************************filter

// const students = [
//   {
//     namr: "1abc",
//     marks: 25,
//   },
//   {
//     namr: "2abc",
//     marks: 75,
//   },
//   {
//     namr: "3abc",
//     marks: 89,
//   },
//   {
//     namr: "4abc",
//     marks: 21,
//   },
// ];
// //return new array
// // const failed = students.filter((std) => {
//     //     return std.marks <45
//     // //   if (std.marks < 45) {
// // //     return true;
// // //   }
// // //   return false;
// // });
// // make in one line / make short
// const failed = students.filter((std) => std.marks<45)

// console.log(failed);
// console.log(students);

//***********************************Map

// const users = [
//   { fname: "vaivek", lname: "Tondare" },
//   { fname: "sagar", lname: "menghare" },
// ];

// const finalUsers = users.map((user) => {
//   return {
//     fullName: `${user.fname} ${user.lname}`,
//   };
// });

// console.log(finalUsers);

//*****************************************Reduce

// const movies = [
//   { name: "interstellar", budget: 100 },
//   { name: "spiderman", budget: 150 },
//   { name: "ironman", budget: 200 },
// ];
// // let total = 0;
// // movies.forEach((movie) => (total += movie.budget));

// const total = movies.reduce((acc, movie) => {
//   return (acc += movie.budget);
// }, 0);

// console.log("total", total);

//********************************************Indexof
//retrun   index number else  -1 retrun

// const admin = [2, 1, 5];
// const user = {
//   name: "xyz",
//   id: 6,
// };
// // const isAdmin =
// //   admin.indexOf(user.id) > -1 ? `Admin is present` : "admin not present";

// console.log(admin.includes(user.id));  //true /false

//************************************************ */ Find

// const users = [
//   { name: "xyz", id: 1 },
//   { name: "abc", id: 2 },
//   { name: "pqr", id: 3 },
// ];

// const user = users.find((usr) => usr.name === 'xyzs');
// console.log(user);

//************************************************ */ Sort

//sort change original arrays make it new

const names = ["vivek", "sagar", "roiht", "akshay", "zebra", "avya"];
// names.sort()
// console.log(names);

//************************************************ */ splice
//splice change original arrays make it new
// names.splice(2,2)
// console.log(names)

// ======================================================================================

