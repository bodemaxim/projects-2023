// ФУНКЦИЯ - получаем настройки громкости со страницы index

export function createSoundSettings() {
  // Move the variable declarations inside this function
  var explosionAudio = document.getElementById("explosion-audio");
  var shotAudio = document.getElementById("shot-audio");

  // Получаем сохраненное значение громкости из localStorage
  var volume = localStorage.getItem("volume");
  if (volume !== null) {
    explosionAudio.volume = volume;
    shotAudio.volume = volume;
  }

  // Assign them as properties of the window object
  window.explosionAudio = explosionAudio;
  window.shotAudio = shotAudio;
}

// Вызываем функцию при загрузке страницы
window.onload = function() {
  createSoundSettings();
}

// задаем функции проигрывания эффектов

export function playExplosionSound() {
  // Access the explosionAudio property from the window object
  window.explosionAudio.currentTime = 0;
  window.explosionAudio.play();
}

export function playShotSound() {
  // Access the shotAudio property from the window object
  window.shotAudio.currentTime = 0;
  window.shotAudio.play();
}
