const markdownInput = document.getElementById("markdow-input");
const markdownPreview = document.getElementById("markdown-preview");

function toggleTheme() {
  const body = document.body;
  const slider = document.getElementById('slider');

  if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      slider.classList.remove('active-sun');
      slider.classList.add('active-moon');
  } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      slider.classList.remove('active-moon');
      slider.classList.add('active-sun');
  }
}

function updatePreview() {
  let inputText = markdownInput.value;

  inputText = inputText.replace(/```([^`]+)```/g, (_, code) => {
    return `<pre class="code-block"><code>${code.replace(/\n/, '')}</code></pre>`;
  }).replace(/`([^`]+)`/g, (_, code) => {
    return `<code class="code-block">${code.replace(/\n/, '')}</code>`;
  });

  const htmlOutput = marked.parse(inputText); 

  markdownPreview.innerHTML = htmlOutput;
}

markdownInput.addEventListener("input", updatePreview);

updatePreview();
