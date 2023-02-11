/* Task 2

ВРЕМЕНИ ЗАТРАЧЕНО: 10 минут

Написать метод/функцию, который/которая на вход принимает число (float),
а на выходе получает число, округленное до пятерок.
Пример:
27 => 25, 27.8 => 30, 41.7 => 40.
*/

/**
 * Функция принимает число и округляет его до 5.
 * 
 * @param {*} x - число к округлению
 * @returns число, округленное до 5 
 */

function roundToFive() {
  const x = document.getElementById("numberToRound").value

  const roundedNumber = Math.round(x/5) * 5

  document.getElementById("roundedNumber")
    .innerHTML = roundedNumber;
  }