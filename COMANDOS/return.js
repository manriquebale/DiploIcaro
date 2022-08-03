const tasks = require('../tasksData')

module.exports = (title) => {
  let tasksFinded = tasks.filter(task => task.title == title)
  return tasksFinded.map(task => console.log(task.desc))
}
