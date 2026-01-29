const mainText = document.getElementById("mainText");
const choices = document.getElementById("choices");
const result = document.getElementById("result");

let opened = false;

mainText.addEventListener("click", () => {
  if (!opened) {
    mainText.style.display = "none";
    choices.classList.remove("hidden");
    opened = true;
  }
});

function selectChoice(type) {
  choices.classList.add("hidden");

  if (type === "listen") {
    result.innerText = "Silence is also an answer.";
  }

  if (type === "reflect") {
    result.innerText = "What you seek is already within you.";
  }

  if (type === "letgo") {
    result.innerText = "Release control. Trust the flow.";
  }

  result.classList.remove("hidden");
} 
