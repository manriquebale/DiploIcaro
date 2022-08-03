const tasks = require('../tasksData')

function list() {
    for (let i = 0; i < tasks.length; i++) {
      console.log(tasks[i].title)
      
    }
}

module.exports = { list }
