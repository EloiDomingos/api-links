const  express = require('express')
const linksController = require('./controllers/linksController')
const linksMiddleware = require('./middlewares/linksMiddleware')

const router = express.Router()



 router.get('/links', linksController.mostrarTodos)
 router.post('/links', linksMiddleware.validacao, linksController.cadastrarLink)
 router.delete('/links/:id', linksController.deletaLink )
 router.put('/links/:id', linksController.atualizaLink)

module.exports = router