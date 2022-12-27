const fs = require('fs');

// leer un archivo

console.log('Antes de leer el archivo...');

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo);
    
console.log('Despues de leer el archivo...');

// Cambiar el nombre de un archivo
fs.renameSync('index.html', 'main.html');

console.log('Despues de cambiar el nombre del archivo...');

// agregar contenido al final de un archivo
fs.appendFileSync('main.html', '<p>Hola<p/>', (err) => {
if (err) {
       throw err;
    }
    console.log('Archivo actualizado');
});

console.log('Despues de agregar contenido al archivo...');

// reemplazar todo el contenido del archivo
fs.writeFileSync('main.html', 'Contenido Nuevo', (err) => {
     if (err) {
         throw err;
     }
     console.log('Contenido reemplazado exitosamente');
});
 
console.log('Despues de reemplazar el contenido del archivo...');

// Eliminar archivo
fs.unlinkSync('main.html');

console.log('Despues de eliminar el archivo...');