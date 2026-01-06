import supabase from "../db/connection_supabase.js"

export default class userdal {
    static find = async function (username) {
        const { data, error } = await supabase.from("user").select().eq("username", username)
        if (error) {
            return error
        }
        if (data.length === 0) {
            return "not found!"
        }
        return data
    }
    static add = async  function (obj) {
        const { error } = await supabase.from("user").insert(obj).select()
        if (error) {
            return error
        }
        return "success"
    }
}
