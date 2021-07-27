const express = require('express');
const router = express.Router();
require('dotenv').config();

const TaskController = require('../controller/TaskController');
const TaskoValidation = require('../middlewares/TaskValidation');

router.post('/', TaskoValidation, TaskController.create);
router.get('/filter/all', TaskController.all);
router.get('/:id', TaskController.getOne);
router.delete('/:id', TaskController.delete);
router.delete('/all/delete', TaskController.deleteAll);
router.put('/:id', TaskController.update);

module.exports = router;