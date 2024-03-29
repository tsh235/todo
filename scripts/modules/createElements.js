export const createTitle = (key) => {
  const title = document.createElement('h3');
  title.textContent = `Todo App ${key}`;

  return title;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');

  const select = document.createElement('select');
  select.classList.add('form-select', 'me-3', 'mb-0', 'col');

  const optionNormal = document.createElement('option');
  optionNormal.selected = true;
  optionNormal.textContent = 'Обычная';

  const optionImportant = document.createElement('option');
  optionImportant.textContent = 'Важная';

  const optionUrgent = document.createElement('option');
  optionUrgent.textContent = 'Срочная';

  select.append(optionNormal, optionImportant, optionUrgent);

  const label = document.createElement('label', 'col');
  label.classList.add('form-group', 'me-3', 'mb-0');

  const input = document.createElement('input');
  input.classList.add('form-control');
  input.type = 'text';
  input.placeholder = 'ввести задачу';

  label.append(input);

  const btnSubmit = document.createElement('button', 'col');
  btnSubmit.classList.add('btn', 'btn-primary', 'me-3');
  btnSubmit.type = 'submit';
  btnSubmit.textContent = 'Сохранить';
  btnSubmit.disabled = true;

  const btnReset = document.createElement('button', 'col');
  btnReset.classList.add('btn', 'btn-warning');
  btnReset.type = 'button';
  btnReset.textContent = 'Очистить';

  form.append(select, label, btnSubmit, btnReset);
  form.select = select;
  form.input = input;
  form.btnSubmit = btnSubmit;
  form.btnReset = btnReset;

  return form;
};

export const createTableWrapper = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  return tableWrapper;
};

export const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `);

  const tbody = document.createElement('tbody');

  table.append(thead, tbody);
  table.tbody = tbody;

  return table;
};

export const createRow = ({id, task, status, importance}) => {
  const tr = document.createElement('tr');
  tr.classList.add('task-row', importance);
  tr.dataset.id = id;
  tr.dataset.importance = importance;
  tr.dataset.status = status;

  const tdNum = document.createElement('td');
  tdNum.classList.add('number');

  const tdTask = document.createElement('td');
  tdTask.classList.add('task');
  tdTask.textContent = task;

  const tdStatus = document.createElement('td');
  tdStatus.classList.add('status');
  tdStatus.textContent = status;

  const tdBtns = document.createElement('td');

  const btnEdit = document.createElement('button');
  btnEdit.classList.add('btn', 'btn-secondary', 'me-2');
  btnEdit.textContent = 'Редактировать';

  const btnDel = document.createElement('button');
  btnDel.classList.add('btn', 'btn-danger', 'me-2');
  btnDel.textContent = 'Удалить';

  const btnComplete = document.createElement('button');
  btnComplete.classList.add('btn', 'btn-success');
  btnComplete.textContent = 'Завершить';

  tdBtns.append(btnEdit, btnDel, btnComplete);

  tr.append(tdNum, tdTask, tdStatus, tdBtns);

  return tr;
};

export const createModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.style.display = 'block';
  modal.style.backgroundColor = '#f9f9f9';

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');

  const modalForm = document.createElement('form');
  modalForm.insertAdjacentHTML('beforeend', `
    <h5 class="form__title">Введите имя пользователя</h5>
    <div class="mb-3">
      <label class="form-group">
        <input class="form-control" tabindex="1"
          type="text" name="userName" placeholder="введите имя">
      </label>
    </div>
    <button type="submit" class="btn btn-primary" disabled>Сохранить</button>
  `);

  modalBody.append(modalForm);
  modalContent.append(modalBody);
  modalDialog.append(modalContent);
  modal.append(modalDialog);
  modal.modalForm = modalForm;
  document.body.append(modal);

  return {
    modal,
    modalForm,
  };
};
