import './env.js'
import express from 'express';
import bodyParser from "body-parser";

import cors from 'cors'
import { connectUsingMongoose } from './src/config/mongooseconfig.js';
import questionRouter from './src/features/question/question.route.js';
import optionRouter from './src/features/option/option.route.js';

const app = express();

// var corsOptions = {
//     origin: "http://localhost/3000"
// }

// app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use('/api/question', questionRouter)
app.use('/api/option', optionRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the polling system.')
})

app.use((req, res) => {
    res.status(404).send('API not found')
})

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is listening at ${port}`)
    connectUsingMongoose()
})