const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
// console.log(argv);

switch (comando) {
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('============Por hacer============='.green);
            console.log('Tarea:  '.green, colors.yellow(tarea.descripcion));
            console.log('estado:  '.green, tarea.completado);
            console.log('=================================='.green);
        }
        break;
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let eliminado = porHacer.borrar(argv.descripcion);
        console.log(eliminado);
        break;
}