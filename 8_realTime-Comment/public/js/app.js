// const e = require("express");
// const moment = require("moment/moment");

let userName;
let socket = io();
do {
  userName = prompt("Enter your name");
} while (!userName);

const textarea = document.querySelector("#textarea");

const submitBtn = document.querySelector("#submitBtn");

const commentBox = document.querySelector(".comment__box");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let comment = textarea.value;
  if (!comment) {
    return;
  }

  postComment(comment);
});

function postComment(comment) {
  //append to dom

  let data = {
    userName,
    comment,
  };
  appendToDom(data);
  textarea.value = "";

  //broadcast
  broadcastComment(data);

  //sync with mongodb
  syncWithDb(data);
}

function appendToDom(data) {
  //     <li class="comment">
  //     <div class="card border-light mb-3">
  //       <div class="card-body">
  //         <h6>vivek tondare</h6>
  //         <p>
  //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //           Autem, assumenda aliquid? Exercitationem cumque et optio
  //           ullam non reprehenderit possimus dolore. Ipsum possimus
  //           exercitationem accusamus magnam maxime eius aspernatur
  //           dolore quidem?
  //         </p>
  //         <div>
  //           <img src="/img/clock.png" width="17px" alt="clock" />
  //           <small>3:00pm</small>
  //         </div>
  //       </div>
  //     </div>
  //   </li>

  let lTag = document.createElement("li");
  lTag.classList.add("comment");

  let markup = `
  <div class="card border-light mb-3">
        <div class="card-body">
          <h6>${data.userName}</h6>
          <p>
            ${data.comment}
          </p>
          <div>
            <img src="/img/clock.png" width="17px" alt="clock" />
            <small>${moment(data.time).format("LT")}</small>
          </div>
        </div>
      </div>
  `;
  lTag.innerHTML = markup;

  commentBox.prepend(lTag);
}

function broadcastComment(data) {
  //socket.io send to sever//
  socket.emit("comment", data);
}

socket.on("comment", (data) => {
  appendToDom(data);
});

let timerId = null;

function debounce(func, timer) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    func();
  }, timer);
}

let typingDiv = document.querySelector(".typing");
socket.on("typing", (data) => {
  typingDiv.innerText = `${data.userName} is typing...`;
  debounce(function () {
    typingDiv.innerText = "";
  }, 1000);

  //not to use
  // setTimeout(() => {
  //   typingDiv.innerText =''
  // }, 2000);
});

//event listern on textarea
textarea.addEventListener("keyup", (e) => {
  socket.emit("typing", { userName });
});

//api calls
function syncWithDb(data) {
  const headers = {
    "Content-Type": "application/json",
  };
  fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(data),
    headers: headers,
  })
    .then((response) => {
      response.json();
    })
    .then((result) => {
      console.log(result);
    });
}

function fetchComments() {
  fetch("/api/comments").then((res) =>
    res.json().then((result) => {
      result.forEach((comment) => {
        comment.time = comment.createdAt;

        appendToDom(comment);
      });
      // console.log(result);
    })
  );
}

window.onload = fetchComments;
