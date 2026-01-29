const quote = document.getElementById("quote");
const options = document.getElementById("options");
const message = document.getElementById("message");

let opened = false;

// Click quote to open options
quote.addEventListener("click", () => {
  if (!opened) {
    quote.classList.add("hidden");
    options.classList.remove("hidden");
    opened = true;
  }
});

// Choice logic
function choose(type) {
  options.classList.add("hidden");

  if (type === "listen") {
    message.innerText = "Silence speaks when the mind stops questioning.";
  }

  if (type === "reflect") {
    message.innerText = "Every answer you seek is already within you.";
  }

  if (type === "letgo") {
    message.innerText = "Release control. Trust Mahadev’s timing.";
  }

  message.classList.remove("hidden");
}
