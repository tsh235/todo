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

  // const userName = modalFormControl((user) => user);
  const userName = prompt('Введите Ваше имя');

  console.log('userName: ', userName);
  const {
    list,
    form,
  } = renderToDo(app);

  renderTasks(userName, list);
  formControl(userName, form, list);
  deleteTask(userName, list);
  completeTask(userName, list);
  editTask(userName, list);
};

init();
