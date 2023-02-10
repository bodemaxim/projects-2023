/**
 * Выводит таблицу умножения
 * 
 * @param {*} () - максимальный множитель в таблице
 * @returns таблица умножения до заданного множителя
 */

function makeTable(){

  /*взять значение параметра из HTML*/
  const maxMultiplier = document.getElementById("number").value

  /*создаем массив в который пойдут массивы-строки*/
  const arrayTable = []
    
  /*создаем образец последней строки (для выравнивания в будущем)*/
  function createLastArray(maxMultiplier) {
    let lastRow = [maxMultiplier]

    for (let i = 1; i <= maxMultiplier; i++)
      lastRow.push(i*maxMultiplier)

    return lastRow
  }
  lastRowSaved = createLastArray(maxMultiplier)

  /*переводим массив элементов последней строки таблицы
  в массив количества символов в каждом элементе*/
  columnWidthArray = []

  lastRowSaved.forEach((element) => {
    let newString = element.toString()
    let newWidth = newString.length

    return columnWidthArray.push(newWidth)
  })

  /*функция по индексу элемента массива возвращает его значение*/
  function maxWidthTeller(array, index) {

    return array[index]
  }
  
  /*функция принимает на вход массив и индекс элемента,
  на выход дает количество пробелов чтобы уровнять элемент с самым широкими элементом столбца*/
  
  function spaceAdder(array, index){
    let wantedWidth = maxWidthTeller(columnWidthArray, index)
    let elementString = array[index].toString()
    const factualWidth = elementString.length
    const spaces = ' '.repeat(wantedWidth - factualWidth)

    return spaces
  }

  /*создаем особую первую строку*/
  function createFirstArray(maxMultiplier) {
    let firstRow = ['']
    firstRow[0] = spaceAdder(firstRow, 0) + ''

    for (let i = 1; i <= maxMultiplier; i++) {
      firstRow.push(i)
      firstRow[i] = spaceAdder(firstRow, i) + i  /*пишем элементы в массив с пробелами для выравнивания*/
    }

    firstRowString = firstRow.join(' ') /*здесь оставим пробел*/
    arrayTable.push(firstRowString)
  }
  createFirstArray(maxMultiplier)

  /*создаем обычные строки в таблице*/
  for (let i = 1; i <= maxMultiplier; i++) {
      function createArray(i, maxMultiplier) {
        let newRow = [i]
        newRow[0] = spaceAdder(newRow, 0) + i

        for (let i2 = 1; i2 <= maxMultiplier; i2++) {
          newRow.push(i*i2)
          newRow[i2] = spaceAdder(newRow, i2) + i*i2 /*пишем элементы в массив с пробелами для выравнивания*/
        }

        newRowString = newRow.join(' ')
        arrayTable.push(newRowString)
      }
      createArray(i, maxMultiplier)
  }

  arrayTableString = arrayTable.join('\n')

  /*послать результат в HTML*/
  document.getElementById("table").innerHTML = arrayTableString
}