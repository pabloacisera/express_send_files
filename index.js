const express = require('express');
const app = express();
const path = require('path');
const ejs=require('ejs');
/***************METODO TRADICIONAL: puede servir para una pagina muy pequeña pero no recomendado, su ventaja es que con este metodo se puede enviar cualquier tipo de elemento, como ser imagenes, videos, etc***********/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/contact.html'));
});

/*app.get('/style.css', (req, res)=>{
    res.sendFile(__dirname + '/static/style.css')
})*/
/**************************/

/**tambien podemos crear la carpeta static e indicarle a express que acceda a ella y tome todos sus elementos y si encuentra lo que necesito lo aplique..
 * es importante aclarar que como la ruta aun no esta trazada en el path para poder acceder deberemos usar la extencion del archivo por ejemplo localhots:3000/login.html, de otra manera me dara error
 */

app.use(express.static('public'));

/**otra forma de enviar es con motores de plantillas. Debemos trabajar con la carpeta views
 * una ventaja del motor de plantilla es que nos permite ejecutar javascript dentro del motor
 * esto permitiria por ejemplo la creacion de componente mediante desestructuracion o vanilla javascript como ser <% 2 + 2 %>.
 * En el caso de los componente podemos crear componente reutilizables y guardarlos en partials, por ejemplo el heater y el footer es siempre igual solo cambia el body...
 */
app.set('view engine', 'ejs');

app.get('/engine', (req, res)=>{
    res.render('engine')
})

app.get('/desestructuracion', (req, res)=> {
    res.render('desestructuracion');
});

//////////////////////////////////////////////////////
/**SERVE: es un paquete de npm que me sirve la carpeta public en un servidor...
 * npx  serve  ...y luego elegir que carpeta levantara...
 */
app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});
