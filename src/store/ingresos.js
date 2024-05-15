import {defineStore} from "pinia"
import axios from "axios"
import {ref} from "vue"

export const useIngresosStore = defineStore("ingresos", ()=>{

    
    const getIngreso= async()=>{
        try {
            const res = await axios.get("http://localhost:4000/api/ingresos")
            return res
        } catch (error) {
            return error 
        }
    }

    return{ getIngreso}
})