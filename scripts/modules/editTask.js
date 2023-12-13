import {updateStorage} from './serviceStorage.js';

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
