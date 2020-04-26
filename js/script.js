
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