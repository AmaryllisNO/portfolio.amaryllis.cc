// HAMBURGER MENU

var burger = document.querySelector(".burger");

burger.addEventListener("click", showNav);

function showNav() {

    var nav = document.querySelector(".navlist");

    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  } 

  // FORM VALIDATION 

// form
const form = document.querySelector("#form");

// listen to when form is submitted and run validateForm func.
form.addEventListener("submit", validateForm);

// run this code when form is submitted
function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    // input fields
  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");


  // error message(s) 
  const errorMessageFirstName = document.querySelector(".formOutputFirstName");
  const errorMessageLastName = document.querySelector(".formOutputLastName");
  const errorMessageEmail = document.querySelector(".formOutputEmail");
  const errorMessageMessage = document.querySelector(".formOutputMessage");

  if (validateNotEmpty(firstName.value) === true) {
    errorMessageFirstName.style.display = "none";
  } else {
    var paragraph = document.createElement("p"); 
      var paragraphContent =  document.createTextNode("Please enter your first name!");
      paragraph.appendChild(paragraphContent);
      errorMessageFirstName.appendChild(paragraph)
  }

  if (validateNotEmpty(lastName.value) === true) {
    errorMessageLastName.style.display = "none";;
  } else {
    var paragraph = document.createElement("p"); 
      var paragraphContent =  document.createTextNode("Please enter your last name!");
      paragraph.appendChild(paragraphContent);
      errorMessageLastName.appendChild(paragraph)
  }

  if (validateEmailAddress(email.value) === true) {
    errorMessageEmail.style.display = "none";;
  } else {
    var paragraph = document.createElement("p"); 
      var paragraphContent =  document.createTextNode("Please enter a valid email address!");
      paragraph.appendChild(paragraphContent);
      errorMessageEmail.appendChild(paragraph)
  }

  if (validateNotEmpty(message.value) === true) {
    errorMessageMessage.style.display = "none";;
  } else {
    var paragraph = document.createElement("p"); 
      var paragraphContent =  document.createTextNode("Please enter your message!");
      paragraph.appendChild(paragraphContent);
      errorMessageMessage.appendChild(paragraph)
  }

}

function validateNotEmpty(string) {
  if (string.trim().length > 0) {
    return true;
  }
  else {
    return false;
  }
}

function validateEmailAddress(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}


/* 
console.log(firstName.value);

console.log(validateNotEmpty(firstName.value));

function createParagraphFirstName() {
  var paragraph = document.createElement("p"); 
  var paragraphContent =  document.createTextNode("Please fill out your name.");
  paragraph.appendChild(paragraphContent);
  output.appendChild(paragraph)
  } 


if (validateNotEmpty(firstName.value) == false) {
  createParagraphFirstName();
  
} else {
  console.log("Name is valid.")
}

 */