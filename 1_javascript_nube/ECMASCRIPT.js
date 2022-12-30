//ES6 AKA Ecmascript2015

/**
 *
 * let const
 */

// var age=12;
// let product ='prod';
// const cProduct ='prod';

// console.log(age)

// var age=20;

// const age ={
//     year:10
// }

// age.year=20;

// console.log(age)

/**
 * arrow function
 */

// function grett(){
//     console.log('good afternoon');
// }
// const addition =a => console.log(a + a);
// addition(2);

// console.log(this);

// const shop = {
//   abc: "vivek",
//   purchase: () => {
//     console.log(this);
//   },
// };
// shop.purchase();

/*
const myBtn = document.querySelector("#myBtn");

const shop = {
  price: 100,
  buy: function () {
    // const self = this;///without arrow
    myBtn.addEventListener("click", () => {
      //   console.log("I spent ", self.price); //without arrow
      console.log("I spent ", this.price); //with arrow  we can use this
    });
  },
};
shop.buy();
*/

/**Temeplate literals*/

// const firstName = "vivek";
// const lastName = "T";

// console.log(`"${firstName}" % ${lastName} %`);

/**Enhance object literals */
//old object structure
// const product = {
//   price: 100,
//   name: "mobile",
// };

//1. computed property keys
// const keyName = "name";
// const productN = {
//   [keyName]: "mobile",
//   price: 100,
// };
// console.log(productN)

//2.method defination shorthand
// old ways
// const productN = {
//   buy: function () {
//     console.log("bought");
//   },
// };

//new way
// const keyName = "name";
// const productN = {
//   buy() {
//     console.log("bought");
//   },
// };

// productN.buy()

// 3.property  shorthand

// const accessToken = "asdsadasda";
// const refreshToken = "324sdasd";
// //old way
// const user = {
//   accessToken: accessToken,
//   refreshToken: refreshToken,
// };
//new way
// const user = {
//   accessToken,
//   refreshToken,
// };

// console.log(user);

/**Destructuring   */

//object destruring-----------------------
// const user = {
//   name: "vivek",
//   age: 30,
// };
// //old ways
// // console.log(user.name);
// // console.log(user.age);

// //new ways
// const { name:fullName ,age} = user;  //fullName //alias
// console.log( fullName);

//Array destruring-----------------------

// const data = ["vivek", 20, "enginner"];
//old ways
// console.log(data[1]);

//new way
// const [name, age, profession ] = data;
// console.log(name)

//default  parameter-----------------------------

// const register = (name, pass, image='text.png') => {
//     // const img =image|| 'test.png' //classic way
//     console.log(name,pass,image);
// };
// register('vivek','secret','sdsad.pmng')

//spread ...  **********************************

// Array,object clonning

//array

// const langs = ["c", "c++", "js"];
//old ways
// const langsNew =langs;
// console.log(langsNew);

// new ways
// const newLangs = ['typescritp',...langs,'sadsadsd'];
// console.log(newLangs);

//object
// const setting = {
//   volume: 10,
//   brightness: 80,
// };

// //old ways
// // const newSetting = setting; //  by  referance  //same address
// // // console.log(newSetting ===setting);  //true

// // newSetting.volume =20;
// // console.log(setting.volume) //afftet old object

// // ..new way

// const newSetting = { ...setting, volume: 20, constrast: 50 }; //shallow copy  becoz   object inside object has same address

// console.log(newSetting);

//Rest -------------------------**************

//old ways
// const addItems = (a, b, c) => {
//   console.log(a +b + c);
// };

// addItems(4,4,4)

// //new ways
// const addItems = (...items) => {
//   const addition = items.reduce((item, newI) => {
//     return (item += newI);
//   }, 0);
//   console.log(addition);
// };

// addItems(4, 4, 4, 3, 5, 4, 6);

//for of loop-------------------------------------------
//array, string ,objects,set,map
//array
// const numbers = [2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }

//string
// const lang = "javascript";
// for (const char of lang) {
//   console.log(char);
// }

//object
// const person = {
//   name: "vivke",
//   city: "nagpur",
//   brand: "apple",
// };

// for (const [key,value] of Object.entries(person)) {
//   console.log(key,value);
// }

//*******************Promisess----------***************************************
// // const login = (cb) => {
// const login = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("login....");
//       // cb();
//       resolve()
//     }, 5200);
//   });
// };
// // login(() => {
// //   console.log("redirecting");
// // });

// login().then(() => {
//   console.log("redirecting");
// });

// //************find arrays methods */
// const users = [{ name: "rakesh" }, { name: "sagar" }];

// const user =users.find((user) => {
//     // console.log(user.name)
//     return user.name === 'rakesh' ///return object  //benefit  of find   break the when it find something
// });

// console.log(user)

//findIndex-----------------------
// const users = [{ name: "rakesh" }, { name: "sagar" }];

// const user = users.findIndex((user) => {
//   return user.name === "sad";    //return index number   //if not present return -1
// });
// console.log(user);

//set--------------------------

// const uniqueNumbers =new Set();

// uniqueNumbers.add(3)
// uniqueNumbers.add(2)
// uniqueNumbers.add(4)
// uniqueNumbers.add(3)
// uniqueNumbers.add(5)

// console.log(uniqueNumbers.has(55)) //true/false
// //
// const numbers =[4,5,6,7,8,6,4];
// const uniqueNumbers =new Set(numbers)

// console.log(uniqueNumbers);
// console.log(Array.from(uniqueNumbers));

// Map (Hashtables)--------------------------------------
//benefits  :-lookup----------searching in fast in lookups o(1)
// const urls = new Map();
// urls.set("development", "dev.example.com");
// urls.set('production',[1,2,3,4,5])
// // console.log(urls);
// // console.log(urls.get('development')); //retrun value

// for (const [key,value] of urls){
// // for (const url of urls){
//     // console.log(url);
//     console.log(key,value);
// }

//normal_obj
// const urlsObj = {
//     development :'dev.expaml.com',
//     production :'dev.expaml.com',
// }

//problemm with normal obj -------------order problem
//problemm with normal obj -------------size
// console.log(urlsObj.development);

// ---------Classes    **************************

// //old ways
// // function Person(name) {
// //   this.name = name;
// // }

// // const rakesh = new Person("rakesh");
// // const john = new Person("john");
// // rakesh.name='vivek'
// // console.log(rakesh);

// //new ways
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log("good evening");
//   }
// }
// // const rakesh = new Person("rakesh");
// // const john = new Person("john");
// // john.name = "vivek";
// // rakesh.greet();

// //inheritance
// class GreatPerson extends Person {
//   attitude = "cool";
//   greet() {
//     console.log("good Afternoon");
//   }
// }

// const john =new GreatPerson('jonh')
// john.greet();
// john.name='Vivke';
// console.log(john.name)

/**ES6 modules *******************************/

import { libName as mylibName,login } from "./lib.js";  

//deaufault
// import myLogin from "./lib.js";
// myLogin() 


// console.log(mylibName);
login();
