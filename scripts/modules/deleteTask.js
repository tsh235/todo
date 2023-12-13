import {updateCounter} from './counter.js';
import {removeStorage} from './serviceStorage.js';

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
