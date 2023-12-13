import {
  createTitle,
  createForm,
  createTableWrapper,
  createTable,
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
