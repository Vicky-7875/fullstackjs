//callback hell(nesting function) --------promises  use for  overcome the problem of callback hell

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register end");
      resolve();
    }, 3000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("error in send email");
      console.log(" email end");
      resolve("success");
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login end");
      resolve();
    }, 4000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get User Data end");
      resolve();
    }, 5000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display User Data end");
      resolve();
    }, 1000);
  });
}
/**using promises */
// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => console.error("Error :", err));

/**Async  await
 * better way to handle promisses
 * it show like sychronus but it is always asychnous
 */

//always promises  no needd to write new promise becz we write async in fron
async function authenticate() {
  try {
    await register();
    const message = await sendEmail();//to get data from resolve
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (err) {
    console.error("Error :", err);
    throw new Error(); //manually throw err
  }
}

authenticate()
  .then(() => {
    console.log("All set");
  })
  .catch((err) => console.error("Error :", err));

console.info("other application work");
