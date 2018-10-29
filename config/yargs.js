const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion
    })
    .command('actualizar', 'actualizar una tarea', {
        descripcion: descripcion,
        completado: {
            default: true,
            alias: 'c'
        }
    })
    .command('borrar', 'eliminar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea'
        }
    })

.help()
    .argv;

module.exports = {
    argv
}