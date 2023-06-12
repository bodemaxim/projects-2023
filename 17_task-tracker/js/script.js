// Получаем ссылки на форму и список
const form = document.getElementById('myForm'); //форма ввода задач
const toDoList = document.getElementById('toDoList'); //список, где отображаются задачи

// Функция для добавления кнопок в элементы списка
function addButtonsToItem(listItem) {

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('li-buttons-container');

  // Создаем кнопку удаления
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('li-delete-button', 'li-buttons');
  deleteButton.textContent = '╳';

  deleteButton.addEventListener('click', function () {
    listItem.remove();
  });

  buttonDiv.appendChild(deleteButton);
  listItem.appendChild(buttonDiv);

  // Создаем кнопку редактирования
  const editButton = document.createElement('button');
  editButton.classList.add('li-edit-button', 'li-buttons');
  editButton.textContent = '🖊';

  editButton.addEventListener('click', function () {
    const editedTask = prompt('Измените задачу');

    listItem.textContent = `Обновленная задача: ${editedTask}`;
    addButtonsToItem(listItem);
  });

  buttonDiv.appendChild(editButton);
  listItem.appendChild(buttonDiv);

  // Создаем кнопку выполнения
  const doneButton = document.createElement('button');
  doneButton.classList.add('li-done-button', 'li-buttons');
  doneButton.textContent = '✓';

  doneButton.addEventListener('click', function () {
    //редактируем отображение задачи в списке, чтобы было слово "выполненная" и не было текста от кнопок
    let doneTask=listItem.textContent;
    let regex1=/Новая/g;
    doneTask = doneTask.replace(regex1, "Выполненная");
    let regex2=/╳🖊✓/g;
    doneTask = doneTask.replace(regex2, "");
    let regex3=/Обновленная/g;
    doneTask = doneTask.replace(regex3, "Выполненная");

    listItem.classList.add('doneTask');
  
    listItem.textContent = `${doneTask}`;
    listItem.appendChild(buttonDiv);

    doneButton.removeEventListener('click', arguments.callee);
  });

  buttonDiv.appendChild(doneButton);
  listItem.appendChild(buttonDiv);
}

// Обработчик события отправки формы
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const newTask = document.getElementById('newTask').value;

  const listItem = document.createElement('li');
  listItem.textContent = `Новая задача: ${newTask}`; //почему newTask не виден внутри функции addButtons?

  addButtonsToItem(listItem);

  toDoList.appendChild(listItem);

  // Очищаем значения полей формы
  document.getElementById('newTask').value = '';
});



