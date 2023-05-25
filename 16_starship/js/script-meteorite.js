//считаем ширину экрана, чтобы метеорит пролетал от края до края

function calculateScreenWidth() {
  const fullScreenDiv = document
  .getElementById("full-screen-object");
  
  const rect = fullScreenDiv.getBoundingClientRect();
  console.log('rect метеорита ', rect)
  const rightPosition = rect.right;
  const leftPosition = rect.left;
  const screenWidth = (rightPosition-leftPosition).toFixed(0);
  return(screenWidth)
}

let screenWidth=calculateScreenWidth();
     //console.log('ширина экрана: ' + screenWidth);

//функция для анимирования одного метеорита
function rockAnimation(picture) {

  const image = document
   .getElementById(picture);
  let position = screenWidth;
  image.style.left = position + "px";

  //расчитать ширину изображения  
  const rect = image.getBoundingClientRect();
  const rightPosition = rect.right;
  const leftPosition = rect.left;
  const imageWidth = (rightPosition-leftPosition).toFixed(0);
      //console.log('ширина метеорита: ' + imageWidth)

  // создать анимацию
  let movementRate = null;
  movementRate = setInterval(frame, 5);

  function frame() {

    if (position < -(Number(screenWidth)+Number(imageWidth)))
      position = screenWidth;
      
    position--;  
    image.style.left = position + "px";
  }
}

rockAnimation("rock1");