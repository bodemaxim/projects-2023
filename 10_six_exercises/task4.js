/*

ВРЕМЕНИ ЗАТРАЧЕНО: 1 час

Задача 4
Написать метод/функцию, который/которая на вход принимает целое число,
а на выходе возвращает то, является ли число простым
(не имеет делителей кроме 1 и самого себя).
*/


/**
 * Функция показывает, является ли число простым
 * 
 * @param {*} x - число на проверку
 * @returns true - число является простым, false - число НЕ является простым
 */

function primeTester(x) {

  const testArray = [];
    for (let i = 2; i < x; i++) 
        testArray.push(i);
  

  const resultsArray = []

  testArray.forEach((element) => {
    let divisibilityTest = x/element
    if (Number.isInteger(divisibilityTest) == true) {
      let elementResult = true /*делится*/
      resultsArray.push(elementResult);
    }
    else {
      let elementResult = false /*не делится*/
      resultsArray.push(elementResult);
    }
  })

    answer = resultsArray.every((element) => {
      return element == false})

  return console.log('Ваше число простое: ' + answer)
}

/*Type here*/
primeTester(5)

