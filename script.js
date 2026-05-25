function toggleTheme(){

  document.body.classList.toggle("light-mode");

}
if(localStorage.getItem("loggedIn") === "true"){

  window.location.href = "dashboard.html";

}
const loginBtn = document.getElementById("loginBtn");

const message = document.getElementById("message");

loginBtn.onclick = function(){

  const username = document.getElementById("username").value;

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const password = document.getElementById("password").value;

  if(!username.match(emailPattern)){

  message.innerText = "Enter valid email";

  message.style.color = "orange";

}

  if(username === "admin" && password === "12345"){

    document.getElementById("btnText").innerText = "Loading...";

    message.innerText = "Login Successful 🚀";

    document.getElementById("successPopup").style.display = "flex";

    message.style.color = "lightgreen";

    setTimeout(() => {
      localStorage.setItem("loggedIn", "true");

      document.getElementById("successPopup").style.display = "none";

      window.location.href = "dashboard.html";

      document.getElementById("btnText").innerText = "Login";

    }, 1000);

  }

  else{

    message.innerText = "Invalid Username or Password";

    message.style.color = "red";

  }

}
const togglePassword = document.getElementById("togglePassword");

const passwordInput = document.getElementById("password");

togglePassword.onclick = function(){

  if(passwordInput.type === "password"){

    passwordInput.type = "text";

    togglePassword.innerText = "Hide Password";

  }

  else{

    passwordInput.type = "password";

    togglePassword.innerText = "Show Password";

  }

}
const switchForm = document.getElementById("switchForm");

let isLogin = true;

switchForm.onclick = function(){

  if(isLogin){

    document.querySelector("h1").innerText = "Sign Up 🚀";

    loginBtn.innerText = "Sign Up";

    switchForm.innerText = "Already have an account? Login";

    isLogin = false;

  }

  else{

    document.querySelector("h1").innerText = "Login 🚀";

    loginBtn.innerText = "Login";

    switchForm.innerText = "Don't have an account? Sign Up";

    isLogin = true;

  }

}
const strength = document.getElementById("strength");

passwordInput.addEventListener("input", () => {

  const password = passwordInput.value;

  if(password.length < 4){

    strength.innerText = "Weak Password";

    strength.style.color = "red";

  }

  else if(password.length < 8){

    strength.innerText = "Medium Password";

    strength.style.color = "yellow";

  }

  else{

    strength.innerText = "Strong Password";

    strength.style.color = "lightgreen";

  }

});
const forgotPassword = document.getElementById("forgotPassword");

const popup = document.getElementById("popup");

forgotPassword.onclick = function(){

  popup.style.display = "flex";

}

function closePopup(){

  popup.style.display = "none";

}