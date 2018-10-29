//const argv2 = require('yargs').argv;

const argv2 = require('./config/yargs.js').argv;

const porHacer = require('./por-hacer/por-hacer.js');
const colors = require('colors');

console.log(argv2.descripcion);


let comando = argv2._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv2.descripcion);
        console.log(tarea);
        break;
    case 'listar':

        let mostrar = porHacer.getLista();

        for (let tarea of mostrar) {

            console.log('====='.green);
            console.log(tarea.descripcion);
            console.log('Estado'.red, tarea.completado);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv2.descripcion, argv2.completado);
        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv2.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('no se reconoce el comando');
}