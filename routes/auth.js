import express from 'express'
import supabase from '../db/connection_supabase.js'
import { createHashPassword, verifyHashPassword } from '../utils/hash_password.js'
import userdal from '../classes/class_user.js'

const authRouter = express()
const userTable = new userdal()


authRouter.post('/register', async (req, res) => {
    try {
        const newObj = req.body
        const hash_password = await createHashPassword(newObj.username)
        newObj[hash_password] = hash_password
        userTable.add(newObj)
        return res.status(200).send("sucses")

    } catch (err) {
        res.status(400).send(String(err))
    }
})





export default authRouter