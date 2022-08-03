const findF = require('./COMANDOS/find.js')
const listF = require('./COMANDOS/list.js')
const returnF = require('./COMANDOS/return.js')
const editF = require('./COMANDOS/edit.js')
const filterF = require('./COMANDOS/filter.js')

switch (process.argv[2]) {
  case 'find':
    console.log(findF.find(process.argv[3]))
    break
  case 'filter':
    console.log(filterF.filterF(process.argv[3]))
    break
  case 'edit':
    console.log(editF.editF(process.argv[3], process.argv[4])) // process.argv[3] es el título de la tarea a editar, process.argv[4] es la nueva descripción
    break
  case 'list':
    listF.list()
    break
  case 'return':
    console.log(returnF.returnF(process.argv[3]))
    break
  default:
    console.log('ocurrio algun error')
    break
}