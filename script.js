// Get the input and output elements
const markdownInput = document.getElementById("markdow-input");
const markdownPreview = document.getElementById("markdown-preview");

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
