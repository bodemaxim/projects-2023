window.addEventListener('DOMContentLoaded', function() {
  const musicSlider = document.getElementById("music-settings");
  const gameLink = document.getElementById("game");

  // Слушаем событие изменения значения ползунка
  musicSlider.addEventListener("input", function() {
    const volume = musicSlider.value / 100;

    // Сохраняем значение громкости в localStorage
    localStorage.setItem("volume", volume);
  });

  // Обработка клика на ссылку "game"
  gameLink.addEventListener("click", function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки

    const volume = localStorage.getItem("volume"); // Получаем сохраненное значение громкости

    // Открываем страницу game.html с передачей значения громкости через параметр запроса
    window.open("game.html?volume=" + volume, "_blank");
  });
});