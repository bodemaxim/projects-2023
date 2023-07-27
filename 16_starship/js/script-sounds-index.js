window.addEventListener('load', function() {
  
    var soundSlider = document.getElementById("sound-settings");
    var gameLink = document.getElementById("game-link");

    // Слушаем событие изменения значения ползунка
    soundSlider.addEventListener("input", function() {
      var volume = soundSlider.value / 100; // Приводим значение ползунка к диапазону от 0 до 1

      // Сохраняем значение громкости в localStorage
      localStorage.setItem("volume", volume);
    });

    // Обработка клика на ссылку "Играть"
    gameLink.addEventListener("click", function(event) {
      event.preventDefault(); // Отменяем стандартное поведение ссылки

      // Открываем страницу game.html
      window.open("game.html", "_blank");
    });
});
