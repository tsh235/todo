import {getStorage} from './serviceStorage.js';
import {counter} from './handlers.js';
import {
  createTitle,
  createForm,
  createTableWrapper,
  createTable,
  createRow,
} from './createElements.js';

export const renderToDo = (app, key) => {
  const title = createTitle(key);
  const form = createForm();
  const tableWrapper = createTableWrapper();
  const table = createTable();

  tableWrapper.append(table);
  app.append(title, form, tableWrapper);

  return {
    form,
    table,
    list: table.tbody,
  };
};

export const renderTasks = (key, elem) => {
  const data = getStorage(key);
  if (data.length === 0) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  if (!data) return;

  const allRow = data.map(createRow);
  allRow.forEach(row => {
    const importance = row.dataset.importance;
    const status = row.dataset.status;
    if (status === 'завершено') {
      row.classList.remove(importance);
      row.classList.add('table-success');
      row.querySelector('.task').classList.add('text-decoration-line-through');
      row.querySelector('.btn-secondary').disabled = true;
      row.querySelector('.btn-success').textContent = 'Возобновить';
    }
  });
  counter(allRow);
  elem.append(...allRow);
};
