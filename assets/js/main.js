"use strict";
const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".nav-btns_container");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
