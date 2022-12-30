/**NPM Module */

// const cliColor = require("cli-color");
// console.log(cliColor.green("hello nodejs"));

/**Local module */
// const register = require('./auth');
// register('vivek');

// const {register,login} = require('./auth.js');
// register('vivek')
// login('vivek')

// const auth= require('./auth.js');
// auth.register('vivek')
// auth.login('vivek')

/**Core module */
// -----------------------------------------------------------------------------------------
// 1.path module
// const path = require("path");

//dirname         //--current folder
// console.log('Folder name:-',path.dirname(__filename));

//filename
// console.log('fileName name:-',path.basename(__filename));

//extension name
// console.log('ext name:-',path.extname(__filename));

//parse name
// console.log('parse:-',path.parse(__filename)); //return object all above

//join
// console.log('Join:-',path.join(__dirname,'order','app.js'));
// -----------------------------------------------------------------------------------------

// 2.File system (FS module)

// const fs = require("fs");
// const path = require("path");

//make a directory
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     console.log(err);
//     // console.log("someting went wrong", err);
//     return;
//   }
//   console.log("folderr created------");
// });

//create a file--------------------------------------------
// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Hello vivek node \n",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     fs.appendFile(
//       path.join(__dirname, "test", "test.txt"),
//       "more data",
//       (err) => {
//         if (err) throw err;
//         console.log('data added')
//       }
//     );
//     console.log("file created");
//   }
// );

//read file------------------------------------------

// fs.readFile(path.join(__dirname, "test", "test.txt"), (err, data) => {
//   if (err) throw err;
//   const content = Buffer.from(data);
//   console.log(content.toString());
// });

//other way --using utf-8
// fs.readFile(path.join(__dirname, "test", "test.txt"), "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// 3.OS module----------------------------------

// const os = require("os");

// console.log('type ',os.type()) //windows NT
// console.log('platform ',os.platform()) //win 32
// console.log('cpu ',os.arch()) // x64
// console.log('cpu details',os.cpus()) // x64
// console.log('free memory :- ',os.freemem()) // x64
// console.log('total memory :- ',os.totalmem()) // x64
// console.log('Uptime start time :- ',os.uptime()) // x64

// 4.Events module  --important

// const Emitter = require("events");

// // const myEmitter = new Emitter();
// //listerner with someName
// // myEmitter.on("someName", (data) => {
// //   console.log(data);
// // });
// // myEmitter.emit("someName",{
// //     name:'vivek'
// // });

// class Auth extends Emitter {
//   register(username) {
//     console.log(username, "registered successfully...........");
//     this.emit("registered", username);
//   }
// }

// const auth = new Auth(); //creat a object to use class

// // listen
// //verify email
// auth.on("registered", (data) => {
//   console.log("sending email to", data);
// });

// auth.on("registered", (data) => {
//   console.log("sending welcome email to", data);
// });



// auth.register("vivek");


//5.http module-------very important 




