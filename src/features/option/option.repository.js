import mongoose from 'mongoose'
import { optionSchema } from './option.schema.js'

const OptionModel = mongoose.model('Option', optionSchema)

class OptionRepository {
    async addVote(optionId){
        const option = await OptionModel.findOne({_id: new mongoose.Types.ObjectId(optionId)});
        if (!option) {
            throw new Error('Option not found');
        }
        option.votes += 1;
        await option.save();
        return option;
    }

    async deleteOption(id) {
        await OptionModel.deleteOne({_id: new mongoose.Types.ObjectId(id)})
        return
    }
}

export default OptionRepository