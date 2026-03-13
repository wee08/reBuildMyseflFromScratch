const menu_ele = document.querySelector(".menu");
const arr_icon = document.querySelector(".icon");
const opt_ele = document.querySelector(".options");
const opt = document.querySelectorAll(".option");
const opt_else = document.querySelector(".option");
const itm_ele = document.querySelector(".itm");

let isClicked = true;
menu_ele.addEventListener("click", () => {
  if (isClicked) {
    arr_icon.style.rotate = "";
    isClicked = false;
    arr_icon.style.rotate = "180deg";
    opt_ele.classList.remove("disable");
  } else {
    isClicked = true;

    arr_icon.style.rotate = "0deg";
    opt_ele.classList.add("disable");
  }
});

if (isClicked) {
  let event;
  opt.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      event = e.target.innerHTML;
      itm_ele.innerHTML = event;
    });
  });
}
