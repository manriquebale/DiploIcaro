const tasks = require('../tasksData')
function editF (title, newDescription) {
  let task;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      task = tasks[i]
      task.desc = newDescription
      return task
    }
  }
  return 'tarea no encontrada'
}


module.exports = { editF }
