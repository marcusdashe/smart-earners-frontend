import axios from 'axios';
import Cookies from 'js-cookie';
import { BACKEND_BASE_URL } from './config';


const resolveApi = {
    generateAccesstoken: async()=>{
        try{
            if(Cookies.get('refreshtoken')){

                axios.get(`${BACKEND_BASE_URL}/auth/generate-accesstoken`, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('refreshtoken')}`
                    }
                })
            }
            else{
                return
            }
        }
        catch(err){
            return
        }
    },

    authorize: async()=>{
        try{
            if(Cookies.get('accesstoken')){

                axios.get(`${BACKEND_BASE_URL}/auth/authorize`, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('accesstoken')}`
                    }
                })
            }
            else{
                return
            }
        }
        catch(err){
            return
        }
    }
}

export {resolveApi}