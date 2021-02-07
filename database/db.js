let mysql = require('mysql');

let conexion = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'crud_nodejs',
	port:3307
})

conexion.connect((error)=>{
	if(error)
	{
		console.error(`el error de conexion es ${error}`);
		return 
	}
	console.log('Conexion exitosa');
})

module.exports = conexion;