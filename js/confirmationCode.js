document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to send code button
  document
    .getElementById("sendCodeButton")
    .addEventListener("click", function () {
      // Assume 'sendCodeToEmail' is a function that sends the code to the entered email
      sendCodeToEmail();

      // Redirect to the confirmation page
      window.location.href = "../auth/confirmation.html";
    });

  // Get the email address from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");

  // Display the email address in the heading
  const emailSpan = document.getElementById("emailSpan");
  if (emailSpan) {
    emailSpan.textContent = email;
  } else {
    console.error("Element with ID 'emailSpan' not found.");
  }
});
