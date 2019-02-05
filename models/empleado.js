var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var empleadoSchema = new Schema({
	nombre: { type: String },
	apellido: { type: String },
	edad: { type: Number },
	genero: { type: String }
});


module.exports = mongoose.model('empleados', empleadoSchema);