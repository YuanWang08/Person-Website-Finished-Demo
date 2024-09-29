// 黑暗模式
const darkModeBtn = document.getElementById("darkModeBtn");
const darkModeBtnMobile = document.getElementById("darkModeBtnMobile");

function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.toggle("dark");
  const icon = isDarkMode ? "☀️" : "🌙";
  darkModeBtn.textContent = icon;
  darkModeBtnMobile.textContent = icon;
}

darkModeBtn.addEventListener("click", toggleDarkMode);
darkModeBtnMobile.addEventListener("click", toggleDarkMode);
