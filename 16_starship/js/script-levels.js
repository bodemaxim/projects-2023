// Создаем конструктор объекта для хранения информации об уровне
export function Lvl(
  minRockSpeed,
  maxRockSpeed,
  minNumberOfRocks,
  maxNumberOfRocks,
  rocksGenerationRate
) {
  this.minRockSpeed = minRockSpeed;
  this.maxRockSpeed = maxRockSpeed;
  this.minNumberOfRocks = minNumberOfRocks;
  this.maxNumberOfRocks = maxNumberOfRocks;
  this.rocksGenerationRate = rocksGenerationRate;
}

// Чем больше значение скорости, тем меньше скорость
export const lvl1 = new Lvl(20, 10, 2, 4, 10000);
export const lvl2 = new Lvl(10, 5, 4, 8, 8000);
export const lvl3 = new Lvl(6, 2, 7, 11, 6000);

export let myLvl = lvl1;


// ФУНКЦИЯ - уведомление
function notify(text) {
  const notification = document.createElement('p');
  notification.classList.add('notification');
  notification.textContent = text;
  
  document.body.appendChild(notification);
  
  setTimeout(removeNotification, 3000);

  function removeNotification() {
    notification.remove();
  }
}

// Функция смены уровня
export function changeLevel() {
  let levelIndex = 1;
  notify('Внимание! На радарах метеоритное поле...');

  const levelChangeInterval = setInterval(() => {
    if (levelIndex === 2) {
      myLvl = lvl2;
      notify('ААА! Их становится больше!');
    }
    
    if (levelIndex === 3) {
      myLvl = lvl3;
      notify('Когда закончится этот АД?');
    }
    
    if (levelIndex === 4) {
      myLvl = undefined;
      clearInterval(levelChangeInterval);
      notify('Путь свободен! ПОБЕДА!!!');
    }

    levelIndex++;

    if (levelIndex > 4) {
      clearInterval(levelChangeInterval);
    }
  }, 20000);
}
