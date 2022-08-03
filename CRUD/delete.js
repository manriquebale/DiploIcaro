const getTasks = require('./read')
const writeJson = require('./writeJson')

module.exports = (title) => {
  let tasks = getTasks()
  let itemToRemove

  tasks.forEach((task, index) => {
    if (task.title === title) {
      itemToRemove = index
    }
  })
  tasks.splice(itemToRemove, 1)
  writeJson(tasks)
  console.log('Tarea eliminada con exito')

}
