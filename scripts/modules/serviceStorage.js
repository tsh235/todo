export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

export const addStorage = (key, task, id, importance) => {
  const data = getStorage(key);

  data.push({
    id,
    importance,
    task,
    'status': 'в процессе',
  });
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = (key, id) => {
  const data = getStorage(key);
  const filteredData = data.filter(item => item.id !== +id);
  localStorage.setItem(key, JSON.stringify(filteredData));
};

export const updateStorage = (key, id, task) => {
  const data = getStorage(key);

  data.forEach(item => {
    if (item.id === +id && task) {
      item.task === task ? item.task : item.task = task;
    } else if (item.id === +id && !task) {
      item.status = 'Завершено';
    }
  });

  localStorage.setItem(key, JSON.stringify(data));
};

