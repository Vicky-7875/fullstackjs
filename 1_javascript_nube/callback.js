// cenario

/**
 * 1. Register
 *
 * 2.send welcome email
 *
 * 3.login
 *
 * 4.get user Data
 *
 * 5.display user Data
 *
 */

// synchornous js code as below

// function waitFor3Sec() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

// function register() {
//   waitFor3Sec();
//   console.log("register end");
// }

// function sendWelcomeEmail() {
//   waitFor3Sec();
//   console.log("send Welcome email end");
// }

// function login() {
//   waitFor3Sec();
//   console.log("login end");
// }

// function getUserData() {
//   waitFor3Sec();
//   console.log("get User Data end");
// }

// function displayUserData() {
//   console.log("display User Data end");
// }

// register();
// sendWelcomeEmail();
// login();
// getUserData();
// displayUserData();

// console.info("other application work");

//asynchornous code as belwow


// function register(callback) {
//   setTimeout(() => {
//     console.log("register end");
//     callback();
//   }, 4000);
// }

// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("send Welcome email end");
//     callback();
//   }, 3000);
// }

// function login(callback) {
//   setTimeout(() => {
//     console.log("login end");
//     callback();
//   }, 5000);
// }

// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("get User Data end");
//     callback();
//   }, 6000);
// }

// function displayUserData() {
//   setTimeout(() => {
//     console.log("display User Data end");
//   }, 1000);
// }


// //callback hell(nesting function) --------promises  use for  overcome the problem of callback hell
// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });
// console.info("other application work");
