import {counter} from './counter.js';
import {createRow} from './createElements.js';
import {addStorage, getStorage} from './serviceStorage.js';

export const formControl = (key, form, list) => {
  const {select, btnSubmit, btnReset, input} = form;

  input.addEventListener('input', () => {
    if (input.value !== '') {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  });

  btnReset.addEventListener('click', () => {
    form.reset();
    btnSubmit.disabled = true;
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const task = input.value;
    let importance;

    switch (select.value) {
      case 'Обычная':
        importance = 'table-light';
        break;
      case 'Важная':
        importance = 'table-warning';
        break;
      case 'Срочная':
        importance = 'table-danger';
        break;
    }

    console.log('importance: ', importance);

    const id = +Math.random().toString().substring(2, 20);
    addStorage(key, task, id, importance);

    const data = getStorage(key);
    list.append(createRow(data[data.length - 1], importance));

    const rows = Array.from(list.querySelectorAll('tr'));
    counter(rows);

    form.reset();
    btnSubmit.disabled = true;
  });
};
