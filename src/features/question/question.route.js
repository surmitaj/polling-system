import express from 'express'
import QuestionController from './question.controller.js'

const questionRouter = express.Router()
const questionController = new QuestionController()

questionRouter.get('/:id', (req, res) => {
    questionController.viewQuestion(req, res)
})
questionRouter.post('/create', (req, res) => {
    questionController.createQuestion(req, res)
})
questionRouter.post('/:id/options/create', (req, res) => {
    questionController.addOptions(req, res)
})
questionRouter.delete('/:id/delete', (req, res) => {
    questionController.deleteQuestion(req, res)
})

export default questionRouter
