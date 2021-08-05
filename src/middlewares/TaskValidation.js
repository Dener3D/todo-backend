const TaskModel = require('../model/TaskModel');

const TaskValidation = async (req, res, next) => {
    const { mac, title, description, due_on} = req.body;
    if (!mac)
    return res.status(400).json({ error: 'O mac é obrigatório!'})
    else if (!title)
    return res.status(400).json({ error: "O título é obrigatório!" })
    else if (!description)
    return res.status(400).json({error: "A descrição é obrigatória!"})
    else if (!due_on)
    return res.status(400).json({error: "A data final da tarefa é obrigatória!"})
    else
    next()
}

module.exports = TaskValidation;
