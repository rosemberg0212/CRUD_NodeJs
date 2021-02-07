let express = require('express');
let router = express.Router();

let conexion = require('./database/db.js');

router.get('/',(req, res)=>{
	
	conexion.query('SELECT * FROM users', (error,results)=>{
		if(error)
		{
			throw error;
		}else{
			res.render('index', {results:results});
		}
	});
});

//ruta para crear registro
router.get('/create',(req,res)=>{
	res.render('create');
});

//ruta para editar
router.get('/edit/:id', (req, res)=>{
	const id = req.params.id;
	conexion.query('SELECT * FROM users WHERE id = ?', [id], (error, results)=>{
		if(error)
		{
			throw error;
		}else{
			res.render('edit', {user:results[0]});
		}
	});
});


//ruta para eliminar registro
router.get('/delete/:id',(req, res)=>{
	const id = req.params.id;
	conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
		if(error)
		{
			throw error;
		}else{
			res.redirect('/');
		}
	});
});

const crud = require('./controles/crud.js');

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;