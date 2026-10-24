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
