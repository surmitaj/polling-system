import QuestionRepository from "./question.repository.js";

export default class QuestionController {
    constructor() {
        this.questionRepository = new QuestionRepository()
    }

    async viewQuestion(req, res) {
        try {
            const id = req.params.id
            const question = await this.questionRepository.viewQuestion(id)
            res.status(200).send(question)
        } catch(err) {
            console.log(err)
            res.status(200).send('Something went wrong')
        }
    }

    async createQuestion(req, res) {
        try {
            const { questionText } = req.body
            const newQuestion = await this.questionRepository.createQuestion(questionText)
            res.status(201).send(newQuestion)
        } catch(err) {
            console.log(err)
            res.status(201).send('Something went wrong')
        }
    }

    async addOptions(req, res) {
        try {
            const id = req.params.id
            const options= req.body.options
            await this.questionRepository.addOptions(id, options)
            res.status(201).send('Options added')
        } catch(err) {
            console.log(err)
            res.status(200).send('Something went wrong')
        }
    }

    async deleteQuestion(req, res) {
        try {
            const id = req.params.id
            await this.questionRepository.deleteQuestion(id)
            res.status(204).send("Deleted")
        } catch(err) {
            console.log(err)
            res.status(200).send('Something went wrong')
        }
    }
}