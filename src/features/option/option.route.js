import express from 'express'
import OptionController from './option.controller.js'

const optionRouter = express.Router()
const optionController = new OptionController()

optionRouter.post('/:id/add_vote', (req, res) =>{
    optionController.addVote(req, res)
})
optionRouter.delete('/:id/delete', (req, res) => {
    optionController.deleteOption(req, res)
})

export default optionRouter