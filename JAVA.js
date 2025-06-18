function toggleSection(headerElement) {
  const content = headerElement.nextElementSibling;
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";

  // เปลี่ยนไอคอนลูกศร
  if (headerElement.innerText.includes("♡")) {
    headerElement.innerText = headerElement.innerText.replace("♡", "♡");
  } else {
    headerElement.innerText = headerElement.innerText.replace("♡", "♡");
  }
}

