import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../../utils/config';
import Cookies from 'js-cookie'

// logout in action
export const getPlans= createAsyncThunk(
    'config/getPlans',
    async(data, {rejectWithValue})=>{
        try{
            const res = await axios.get(`${BACKEND_BASE_URL}/investment/get-all-plans`)
            return res.data
            
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

export const handleAdd= createAsyncThunk(
    'config/handleAdd',
    async(data, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.post(`${BACKEND_BASE_URL}/investment/set-plan`, data, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('accesstoken')}`
                    }
                });
                console.log(res.data)
                return res.data;
            }   
        }
        catch(err){
            console.log(err)
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)

export const handleUpdate= createAsyncThunk(
    'config/handleUpdate',
    async(data, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.put(`${BACKEND_BASE_URL}/investment/update-plan/${data.id}`, data.data, {
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('accesstoken')}`
                    }
                });
                return res.data;
            }   
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)


// logout in action
export const handleDelete= createAsyncThunk(
    'config/handleDelete',
    async(id, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.delete(`${BACKEND_BASE_URL}/investment/delete-plan/${id}`,{
                    headers: {
                        "Authorization": `Bearer ${Cookies.get('accesstoken')}`
                    }
                });
                return res.data;
            }   
        }
        catch(err){
            if(err.response.data){
                return rejectWithValue({status: false, msg: err.response.data.msg});
            }
            else{
                return rejectWithValue({status: false, msg: err.message});
            }
        }
    }
)





const initialState = {
    plans: { isLoading: false, status: false, msg: '', data: []},
    add: { isLoading: false, status: false, msg: ''},
    update: { isLoading: false, status: false, msg: ''},
    delete: { isLoading: false, status: false, msg: ''},
    // authorize: { status: false, type: 'none', msg: '' }
}

export const plansReducer = createSlice({
    name: 'plans',
    initialState,
    extraReducers: {
        // handleSign up
        [getPlans.pending]: (state)=>{
            state.plans.isLoading = true;
        },
        [getPlans.fulfilled]: (state, {payload})=>{
            state.plans.isLoading = false;
            state.plans.status = payload.status;
            state.plans.msg = payload.msg;
            state.plans.data = payload.data
        },
        [getPlans.rejected]: (state, {payload})=>{
            state.plans.isLoading = false;
            if(payload){
                state.plans.status = payload.status;
                state.plans.msg = payload.msg;
            }else{
                // to get rid of next js server error
                state.plans.status = false;
                state.plans.msg = 'Error occured';
            }
        },  
        
        // add plan
        [handleAdd.pending]: (state)=>{
            state.add.isLoading = true;
        },
        [handleAdd.fulfilled]: (state, {payload})=>{
            state.add.isLoading = false;
            state.add.status = payload.status;
            state.add.msg = payload.msg;
        },
        [handleAdd.rejected]: (state, {payload})=>{
            state.add.isLoading = false;
            if(payload){
                state.add.status = payload.status;
                state.add.msg = payload.msg;
            }else{
                // to get rid of next js server error
                state.add.status = false;
                state.add.msg = 'Error occured';
            }
        }, 
        
        // update plan
        [handleUpdate.pending]: (state)=>{
            state.add.isLoading = true;
        },
        [handleUpdate.fulfilled]: (state, {payload})=>{
            state.add.isLoading = false;
            state.add.status = payload.status;
            state.add.msg = payload.msg;
        },
        [handleUpdate.rejected]: (state, {payload})=>{
            state.add.isLoading = false;
            if(payload){
                state.add.status = payload.status;
                state.add.msg = payload.msg;
            }else{
                // to get rid of next js server error
                state.add.status = false;
                state.add.msg = 'Error occured';
            }
        }, 

        // delete plan
        [handleDelete.pending]: (state)=>{
            state.delete.isLoading = true;
        },
        [handleDelete.fulfilled]: (state, {payload})=>{
            state.delete.isLoading = false;
            state.delete.status = payload.status;
            state.delete.msg = payload.msg;
        },
        [handleDelete.rejected]: (state, {payload})=>{
            state.delete.isLoading = false;
            if(payload){
                state.delete.status = payload.status;
                state.delete.msg = payload.msg;
            }else{
                // to get rid of next js server error
                state.delete.status = false;
                state.delete.msg = 'Error occured';
            }
        }, 
    }
    
})

export default plansReducer.reducer