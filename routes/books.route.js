const { Router } = require('express')
const { bookController } = require('../controllers/books.controller')

const router = Router()

router.post("/books", bookController.addBook)
router.delete('/books/:id', bookController.deleteBook)
router.patch('/books/:id', bookController.updateBook)
router.get('/books/:id', bookController.getBookId)
router.get('/books', bookController.getBook)
router.get('/books/janr/:id', bookController.getBookJanr)



module.exports = router