const fs = require('fs');

// leer un archivo

console.log('Antes de leer el archivo...');

fs.readFile('index.html', 'utf-8', (err, contenido) => {
     if (err) {
         console.log(err);
         throw err;
     } else {
         console.log(contenido);
     }
     console.log('Mensaje...');
});
 
console.log('Despues de leer el archivo...');

// Cambiar el nombre de un archivo
fs.rename('index.html', 'main.html', (err) => {
     if (err) {
         throw err;
    }
     console.log('Nombre cambiado exitosamente')
});

console.log('Despues de cambiar el nombre del archivo...');

// agregar contenido al final de un archivo
fs.appendFile('index.html', '<p>Hola<p/>', (err) => {
if (err) {
       throw err;
    }
    console.log('Archivo actualizado');
});

console.log('Despues de agregar contenido al archivo...');

// reemplazar todo el contenido del archivo
fs.writeFile('index.html', 'Contenido Nuevo', (err) => {
     if (err) {
         throw err;
     }
     console.log('Contenido reemplazado exitosamente');
});
 
console.log('Despues de reemplazar el contenido del archivo...');

fs.unlink('main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado');
});

console.log('Despues de eliminar el archivo...');