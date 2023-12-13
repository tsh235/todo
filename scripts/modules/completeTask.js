import {updateStorage} from './serviceStorage.js';

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
