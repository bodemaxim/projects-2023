function calculateImageWidth(picture) {
  const image = document
  .getElementById(picture);
  
  const rect = image.getBoundingClientRect();
  const rightPosition = rect.right;
  const leftPosition = rect.left;
  const imageWidth = (rightPosition-leftPosition).toFixed(0);
  return(imageWidth)
}

let imageWidth=calculateImageWidth("background-stars1")
console.log('ширина изображения в глоб обл виимости'+ imageWidth)
let imageWidthX2 = imageWidth*2

//функция для анимирования одной картинки
function starsAnimation(picture, startingPoint) {

  const image = document
   .getElementById(picture);
  let position = startingPoint;
  image.style.left = position + "px";

  //расчитать ширину изображения  
  const rect = image.getBoundingClientRect();
  const rightPosition = rect.right;
  const leftPosition = rect.left;
  const imageWidth = (rightPosition-leftPosition).toFixed(0);

  // создать анимацию
  let movementRate = null;
  movementRate = setInterval(frame, 70);

  function frame() {

    if (position == startingPoint-imageWidth) {
      position = startingPoint;
      position--;
      image.style.left = position + "px";

    } else {
      position--;  
      image.style.left = position + "px";
    }
  }
}

starsAnimation("background-stars1",0);
starsAnimation("background-stars2",imageWidth);
starsAnimation("background-stars3",imageWidthX2);