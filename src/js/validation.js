"use strict";

/* Get the elements from the DOM */
const form = document.forms["contact-form"];
const firstName = document.getElementById("first-name");
const lastName = document.forms["contact-form"].elements["last-name"];
const email = document.forms["contact-form"].elements["email"];
const phone = document.forms["contact-form"].elements["phone"];
const checkFirstName = document.getElementById("check-first-name");
const checkLastName = document.getElementById("check-last-name");
const checkEmail = document.getElementById("check-email");
const checkPhone = document.getElementById("check-phone");

/* Regex */
const latinRegex = /[A-Za-z]/;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phoneRegex = /^\d{3,5}[- ]?\d{5,}$/;

//Validation
form.addEventListener("submit", (event) => {
  //use of a flag
  let isValid = true;

  //Validate first name
  if (!firstName.value.trim().length || !latinRegex.test(firstName.value)) {
    isValid = false;
    checkFirstName.innerHTML = "Enter your First Name using latin characters!";
    firstName.style.borderColor = "red";
    firstName.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  } else {
    firstName.style.borderColor = "#929fa6";
    checkFirstName.innerHTML = "";
  }

  //Validate last name
  if (!lastName.value.trim().length || !latinRegex.test(lastName.value)) {
    isValid = false;
    checkLastName.innerHTML = "Enter your Last Name using latin characters!";
    lastName.style.borderColor = "red";
    lastName.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  } else {
    lastName.style.borderColor = "#929fa6";
    checkLastName.innerHTML = "";
  }

  //Validate email
  if (!email.value.trim().length || !emailRegex.test(email.value)) {
    isValid = false;
    checkEmail.innerHTML = "Incorrect email!";
    email.style.borderColor = "red";
    email.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  } else {
    email.style.borderColor = "#929fa6";
    checkEmail.innerHTML = "";
  }

  //Validate phone number
  if (!phone.value.trim().length || !phoneRegex.test(phone.value)) {
    isValid = false;
    checkPhone.innerHTML = "Incorrect phone number!";
    phone.style.borderColor = "red";
    phone.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
  } else {
    phone.style.borderColor = "#929fa6";
    checkPhone.innerHTML = "";
  }

  // Prevent submit if any validation failed
  if (!isValid) {
    event.preventDefault();
    console.log("error");
  } else console.log("send");
});
