const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
   mac : {type: String, required: true},
   title: {type: String, required: true},
   description: {type: String, required: true},
   type: {type: String, required: true},
   created: {type: Date, default: Date.now()},
   due_on: {type: Date, required: true},
   done: {type: Boolean, default: false},
   priority: {type: Boolean, default: false}
});

module.exports = mongoose.model('Task', TaskSchema);
