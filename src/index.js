const express = require("express");
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors())
require('dotenv').config();

const EquipamentoRoute = require('./routes/TaskRoute');
server.use('/', EquipamentoRoute);

server.listen(process.env.PORT || 3000, () => {
    console.log("API ONLINE");
});