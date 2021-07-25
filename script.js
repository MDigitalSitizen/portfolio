let arrowActive = document.querySelector(".activeArrow");

document.querySelectorAll(".fa-arrow-right").forEach((item) => {
  // item.style.transform = "rotate(0deg)";
  let colapsibleChildrens = item.parentNode.parentNode.children;
  let languageList = colapsibleChildrens[1];

  languageList.style.visibility = "hidden";
  languageList.style.maxHeight = "0px";
  languageList.style.transition =
    "visibility 800ms, opacity 800ms, max-height 800ms";

  item.addEventListener("click", (e) => {
    if (languageList.style.visibility == "visible") {
      languageList.style.visibility = "hidden";
      colapsibleChildrens[2].style.visibility = "visible";
      languageList.style.maxHeight = "0px";
      languageList.style.opacity = "0";
    } else if (languageList.style.visibility == "hidden") {
      languageList.style.visibility = "visible";
      colapsibleChildrens[2].style.visibility = "hidden";
      languageList.style.maxHeight = "500px";
      languageList.style.opacity = "1";
    }
  });
});
//
//
// rotate the arrows
document.querySelectorAll(".arrow").forEach((item) => {
  item.style.transform = "rotate(0deg)";
  item.addEventListener("click", (e) => {
    if (item.style.transform == "rotate(90deg)") {
      e.target.style.transform = "rotate(0deg)";
      console.log(e.target);
    } else if (item.style.transform == "rotate(0deg)") {
      e.target.style.transform = "rotate(90deg)";
      e.target.style.transition = "transform 600ms";
      console.log(e.target);
    }
  });
});

// Hamburger menu

let menuButton = document.querySelector(".menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let remButton = document.querySelector(".fa-times");
// transition style

mobileMenu.style.transition = "right 800ms";

menuButton.addEventListener("click", (e) => {
  e.target.style.display = "none";
  mobileMenu.style.visibility = "visible";
  mobileMenu.style.right = "0px";
});

remButton.addEventListener("click", (e) => {
  mobileMenu.style.right = "-400px";
  setTimeout(() => {
    mobileMenu.style.visibility = "hidden";
  }, 900);
  menuButton.style.display = "block";
});