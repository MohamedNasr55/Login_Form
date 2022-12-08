// input selector
let user = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let formSubmit = document.querySelector("#form-submit");

// span selector
let span1 = document.querySelector("#helpName");
let span2 = document.querySelector("#helpEmail");
let span3 = document.querySelector("#helpPassword");
//text node
let userText = document.createTextNode(
  "Your  name is not valid. Only characters A-Z, a-z and '-' are  acceptable."
);
let emailText = document.createTextNode("Please provide a valid email address");
let passText = document.createTextNode(
  "password should contain atlas one number and one special character"
);

//regex logical
let userRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gim;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gim;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gim;
//logical validate
formSubmit.addEventListener("submit", validate);
function validate(e) {
  let user = false;
  let email = false;
  let password = false;
  if (user.value !== "") {
    span1.appendChild(userText);
    span1.style.cssText = `display: inline-block;`;
    user = true;
  } else {
    span1.style.cssText = `display: none;`;
  }
  if (email.value !== "") {
    span2.appendChild(emailText);
    span2.style.cssText = `display: inline-block;`;
    email = true;
  } else {
    span2.style.cssText = `display: none;`;
  }
  if (password.value !== "") {
    span3.appendChild(passText);
    span3.style.cssText = `display: inline-block;`;
    password = true;
  } else {
    span3.style.cssText = `display: none;`;
  }
  if (user === false || email === false || password === false) {
    e.preventDefault();
  }
}

// success section logical //
let successSection = document.querySelector("#succ");

fetch("https://goldblv.com/api/hiring/tasks/register")
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    let textSucc = document.createTextNode(post.title)
    successSection.appendChild(textSucc);
  });
