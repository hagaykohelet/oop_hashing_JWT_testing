import express from 'express'
import { createToken,verifyToken } from './utils/token.js'
import authRouter from './routes/auth.js'
const PORT = 3000
const app = express()
app.use(express.json())
app.use('/auth', authRouter)


app.listen(PORT, ()=>{
    console.log("server running....");
})