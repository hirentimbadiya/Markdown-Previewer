// Get the input and output elements
const markdownInput = document.getElementById("markdow-input");
const markdownPreview = document.getElementById("markdown-preview");
const fontSelector = document.getElementById("font-family");
const toggleSwitch = document.getElementById("toggle-switch");
const body = document.body;

document.addEventListener("DOMContentLoaded", function () {
  // Get the select element
  const fontSelect = document.getElementById("font-family");

  // Function to update font family based on selected option
  function updateFontFamily() {
      const selectedFont = fontSelect.value;

      // Apply the selected font family to the entire document
      document.body.style.fontFamily = selectedFont;

      // Apply the selected font family to all text elements
      const textElements = document.querySelectorAll("body *");
      textElements.forEach(element => {
          element.style.fontFamily = selectedFont;
      });

      const inputFields = document.querySelectorAll("input[type='text'], input[type='email'], textarea");
      inputFields.forEach(input => {
          input.style.fontFamily = selectedFont;
      });
  }

  // Event listener for the select element change
  fontSelect.addEventListener("change", updateFontFamily);
});

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
      body.classList.add("dark-mode");
  } else {
      body.classList.remove("dark-mode");
  }
});


// Function to update the preview
function updatePreview() {
  let inputText = markdownInput.value;

  inputText = inputText.replace(/```([^`]+)```/g, (_, code) => {
    return `<pre class="code-block"><code>${code.replace(/\n/, '')}</code></pre>`;
  }).replace(/`([^`]+)`/g, (_, code) => {
    return `<code class="code-block">${code.replace(/\n/, '')}</code>`;
  });

  const htmlOutput = marked.parse(inputText); // Assuming you're using the 'marked' library

  markdownPreview.innerHTML = htmlOutput;
}

// Add an input event listener to update the preview as you type
markdownInput.addEventListener("input", updatePreview);

// Initial update
updatePreview();
