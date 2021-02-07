const express = require('express');
const app = express();

/*app.get('/',(peticion, respuesta)=>{
	respuesta.send('hola');
});*/

app.set('view engine', 'ejs');//invocar motor de plantilla ejs

app.use(express.urlencoded({extended:false}));//cacturar los datos del formulario
app.use(express(JSON));

app.use('/', require('./router.js'));

app.listen(5000, ()=>{
	console.log('server corriendo en http://localhost:5000');
});