const button = document.querySelector("#theme-toggle");

let theme = sessionStorage.getItem("yazilim-kulubu-theme") === "dark" ? "dark" : "light";

function applyTheme() {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  button.textContent = isDark ? "Açık moda geç" : "Koyu moda geç";
  button.setAttribute("aria-pressed", String(isDark));
}

applyTheme();

button.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  sessionStorage.setItem("yazilim-kulubu-theme", theme);
  applyTheme();
});