import OptionRepository from "./option.repository.js";

export default class OptionController {
    constructor() {
        this.optionRepository = new OptionRepository()
    }

    async addVote(req, res) {
        try {
            const id = req.params.id
            const option = await this.optionRepository.addVote(id)
            res.status(201).send(option)
        } catch(err) {
            console.log(err)
            res.status(200).send('Something went wrong')
        }
    }

    async deleteOption(req, res) {
        try {
            const id = req.params.id
            await this.optionRepository.deleteOption(id)
            res.status(204).send("Deleted")
        } catch(err) {
            console.log(err)
            res.status(200).send('Something went wrong')
        }
    }

}