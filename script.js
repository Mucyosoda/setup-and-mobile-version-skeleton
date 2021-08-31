"use strict";
let menuBtn = document.querySelector(".menu");
let navWrap = document.querySelector(".nav-bar");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("d-none");
  closeIcon.classList.toggle("d-none");
  navWrap.classList.remove("d-none");
  navWrap.classList.add("open");
});

closeIcon.addEventListener("click", () => {
  navWrap.classList.add("d-none");
  menuBtn.classList.remove("d-none");
  closeIcon.classList.toggle("d-none");
});
