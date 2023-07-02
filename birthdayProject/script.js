"use strict";

let overlayEl = document.getElementById("modal-overlay");
let modalEl = document.getElementById("modal");
let messageEl = document.getElementById("modal-message");
let closeEl = document.getElementById("modal-close");
let dayEl = document.getElementById("day");
let monthEl = document.getElementById("month");
let yearEl = document.getElementById("year");
let submitBtn = document.getElementById("btn");

let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let addHidden = () => {
  overlayEl.classList.add("hidden");
  modalEl.classList.add("hidden");
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlayEl.classList.remove("hidden");
  modalEl.classList.remove("hidden");
  if (
    +dayEl.value >= 1 &&
    +dayEl.value <= 31 &&
    +monthEl.value >= 1 &&
    +monthEl.value <= 12 &&
    +yearEl.value >= 1900 &&
    +yearEl.value <= 2023
  ) {
    if (
      +monthEl.value === 4 ||
      +monthEl.value === 6 ||
      +monthEl.value === 9 ||
      +monthEl.value === 11
    ) {
      if (+dayEl.value === 31) {
        messageEl.innerHTML = `Are you sure ${
          monthsArray[monthEl.value - 1]
        } has 31 days? <span><i class="fa-solid fa-face-surprise"></i></span>`;
      } else {
        messageEl.innerHTML = `
        Your birthday is ${dayEl.value} ${monthsArray[monthEl.value - 1]} ${
          yearEl.value
        } ! <span><i class="fa-solid fa-face-smile-wink"></i></span>`;
      }
    } else if (+monthEl.value === 2) {
      if (+dayEl.value > 28) {
        messageEl.innerHTML = `No more than 28 days in February! <span><i class="fa-solid fa-face-angry"></i></span>`;
      } else {
        messageEl.innerHTML = `
        Your birthday is ${dayEl.value} ${monthsArray[monthEl.value - 1]} ${
          yearEl.value
        } ! <span><i class="fa-solid fa-face-smile-wink"></i></span>`;
      }
    } else {
      messageEl.innerHTML = `
        Your birthday is ${dayEl.value} ${monthsArray[monthEl.value - 1]} ${
        yearEl.value
      } ! <span><i class="fa-solid fa-face-smile-wink"></i></span>`;
    }
  } else {
    messageEl.innerHTML = `Please enter a valid date!  <span><i class="fa-solid fa-face-angry"></i></span>`;
  }
});

closeEl.addEventListener("click", addHidden);

overlayEl.addEventListener("click", addHidden);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    addHidden();
  }
});
