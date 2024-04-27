"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Please fill all the form field");
    return;
  }

  const formatData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
  };

  console.log("Form data:", formatData);
  loginForm.reset();
});
