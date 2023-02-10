/*

ВРЕМЕНИ ЗАТРАЧЕНО: 45 минут.

Написать метод, который определяет, какие элементы присутствуют в двух
экземплярах в каждом из массивов (= в двух и более, причем в каждом).
На вход подаются два массива. На выходе массив с необходимыми
совпадениями.

Пример:
[7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
На выходе [1, 17]

*/

const array1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
const array2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]

/**
 * функция находит дубликаты в двух массивах, а затем показывает, какие дубликаты общие в обоих массивах
 * 
 * @param {*} array1 массив 1
 * @param {*} array2 массив 2
 * @returns массив с найденными дубликатами
 */
function searchArrays(array1, array2) {

  /*найти повторы в массиве и сохранить в новом массиве не дублируя значения*/
  function findDuplicates(arr) {
    const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);

    return [...new Set(filtered)]
  }
  
  const duplicatesFromArray1 = findDuplicates(array1)
  const duplicatesFromArray2 = findDuplicates(array2)
  const duplicatesMerged = duplicatesFromArray1.concat(duplicatesFromArray2)
  const duplicatesInBoth = findDuplicates(duplicatesMerged)

  return console.log(duplicatesInBoth)
}

searchArrays(array1,array2)