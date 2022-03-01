"use strict";

const form = document.forms["contact-form"];
const firstName = document.getElementById("first-name");
const lastName = document.forms["contact-form"].elements["last-name"];
const email = document.forms["contact-form"].elements["email"];
const phone = document.forms["contact-form"].elements["phone"];
let isValid = true;

//Validation
form.addEventListener("submit", (event) => {
  if (firstName.value.trim().length === 0) {
    console.log("firstName is missing");
    isValid = false;
  }
  if (lastName.value.trim().length === 0) {
    console.log("lastName is missing");
    isValid = false;
  }
  if (email.value.trim().length === 0) {
    console.log("email is missing");
    isValid = false;
  }
  if (phone.value.trim().length === 0) {
    console.log("phone is missing");
    isValid = false;
  }

  // Prevent submit if any validation failed
  if (!isValid) {
    event.preventDefault();
    console.log("error");
  } else console.log("send");
});
