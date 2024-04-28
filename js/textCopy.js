function copyText() {
  // Select the text to copy
  const textToCopy = "Text you want to copy";

  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;

  // Append the textarea to the body
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Change button text to "Text Copied!" for 2 seconds
  const copyButton = document.getElementById("copyButton");
  copyButton.textContent = "Text Copied!";

  setTimeout(function () {
    // Revert back to original text after 2 seconds
    copyButton.textContent = "copy text";
  }, 2000);
}
