// 開關選單
document.getElementById("menu-icon").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("translate-x-full");
  menu.classList.add("translate-x-0");
});

document.getElementById("close-icon").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("translate-x-0");
  menu.classList.add("translate-x-full");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
  });
});
