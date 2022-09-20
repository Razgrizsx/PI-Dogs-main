const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const razaMiddleware = require('../middleware/raza.js');
const temperamentoMiddleware = require('../middleware/temperamento.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', razaMiddleware);
router.use('/temperaments', temperamentoMiddleware);

module.exports = router;
