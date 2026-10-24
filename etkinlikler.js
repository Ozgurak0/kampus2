const searchInput = document.querySelector("#event-search-input");

if (searchInput) {
  const clearButton = document.querySelector("#event-search-clear");
  const eventCards = [...document.querySelectorAll(".grid article")];
  const resultCount = document.querySelector("#event-search-count");
  const emptyMessage = document.querySelector("#event-search-empty");

  function filterEvents() {
    const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    eventCards.forEach((card) => {
      const title = card.querySelector("h2").textContent.trim().toLocaleLowerCase("tr-TR");
      const matches = title.includes(query);
      card.hidden = !matches;

      if (matches) visibleCount += 1;
    });

    resultCount.textContent = `${visibleCount} / ${eventCards.length} etkinlik gösteriliyor.`;
    emptyMessage.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", filterEvents);
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    filterEvents();
    searchInput.focus();
  });

  filterEvents();
}

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
