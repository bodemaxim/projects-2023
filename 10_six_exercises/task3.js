/* Task 3

ВРЕМЕНИ ЗАТРАЧЕНО: 1 час

Написать метод/функцию, который/которая на вход принимает число (int),
а на выходе выдает слово “компьютер” в падеже, соответствующем
указанному количеству. Например, «25 компьютеров»,
«41 компьютер», «1048 компьютеров».
*/

const numberOfComputers = 20

/**
 * функция принимает число и указывает правильный падеж слова "компьютер" для этого числа
 * 
 * @param {*} x - число
 * @returns - правильный падеж слова "компьютер"
 */
function guessCaseByNumber(x) {
  
  let nounCase = ''

  if (/^1$|[^1]1/.test(x) == true) {
    nounCase = 'komputer'
  }
    else if (/^2$|^3$|^4$/.test(x) == true) {
      nounCase = 'komputera'
    }
      else {
        nounCase = 'komputerov'
      }
  return nounCase
}

console.log('Printing out your number and \"Computer\" in the right case: '
        + numberOfComputers + ' ' + guessCaseByNumber(numberOfComputers))


/*Test the case guesser*/

const myArray = [];

for (let i = 1; i <= 100; i++) {
   myArray.push(i);
}

myArray.forEach((element) =>
  console.log(element + ' ' + guessCaseByNumber(element)))
