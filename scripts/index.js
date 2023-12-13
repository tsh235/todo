import {completeTask} from './modules/completeTask.js';
import {deleteTask} from './modules/deleteTask.js';
import {editTask} from './modules/editTask.js';
import elems from './modules/elemets.js';
const {
  app,
  userName,
} = elems;

import {formControl} from './modules/formControl.js';
import {renderTasks} from './modules/renderTasks.js';
import {renderToDo} from './modules/renderTodo.js';
import {getStorage} from './modules/serviceStorage.js';

const init = (userName) => {
  const data = getStorage(userName);
  if (data.length === 0) {
    localStorage.setItem(userName, JSON.stringify(data));
  }

  app.classList.add(
      'vh-100',
      'w-100',
      'd-flex',
      'align-items-center',
      'justify-content-center',
      'flex-column',
  );

  const {
    list,
    form,
  } = renderToDo(app);

  renderTasks(list, data);
  formControl(userName, form, list);
  deleteTask(userName, list);
  completeTask(userName, list);
  editTask(userName, list);
};

init(userName);
