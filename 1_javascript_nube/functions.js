/**Functions */

// function login(userName, password) {
//   //code
//   //logic
//   if (password) console.log(userName, " logged in successfully");
//   else console.log(userName, " your not autorized user");
// }

// login("sagar");
// login("vivek", "Vivek@123");

// function upperCase(str) {
//   return str.toUpperCase();
// }

// const res = upperCase('vivek')
// console.log(res)

// //default parameter 8*****************************
// function calculateArea(width, height=1) {
//   return width * height;
// }

// const area =calculateArea(30,20);
// console.log(area)

//Variable scpoe ************************

// const fileName = "xyz.pdf";
// function download() {

//   console.log(fileName);
// }

// download()

//function declaration and function expression **************************

//declaration
// function login(){

// }

//expression
// const login = function (a,b) {
//   console.log("logged in");
// };
// login();

//callback ********************

// function formatText(text, formatCb) {
//   return typeof formatCb === "function" ? formatCb(text) : text.toUpperCase();
// }

// const result = formatText("hello", function (text) {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);

// // callback short cut with arrow
// function formatText(text, formatCb) {
//   return typeof formatCb === "function" ? formatCb(text) : text.toUpperCase();
// }

// const result = formatText(
//   "hello",
//   (text) => text.charAt(0).toUpperCase() + text.slice(1)
// );
// console.log(result);

//IIFE   (Immediately invoked function expression)   *******************
// (function setup() {
//   console.log("setup done");
//   // }());  //also workd
// })();

//arrow function **********************************

// const login = function () {
//   console.log("loggedIN");
// };

// console.log(login());
// const loginA = () => {
//   console.log("loggedIN");
// };
// console.log(loginA());

// const getSum = (num1, num2) => num1 + num2;
// const result = getSum(11, 2);
// console.log(result);

//good practice

//1.naming
// show,get,calc ///verb start
// 2.One funtion -one action  like format text
// 3.function name should be descriptive  not like a(),b()
