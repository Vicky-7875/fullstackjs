// console.log('hello') //synchronus code
// console.log('js') //synchronus code

// function greeting(){
//     console.log('3 sec timer')
// }
//async method
// setTimeout(greeting, 3000);

// //async method
// setTimeout(function () {
//     console.log('3 sec timer')
// }, 3000);

// // event loop
// http://latentflip.com/loupe
// 1) call stack
// 2) web Apis-------for async code
// 3)callback queue --for async code

// console.log("start");

//wait for 7 sec in call stack
// function waitfor7sec() {
//   let ms = 7000 + new Date().getTime();
//   while (new Date() < ms) {}
// }

// then it will print after 7 sec
// setTimeout(function () {
//   console.log("ima from timeout");
// }, 2000);

// waitfor7sec();
