// При загрузке страницы
window.addEventListener("load", function() {
  var urlParams = new URLSearchParams(window.location.search);
  var volume = urlParams.get("volume");

  var musicPlayer = document.getElementById("music-player");
  musicPlayer.volume = volume; // Устанавливаем громкость воспроизведения
});
