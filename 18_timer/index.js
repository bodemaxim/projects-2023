const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

/* форматируем числа часов, минут или секунд:
   прибавляем 0 перед цифрой, если значение меньше 10.*/
const formatTime = (time) => {
  return String(time).padStart(2, '0');
};

//создаем аниматор таймера
const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    let remainingSeconds = seconds;
    clearInterval(intervalId);

    // Используем setInterval, чтобы каждую секунду обновлять таймер
    intervalId = setInterval(() => {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      // Обновляем содержимое элемента span (таймер) с отформатированным временем
      timerEl.textContent = `${formatTime(hours)}:${formatTime(
        minutes
      )}:${formatTime(seconds)}`;

      remainingSeconds--; //уменьшаем количество секунд на 1

      //если таймер истекает
      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        timerEl.textContent = '00:00:00';
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очищаем input так, чтобы в значении оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
