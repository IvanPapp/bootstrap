const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const prevButton = document.querySelector(".navigation"); 
const captline = document.querySelector(".caption");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    prevButton.style.display = "block";
    captline.style.display = "block"

  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    prevButton.style.display = "none";
    captline.style.display = "none"

  }
}

hamburger.addEventListener("click", toggleMenu);
