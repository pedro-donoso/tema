const fs = require('fs');

// fs.readFile('index.html', 'utf-8', (err, contenido) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     } else {
//         console.log(contenido);
//     }
//     console.log('Mensaje...');
// });

fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Nombre cambiado exitosamente')
});

