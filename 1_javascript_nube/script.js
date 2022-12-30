//DOM manupulation (documnet object model)

//1.document.getElementById()

// const heading = document.getElementById("head1");
// console.log(heading);

//2.document.getElementsByTagName()

// const heading = document.getElementsByTagName("h1");
// console.log(heading);

//3.document.getElementsByClassName()

// const heading = document.getElementsByClassName("heading");
// console.log(heading);

//4. document.querySelector

// const heading = document.querySelector('.heading');
// console.log(heading)

// 5.document.querySelectorAll

// const heading= document.querySelectorAll('.heading')
// console.log(heading)

/**Traverse DOM */

// 1.parentNode

//console.log(document.querySelector('.heading').parentNode)

//2.children node
// console.log(document.querySelector('.parent').childNodes)

// 3.nextElementSibling
// console.log(document.querySelector(".heading").nextElementSibling);
// // 4.previousElementSibling
// console.log(document.querySelector(".subHeading").previousElementSibling);

/**Manipulation */

// const heading = document.querySelector(".heading");
// heading.innerHTML='my new heading'
// heading.style.color="red"
// heading.style.fontSize='50px'
// heading.classList.add('title')
// heading.classList.remove('heading')
// console.log(heading)

/**create elements */

// const heading = document.createElement('h1');
// heading.innerHTML='Js is awesome';
// const parent = document.querySelector('.parent');
// parent.appendChild(heading)
// heading.classList.add('title')
// heading.style.color="red"

// const subHeading = document.createElement('h3');
// subHeading.innerHTML='subHeading';
// // heading.insertAdjacentElement('befor ebegin',subHeading)
// heading.insertAdjacentElement('afterend',subHeading)
// console.log(subHeading)

/**DOM Events */
// const button = document.querySelector("#btn");
// const body = document.querySelector("body");
// const heading = document.querySelector("#heading");

// button.addEventListener("click", function (event) {
//   console.log("button clicked", event);
// //   if (heading.style.color == "red") {
// //     heading.style.color = "blue";
// //     heading.style.fontSize = "20px";
// //   } else {
// //     heading.style.color = "red";
// //     heading.style.fontSize = "60px";
// //   }
//   if (body.style.color == "white") {
//     body.style.color = "black";
//     body.style.backgroundColor = "white";
//     // heading.style.fontSize = "20px";
//   } else {
//     body.style.color = "white";
//     body.style.backgroundColor = "black";
//     // heading.style.fontSize = "60px";
//   }
// });

/**mini project bulb*/

// const bulb = document.querySelector("#bulbId");
// const buttn = document.querySelector("#btn");
// buttn.innerHTML = "Turn ON";

// buttn.addEventListener("click", function () {
//   if (bulb.getAttribute("src").includes("off")) {
//     bulb.setAttribute("src", "./images/pic_bulbon.gif");
//     buttn.innerHTML = "Turn OFF";
//   } else {
//     bulb.setAttribute("src", "./images/pic_bulboff.gif");
//     buttn.innerHTML = "Turn ON";
//   }
// });

/**New project------------getPhotos */
const root = document.querySelector("#root");
const button = document.querySelector("button");

function createItem(item) {
  const card = document.createElement("div");
  card.classList.add("add");

  //image
  const photo = document.createElement("img");
  photo.src = item.thumbnailUrl;

  //title
  const title = document.createElement("h4");
  title.innerHTML = item.title;

  card.appendChild(photo);
  card.appendChild(title);

  root.appendChild(card);
}

function displayImg(items) {
  items.forEach(function (item) {
    createItem(item);
  });
  console.log(items);
}

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((result) => result.json())
    .then((items) => {
      displayImg(items);
    });
});
