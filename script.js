// Get the input and output elements
const markdownInput = document.getElementById("markdow-input");
const markdownPreview = document.getElementById("markdown-preview");

// Function to update the preview
function updatePreview() {
  const inputText = markdownInput.value;
  const htmlOutput = marked.parse(inputText); // Assuming you're using the 'marked' library

  markdownPreview.innerHTML = htmlOutput;
}

// Add an input event listener to update the preview as you type
markdownInput.addEventListener("input", updatePreview);

// Initial update
updatePreview();
