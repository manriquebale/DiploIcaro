const tasks = require('../tasksData')

module.exports = (title) => {
  let flag = false;
  let filtradas = tasks.filter(task => task.title == title)
  if (filtradas.length > 0) {
    flag = true
  }
  console.log(flag)
}