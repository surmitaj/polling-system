import mongoose from 'mongoose'

export const optionSchema = new mongoose.Schema({
    text: String,
    votes: {
        type: Number,
        default: 0
    }
});
