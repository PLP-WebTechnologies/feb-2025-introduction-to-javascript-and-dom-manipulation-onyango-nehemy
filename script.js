// Change text content and style
document.getElementById("change-text-btn").addEventListener("click", function () {
  const description = document.getElementById("description");
  description.textContent = "The text has been updated!";
  description.style.color = "blue";
  description.style.fontWeight = "bold";
  description.style.backgroundColor = "#f0f0f0";
});

// Add or remove an element dynamically
document.getElementById("toggle-element-btn").addEventListener("click", function () {
  const container = document.getElementById("element-container");
  const existingElement = document.getElementById("dynamic-paragraph");

  if (existingElement) {
    container.removeChild(existingElement);
  } else {
    const newParagraph = document.createElement("p");
    newParagraph.id = "dynamic-paragraph";
    newParagraph.textContent = "This paragraph was added dynamically!";
    newParagraph.style.marginTop = "10px";
    container.appendChild(newParagraph);
  }
});
