const getTasks = require('./read')
const writeJson = require('./writeJson')

module.exports = (title, desc) => {
  let tasks = getTasks()
  tasks.forEach(task => {
    if (task.title === title) {
      task.desc = desc
      console.log('Tarea editada con exito')
      writeJson(tasks)
    }
  })
}
