let all = document.querySelectorAll("a");

let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo");
let sideNav = document.querySelector("#sideNav");

menu.onclick = () => {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    logo.src = './Barber_Shop_img/Barber_Shop_img/close.png'
  }else{
    sideNav.style.right = "-250px";
    logo.src = './Barber_Shop_img/Barber_Shop_img/menu.png'
  }
};

all.forEach((e) => {
  e.addEventListener("click", () => {
    all.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
  });
});