//*************************************************************
//ФУНКЦИЯ - считаем ширину экрана, чтобы использовать в анимации метеорита
//*************************************************************


function calculateScreenWidth() {
  const fullScreenDiv = document.getElementById("element-container");
  const rect = fullScreenDiv.getBoundingClientRect();
  const rightPosition = rect.right;
  const leftPosition = rect.left;
  const screenWidth = (rightPosition - leftPosition).toFixed(0);
  return screenWidth;
}

let screenWidth = calculateScreenWidth();


//*************************************************************
//УРОВНИ СЛОЖНОСТИ
//*************************************************************

import { myLvl, changeLevel } from './script-levels.js';
changeLevel();


//*************************************************************
//ФУНКЦИЯ АНИМАЦИИ МЕТЕОРИТОВ
//*************************************************************

function rockAnimation(myLvl, meteoriteDiv) {

  //создаем рандомные числа для скорости и отправной точки метеорита
  function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;  
    return randomNumber;
  }

  const randomSpeed = generateRandomNumber(myLvl.maxRockSpeed, myLvl.minRockSpeed);
  const randomStartPoint = generateRandomNumber(0, Math.floor(screenWidth/2));

  //задаем стартовое положение дива метеорита
  const image = meteoriteDiv;
  let position = Math.floor(screenWidth) + Math.floor(randomStartPoint);
  image.style.left = position + "px";

  //расчитываем ширину изображения метеорита
  const rect = image.getBoundingClientRect();
  const rightPosition = rect.right;
  const leftPosition = rect.left;
  const imageWidth = (rightPosition - leftPosition).toFixed(0);

  // создаем анимацию - таймер перемещения кадра и функцию перемещения
  let movementRate = null;
  movementRate = setInterval(frame, randomSpeed);

  function frame() {
    if (position < -(Number(screenWidth) + Number(imageWidth)))
      meteoriteDiv.remove();

    position--;
    image.style.left = position + "px";
  }
}

//ТАЙМЕР для срабатывания функции - запуска рандомного кол-ва метеоритов

let movementRate = null;
movementRate = setInterval(() => meteoriteGroupLaunch(myLvl), myLvl.rocksGenerationRate);



//*************************************************************
//ФУНКЦИЯ - ЗАПУСК РАНДОМНОГО КОЛИЧЕСТВА МЕТЕОРИТОВ
//*************************************************************

function meteoriteGroupLaunch(myLvl) {
  
  //создание рандомного числа метеоритов
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumberOfMeteorites = generateRandomNumber(myLvl.minNumberOfRocks, myLvl.maxNumberOfRocks);
  const meteoriteContainer = document.getElementById('element-container');

  // Создаем заданное число дивов-метеоритов и помещаем в 'element-container'
  for (let i = 0; i < randomNumberOfMeteorites; i++) {
    const div = document.createElement('div');
    div.classList.add('meteorite-div');
    div.classList.add('threat');
    div.classList.add('destructible');
    meteoriteContainer.appendChild(div);

    //добавляем в див метеорита картинку
    const img = document.createElement('img');
    img.src = 'media/rock1.png';
    img.classList.add('meteorite-img');
    div.appendChild(img);

    //Задаем картинке метеорита рандомный размер
    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomSize = generateRandomNumber(100, 300);

    img.style.height = randomSize + "px";
    img.style.width = randomSize + "px";

    //Приписываем диву рандомное положение по высоте
    const screenHeight = window.innerHeight;
    const randomPosition = Math.floor(Math.random() * screenHeight);
    div.style.top = randomPosition + 'px';

    //Добавляем столкновение со Старшипом (курсором)
    function addCollideEvent(threatObject) {
      threatObject.addEventListener('mouseover', () => {
        alert('Game over');
      });
    }

    addCollideEvent(div)

    //применяем функцию анимации
    rockAnimation(myLvl, div)
  }
}