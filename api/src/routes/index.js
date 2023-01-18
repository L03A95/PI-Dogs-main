const { Router } = require('express');
const {axios} = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {dogRouter} = require('./dogRouter')
const {temperamentsRouter} = require('./temperamentsRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs',dogRouter)
router.use('/temperaments', temperamentsRouter)

module.exports = router;



