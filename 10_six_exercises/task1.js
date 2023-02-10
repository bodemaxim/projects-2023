/* Task 1

ВРЕМЕНИ ЗАТРАЧЕНО: 5 минут

Написать метод/функцию, который/которая на вход принимает массив городов.
В качестве результата возвращает строку, где города разделены запятыми,
а в конце стоит точка. 
Пример:
«Москва, Санкт-Петербург, Воронеж.» 
*/

/**
 * Превращает массив городов в список с запятыми и точкой в конце.
 * 
 * @param {*} arrayOfCities - массив с названиями городов
 * @returns строка, в которой города разделены ',' и в конце '.'.
 */

let citiesList = ['Paris', 'Madrid', 'Rome', 'London'];

function makeLine(arrayOfCities) {
    const commasList = arrayOfCities.join(', ');
    const finalList = commasList + '.'
    console.log(finalList)
}

makeLine(citiesList)
