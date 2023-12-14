import {getStorage} from './serviceStorage.js';
import {counter} from './handlers.js';
import {
  createTitle,
  createForm,
  createTableWrapper,
  createTable,
  createRow,
} from './createElements.js';

export const renderToDo = (app) => {
  const title = createTitle();
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
    const status = row.querySelector('.status').textContent;
    const importance = row.dataset.importance;
    if (status === 'Завершено') {
      row.classList.remove(importance);
      row.classList.add('table-success');
      row.querySelector('.task').classList.add('text-decoration-line-through');
      row.querySelector('.btn-secondary').disabled = true;
    }
  });
  counter(allRow);
  elem.append(...allRow);
};
