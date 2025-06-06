document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("success-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
    }

    
    if (message.value.trim() === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = "Thank you for submitting!";
      form.reset();
    }
  });
});
