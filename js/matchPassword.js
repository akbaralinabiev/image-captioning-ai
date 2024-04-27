document
  .getElementById("savePasswordBtn")
  .addEventListener("click", (event) => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      // Check if flash message already exists
      const existingFlashMessage = document.querySelector(".flash-message");
      if (!existingFlashMessage) {
        // Create flash message element
        const flashMessage = document.createElement("div");
        flashMessage.classList.add("flash-message");
        flashMessage.textContent = "Passwords don't match. Please try again.";

        // Add margin-top to the flash message
        flashMessage.style.marginTop = "5px";
        flashMessage.style.color = "#CF4A4A";

        // Get the parent container with the class flash_form
        const flashForm = document.querySelector(".form__item");

        // Insert flash message under the flash_form container
        flashForm.appendChild(flashMessage);
      }

      // Prevent form submission and page reload
      event.preventDefault();
      return false;
    }

    // If passwords match, allow form submission and redirect to the home page
    // (No need to explicitly redirect here, the form submission will handle it)
  });

// Remove flash message when user starts typing in password fields
document.getElementById("password").addEventListener("input", () => {
  const existingFlashMessage = document.querySelector(".flash-message");
  if (existingFlashMessage) {
    existingFlashMessage.remove();
  }
});

document.getElementById("confirmPassword").addEventListener("input", () => {
  const existingFlashMessage = document.querySelector(".flash-message");
  if (existingFlashMessage) {
    existingFlashMessage.remove();
  }
});
