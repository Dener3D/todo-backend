const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
   mac : {type: String, required: true},
   titulo: {type: String, required: true},
   descricao: {type: String, required: true},
   criado: {type: Date, default: Date.now()},
   data_fim: {type: Date, required: true},
   done: {type: Boolean, default: false}
});

module.exports = mongoose.model('Task', TaskSchema);