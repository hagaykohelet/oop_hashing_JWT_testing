import express from 'express'
import supabase from '../db/connection_supabase.js'
import { createToken,verifyToken } from '../utils/token.js'
import userdal from '../classes/class_user.js'

const authRouter = express()

authRouter.post('/register', async(req, res)=>{
    try{
        const newObj = req.body
    }catch(err){
        res.status(400).send(String(err))
    }
})





export default authRouter