const conexion = require('../database/db.js');

exports.save = (req, res)=>{
	const user = req.body.user;
	const rol = req.body.rol;
	conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error, results)=>{
		if(error)
		{
			throw error;
		}else{
			res.redirect('/');//rediregir pagina principal
		}
	});
}

exports.update = (req, res)=>{
	const id = req.body.id;
	const user = req.body.user;
	const rol = req.body.rol;
	conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user, rol:rol}, id], (error, results)=>{
		if(error)
		{
			throw error;
		}else{
			res.redirect('/');//rediregir pagina principal
		}
	});
}