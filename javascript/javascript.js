//----------FOR NAVIGATION BAR--------

// JavaScript to toggle the side menu on button click
const sideMenuButton = document.getElementById("sidemenubutton");
const sideMenu = document.querySelector(".side-menu");
const sideMenuItems = document.querySelectorAll(".side-menu a");

sideMenuButton.addEventListener("click", function () {
  if (sideMenuButton.checked) {
    sideMenu.classList.add("show");
  } else {
    sideMenu.classList.remove("show");
  }
});

// Add click event listeners to close the side menu when an item is clicked
sideMenuItems.forEach((item) => {
  item.addEventListener("click", function () {
    sideMenu.classList.remove("show");
    sideMenuButton.checked = false;
  });
});

//----------TO -SEND -DATA TO FORM--------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwTIKoFzS5bjNneQzuscpRW_g4kTHhjk5NbeaTojQRfozEyfMZbUekRwWy47jU_hm0zZA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

//----------TO -DISPLAY -MESSAGE-SENT--------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["submit-to-google-sheet"];
  const messageContainer = document.getElementById("messageContainer");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Here, you can add the code to send the form data to your server or external service if needed.

    // Display the message
    messageContainer.style.display = "block";
  });
});

//----------TO -RESET - THE FORM--------

document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["submit-to-google-sheet"];
  const messageContainer = document.getElementById("messageContainer");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Here, you can add the code to send the form data to your server or external service if needed.

    // Display the message
    messageContainer.style.display = "block";

    // Clear the form fields
    form.reset();
  });
});
