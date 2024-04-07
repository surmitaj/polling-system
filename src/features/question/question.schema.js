import mongoose from 'mongoose'

export const questionSchema = new mongoose.Schema({
    questionText: String,
    options: [{
        type: String
    }]
});
