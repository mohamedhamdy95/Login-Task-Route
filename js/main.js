let SignUpName = document.getElementById("SignUpName");
let SignUpEmail = document.getElementById("SignUpEmail");
let SignUpPass = document.getElementById("SignUpPass");
let signUp = document.getElementById("SignUp");
let MessageFail = document.getElementById("MessageFail");
let MessageSuc = document.getElementById("MessageSuc");
let userName = document.getElementById("username");
let SignInEmail = document.getElementById("SignInEmail");
let SignInPass = document.getElementById("SignIpPass");
let logIn = document.getElementById("login");
let logInMessError = document.getElementById("messageError");
let incorrect = document.getElementById("incorrect");
let welcomeUser = document.getElementById("username");
let userList;
let logOut = document.getElementById("logout");
// ===================================================
if (localStorage.getItem("usersList") == null) {
  userList = [];
} else {
  userList = JSON.parse(localStorage.getItem("usersList"));
}
// ===================================================

// console.log(SignUpName);
// console.log(SignUpEmail);
// console.log(SignUpPass);
// console.log(signUp);
// console.log(MessageFail);
// console.log(MessageSuc);
// console.log(SignIpPass);
// console.log(SignInEmail);
if (signUp != null) {
  signUp.addEventListener("click", function () {
    addUser();
  });
}
// ===================================================
function addUser() {
  if (
    SignUpName.value == "" ||
    SignUpEmail.value == "" ||
    SignUpPass.value == ""
  ) {
    MessageFail.classList.replace("d-none", "d-block");
    // window.location.reload();
  } else if (
    SignUpName.value != "" &&
    SignUpEmail.value != "" &&
    SignUpPass.value != ""
  ) {
    MessageFail.classList.replace("d-block", "d-none");
    let user = {
      name: SignUpName.value,
      email: SignUpEmail.value,
      pass: SignUpPass.value,
    };
    userList.push(user);
    localStorage.setItem("usersList", JSON.stringify(userList));
    MessageSuc.classList.replace("d-none", "d-block");
    location.href = "../sign-in.html";
    reset();
    console.log(userList);
  }
}
// =========================================================
if (logIn != null) {
  logIn.addEventListener("click", function () {
    checkUser();
    if (valid()) {
      // console.log("valid");
      incorrect.classList.replace("d-block", "d-none");
      location.href = "../welcome.html";
      disply();
    } else {
      incorrect.classList.replace("d-none", "d-block");
    }
  });
}
// ===================================================
function checkUser() {
  if (SignInEmail.value != "" && SignInPass.value != "") {
    logInMessError.classList.replace("d-block", "d-none");
  } else {
    logInMessError.classList.replace("d-none", "d-block");
  }
}
// ========================================================
function valid() {
  for (var i = 0; i < userList.length; i++) {
    if (
      userList[i].email == SignInEmail.value &&
      userList[i].pass == SignInPass.value
    ) {
      localStorage.setItem("name", JSON.stringify(userList[i].name));
      return true;
    }
  }
}
// =========================================================
function disply() {
  var userName = JSON.parse(localStorage.getItem("name"));
  welcomeUser.innerText = `Welcome ${userName}`;
}
// =========================================================
if (logOut != null) {
  logOut.addEventListener("click", function () {
    location.href = "../index.html";
  });
}
// =========================================================
function reset() {
  SignUpName.value = "";
  SignUpEmail.value = "";
  SignUpPass.value = "";
}
