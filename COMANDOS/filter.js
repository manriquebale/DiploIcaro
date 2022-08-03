const tasks = require('../tasksData')

module.exports = (title) => {
  return console.log(tasks.filter(task => task.title == title))
}
