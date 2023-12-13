import {counter} from './counter.js';
import {createRow} from './createElements.js';

export const renderTasks = (elem, data) => {
  if (!data) return;

  elem.textContent = '';
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
