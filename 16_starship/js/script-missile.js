// функция - проверяем состоялось ли столкновение
function checkCollision(missileRect, destructibleDiv) {
  console.log("check coll");
  for (let i = 0; i < destructibleDiv.length; i++) {
    const destructibleRect = destructibleDiv[i].getBoundingClientRect();
  if(
    missileRect.right >= destructibleRect.left &&
    missileRect.top >= destructibleRect.top &&
    missileRect.bottom <= destructibleRect.bottom) {
      console.log("found collision");
      return destructibleDiv[i];
    }

}
return null;
}
  
  //функция анимации снаряда
  
  function missileAnimation(missileDiv) {

    const image = missileDiv;
    let position = missileDiv.offsetLeft; //актуальное положение дива
    image.style.left = position + "px";

    // создаем анимацию - таймер перемещения кадра и функцию перемещения
    let movementRate = null;
    movementRate = setInterval(frame, 5);

    function frame() {
    if (position > Number(window.innerWidth)) {
      missileDiv.remove();
    }
    
    position++;
    image.style.left = position + "px";

    //обработчик столкновения
    const destructibleDiv = document.getElementsByClassName('destructible');
    const missileRect = missileDiv.getBoundingClientRect();

    //удаляем столкнувшиеся снаряд и предмет
    const collision =  checkCollision(missileRect, destructibleDiv) 
    
    if (collision != null) {
      missileDiv.remove();
      collision.remove();
    }
  }
}

//обработчик события клика - выстрел

let canShoot = true;

document.addEventListener('click', (event) => {

  if (!canShoot) {
    return; // Exit the function if it's on cooldown
  }

  const missile = document.createElement('div');
  missile.classList.add('missile');
  missile.style.left = `${event.clientX}px`;
  missile.style.top = `${event.clientY}px`;
  
  //добавляем в див снаряда картинку
  const img = document.createElement('img');
  img.src = 'media/basic-bolt.png';
  img.classList.add('bolt-img');
  missile.appendChild(img);

  document.body.appendChild(missile);

  missileAnimation(missile);

  // Set the cooldown
  canShoot = false;
  setTimeout(() => {
    canShoot = true;
  }, 1500); // Set the cooldown period to 2 seconds (2000 milliseconds)
});

