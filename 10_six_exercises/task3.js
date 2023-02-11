/* Task 3

ВРЕМЕНИ ЗАТРАЧЕНО: 1 час

Написать метод/функцию, который/которая на вход принимает число (int),
а на выходе выдает слово “компьютер” в падеже, соответствующем
указанному количеству. Например, «25 компьютеров»,
«41 компьютер», «1048 компьютеров».
*/

/**
 * функция принимает число и указывает правильный падеж слова "компьютер" для этого числа
 * 
 * @param {*} x - число
 * @returns - правильный падеж слова "компьютер"
 */
function guessCaseByNumber() {
  
/*взять значение параметра
  (числа на округление) из HTML*/
const x = document.getElementById("numberOfComputers").value


  let nounCase = ''

  if (/^1$|[^1]1/.test(x) == true) {
    nounCase = 'komputer'
  }
    else if (/^2$|^3$|^4$|[^1]4/.test(x) == true) {
      nounCase = 'komputera'
    }
      else {
        nounCase = 'komputerov'
      }

  /*послать результат в HTML*/
  document.getElementById("caseOfComputers").innerHTML = nounCase
}