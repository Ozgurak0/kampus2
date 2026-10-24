const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {
  let theme = "light";

  try {
    theme = window.sessionStorage.getItem("yazilim-kulubu-theme") === "dark" ? "dark" : "light";
  } catch (error) {
    if (error?.name !== "SecurityError") throw error;
    console.warn("Tema tercihi bu tarayıcıda saklanamıyor; mod yalnızca açık sekmede uygulanacak.");
  }

  function applyTheme() {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);
    themeButton.textContent = isDark ? "Açık moda geç" : "Koyu moda geç";
    themeButton.setAttribute("aria-pressed", String(isDark));
  }

  applyTheme();

  themeButton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme();

    try {
      window.sessionStorage.setItem("yazilim-kulubu-theme", theme);
    } catch (error) {
      if (error?.name !== "SecurityError") throw error;
      console.warn("Tema tercihi kaydedilemedi; mod bu sekmede çalışmaya devam edecek.");
    }
  });
}
