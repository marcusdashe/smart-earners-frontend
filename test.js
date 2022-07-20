import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const getUser = createAsyncThunk(
    'auth/getUser', async(gdfgfg)=>{
        try{
            const res = await axios.get()

            console.log(res.data)
        }
        catch(err){
            
        }
    }
)


const getAllUserrs = createAsyncThunk(
    'auth/getAllUsers'
)

const kj = "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"


export const authReducer = createSlice({
    name: 'hfgh',
    initialState: 'state1',
    reducer: {
        getName: (state, {payload})=>{
            state = "jdhzxj"
        }
    }
    // extraReducer: {}
})

export {getName } from authReducer.actions;
export default authReducer.reducer;