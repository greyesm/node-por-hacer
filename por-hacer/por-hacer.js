const fs = require('fs');


let lista = [];

const guardarDB = () => {

    let data = JSON.stringify(lista);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new error('No se grabo', err);

    })
}

const leerDB = () => {

    //cargar en matriz lista, el dato ya grabado
    lista = require('../db/data.json');
    console.log(lista);

}

const crear = (descripcion) => {


    try {
        leerDB();
    } catch (error) {
        lista = [];
    }

    let porHacer = {
        descripcion: descripcion,
        completado: false
    };


    lista.push(porHacer);
    guardarDB();

    return porHacer;
}


const getLista = () => {

    leerDB();
    return lista;
}

const actualizar = (descripcion, estado = true) => {

    leerDB();

    let index = lista.findIndex(tarea => {

        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {

        lista[index].completado = estado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    //lista[index].completado = estado;

    leerDB();

    let nuevoListado = lista.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    //console.log(nuevoListado);

    if (lista.length === nuevoListado.length) {
        return false;
    } else {
        lista = nuevoListado;
        guardarDB();
        return true;
    }



}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}