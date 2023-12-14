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

      row.classList.remove(importance);
      row.classList.add('table-success');
      row.querySelector('.task').classList.add('text-decoration-line-through');
      row.querySelector('.status').textContent = 'Завершено';
      row.querySelector('.btn-secondary').disabled = true;

      updateStorage(key, id);
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
      cell.contentEditable = true;
      cell.focus();

      cell.addEventListener('blur', () => {
        const editableValue = cell.textContent;
        updateStorage(key, id, editableValue);
      });
    }
  });
};
