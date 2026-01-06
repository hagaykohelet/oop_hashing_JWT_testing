import express from 'express'
import { createToken,verifyToken } from './utils/token.js'
const PORT = 3000
const app = express()
app.use(express.json())



app.listen(PORT, ()=>{
    console.log("server running....");
})