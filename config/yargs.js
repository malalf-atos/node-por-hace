const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crerar un tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Crerar un tarea por actualizar', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}