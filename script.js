let burgerIcon = document.getElementById("burgerIcon");
let escIcon = document.getElementById("escIcon");
let burgerMenu = document.getElementById("burgerMenu");

let menuVisible = false;

escIcon.classList.remove("hide-icon");

escIcon.addEventListener("click", function () {
  if (menuVisible) {
    escIcon.classList.remove("hide-icon");
    burgerIcon.classList.add("hide-icon");
    burgerMenu.style.display = "none";
    menuVisible = false;
  } else {
    escIcon.classList.add("hide-icon");
    burgerIcon.classList.remove("hide-icon");
    burgerMenu.style.display = "block";
    menuVisible = true;
  }
});

burgerIcon.addEventListener("click", function () {
  if (menuVisible) {
    burgerIcon.classList.add("hide-icon");
    escIcon.classList.remove("hide-icon");
    burgerMenu.style.display = "none";
    menuVisible = false;
  } else {
    burgerIcon.classList.remove("hide-icon");
    escIcon.classList.add("hide-icon");
    burgerMenu.style.display = "block";
    menuVisible = true;
  }
});
