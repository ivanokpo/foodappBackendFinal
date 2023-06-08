import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import recipe from './routes.js'

dotenv.config()

//instantiates this backend application as an express app
const app = express()

//installs the cors package, allowing for communication between the client and server
app.use(cors({}))

//middleware for incoming request bodies
app.use(bodyParser.json())

//the home page address
app.use('/', recipe)

//what port the application will be running on
const PORT = 3001

//application will be listening through port 3001
app.listen(PORT, () => {
    console.log(`Port listening on ${PORT}`)
})
