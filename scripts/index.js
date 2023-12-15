import {formControl, modalFormControl} from './modules/formControl.js';
import {renderTasks, renderToDo} from './modules/render.js';
import {deleteTask, completeTask, editTask} from './modules/handlers.js';

const init = () => {
  const app = document.querySelector('.app-container');
  app.classList.add(
      'vh-100',
      'w-100',
      'd-flex',
      'align-items-center',
      'justify-content-center',
      'flex-column',
  );

  let userName;

  modalFormControl(user => {
    userName = user;

    if (userName === undefined) {
      return;
    }

    const {list, form} = renderToDo(app, userName);

    renderTasks(userName, list);
    formControl(userName, form, list);
    deleteTask(userName, list);
    completeTask(userName, list);
    editTask(userName, list);
  });
};

init();
