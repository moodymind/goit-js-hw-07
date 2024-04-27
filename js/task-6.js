"use strict";

const controlsDiv = document.getElementById("controls");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
const input = controlsDiv.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  let currentWidth = 30;
  let currentHeight = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${currentWidth}px`;
    box.style.height = `${currentHeight}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);

    currentWidth += 10;
    currentHeight += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);

  if (isNaN(amount) || amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
