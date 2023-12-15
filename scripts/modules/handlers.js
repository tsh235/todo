import {updateStorage} from './serviceStorage.js';
import {removeStorage} from './serviceStorage.js';

export const counter = (rows) => {
  let counter = 1;

  rows.forEach(row => {
    row.dataset.index = counter;
    row.querySelector('.number').textContent = counter;
    counter++;
  });
};

export const updateCounter = (list, index) => {
  const rows = Array.from(list.querySelectorAll('tr'));

  rows.forEach((row, i) => {
    if (i >= index) {
      row.dataset.index -= 1;
      row.querySelector('.number').textContent = row.dataset.index;
    }
  });
};

export const completeTask = (key, list) => {
  list.addEventListener('click', ({target}) => {
    if (target.closest('.btn-success')) {
      const row = target.closest('.task-row');
      const id = row.dataset.id;
      const importance = row.dataset.importance;
      const status = row.dataset.status;

      row.classList.toggle(importance);
      row.classList.toggle('table-success');
      row.querySelector('.task')
          .classList.toggle('text-decoration-line-through');

      switch (status) {
        case 'в процессе':
          row.dataset.status = 'завершено';
          row.querySelector('.status').textContent = 'завершено';
          row.querySelector('.btn-success').textContent = 'Выполнено';
          row.querySelector('.btn-secondary').disabled = true;
          updateStorage(key, id);
          break;

        case 'завершено':
          row.dataset.status = 'в процессе';
          row.querySelector('.status').textContent = 'в процессе';
          row.querySelector('.btn-success').textContent = 'Завершить';
          row.querySelector('.btn-secondary').disabled = false;
          updateStorage(key, id);
          break;
      }
    }
  });
};

export const deleteTask = (key, list) => {
  list.addEventListener('click', ({target}) => {
    if (target.closest('.btn-danger')) {
      const confirmDel = confirm('Вы действительно хотите удалить задачу?');
      if (!confirmDel) return;

      const row = target.closest('.task-row');
      const id = row.dataset.id;
      const index = row.dataset.index;

      removeStorage(key, id);
      updateCounter(list, index);
      row.remove();
    }
  });
};

export const editTask = (key, list) => {
  list.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.btn-secondary')) {
      const row = target.closest('.task-row');
      const id = row.dataset.id;
      const cell = row.querySelector('.task');
      let editableValue;

      switch (target.textContent) {
        case 'Редактировать':
          target.textContent = 'Сохранить';
          cell.contentEditable = true;
          cell.focus();
          break;
        case 'Сохранить':
          target.textContent = 'Редактировать';
          cell.blur();
          editableValue = cell.textContent;
          updateStorage(key, id, editableValue);
          break;
      }
    }
  });
};
