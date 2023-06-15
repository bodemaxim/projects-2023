//*************************************************************
//ФУНКЦИЯ - считаем ширину экрана, чтобы использовать в анимации метеорита
//*************************************************************


function calculateScreenWidth() {
  const fullScreenDiv = document.getElementById("meteorite-container");
  const rect = fullScreenDiv.getBoundingClientRect();
  console.log('rect метеорита ', rect);
  const rightPosition = rect.right;
  const leftPosition = rect.left;
  const screenWidth = (rightPosition - leftPosition).toFixed(0);
  return screenWidth;
}

let screenWidth = calculateScreenWidth();



//*************************************************************
//ФУНКЦИЯ АНИМАЦИИ МЕТЕОРИТОВ
//*************************************************************

function rockAnimation(meteoriteDiv) {

  //создаем рандомные числа для скорости и отправной точки метеорита
  function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;  
    return randomNumber;
  }

  const randomSpeed = generateRandomNumber(2, 15);
  const randomStartPoint = generateRandomNumber(0, Math.floor(screenWidth/2));
  console.log('стартовая точка метеорита X ', randomStartPoint)

  //задаем стартовое положение дива метеорита
  const image = meteoriteDiv
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
movementRate = setInterval(meteoriteGroupLaunch, 7000);



//*************************************************************
//ФУНКЦИЯ - ЗАПУСК РАНДОМНОГО КОЛИЧЕСТВА МЕТЕОРИТОВ
//*************************************************************

function meteoriteGroupLaunch() {
  
  //создание рандомного числа метеоритов
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumberOfMeteorites = generateRandomNumber(4, 10);
  const meteoriteContainer = document.getElementById('meteorite-container');

  // Создаем заданное число дивов-метеоритов и помещаем в 'meteorite-container'
  for (let i = 0; i < randomNumberOfMeteorites; i++) {
    const div = document.createElement('div');
    div.classList.add('meteorite-div');
    div.classList.add('threat');
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

    //применяем функцию анимации
    rockAnimation(div)
  }
}