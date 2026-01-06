import { createClient } from "@supabase/supabase-js/dist/index.cjs";
import 'dotenv/config'


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.API_KEY
)



export default supabase