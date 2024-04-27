"use strict";

const categoriesList = document.querySelector("ul#categories");
const listItems = categoriesList.querySelectorAll("li.item");

console.log("Number of categories: ", listItems.length);

listItems.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const listElements = item.querySelectorAll("ul li");
  console.log(
    `Category: ${itemTitle}
     Number of elements: ${listElements.length}`
  );
});
