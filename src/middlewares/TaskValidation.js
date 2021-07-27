const TaskModel = require('../model/TaskModel');

const TaskValidation = async (req, res, next) => {
    const { mac, titulo, descricao, data_fim } = req.body;
    if (!mac)
    return res.status(400).json({ error: 'O mac é obrigatório!'})
    else if (!titulo)
    return res.status(400).json({ error: "O título é obrigatório!" })
    else if (!descricao)
    return res.status(400).json({error: "A descrição é obrigatória!"})
    else if (!data_fim)
    return res.status(400).json({error: "A data final da tarefa é obrigatória!"})
    else
    next()
}

module.exports = TaskValidation;