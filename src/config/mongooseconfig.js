import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.DB_URL

export const connectUsingMongoose = async()=>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongodb connected using Mongoose')
    } catch(err) {
        console.log(err)
        console.log('Error while connecting to db')
    }
}
