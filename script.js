document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");

  // soft fade-in safety
  content.style.opacity = "0";

  setTimeout(() => {
    content.style.transition = "opacity 2s ease";
    content.style.opacity = "1";
  }, 300);
});
