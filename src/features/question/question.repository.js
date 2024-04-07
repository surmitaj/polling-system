import mongoose from 'mongoose'
import { questionSchema } from './question.schema.js'
import { optionSchema } from '../option/option.schema.js'

const QuestionModel = mongoose.model('Question', questionSchema)
const OptionModel = mongoose.model('Option', optionSchema)

class QuestionRepository {
    constructor() {
        this.collection = 'questions'
    }

    async viewQuestion(questionId){
        return await QuestionModel.findOne({_id: new mongoose.Types.ObjectId(questionId)})
    }

    async createQuestion(questionText){
        const newQuestion = new QuestionModel({questionText})
        return await newQuestion.save()
    }

    async addOptions(questionId, options) {
        var question = await this.viewQuestion(questionId)
        if(!question){
            throw Error("Question does not exist")
        }
        options.forEach(async option =>{
            const newOption = await OptionModel({text: option}) 
            await newOption.save()
            question = await QuestionModel.updateOne({_id: new mongoose.Types.ObjectId(questionId)},{$push: {options: option}})
        })
        return
    }

    async deleteQuestion(questionId){
        await QuestionModel.deleteOne({_id: new mongoose.Types.ObjectId(questionId)})
        return
    }
}

export default QuestionRepository