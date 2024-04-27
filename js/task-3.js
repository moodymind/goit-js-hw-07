"use strict";

const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", () => {
  const trimmedName = nameInput.value.trim();

  if (trimmedName) {
    nameOutput.textContent = trimmedName;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
