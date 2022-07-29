import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BACKEND_BASE_URL } from '../../utils/config';


// request
export const withdawalRequest= createAsyncThunk(
    'withdraw/withdawalRequest',
    async(data, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.post(`${BACKEND_BASE_URL}/withdrawal/request`, data, {
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
                return rejectWithValue({status: false, msg: err.message, data: ''});
            }
        }
    }
)

// get all withdrawal hxs
export const getWithdrawals= createAsyncThunk(
    'withdraw/getWithdrawals',
    async(data, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.get(`${BACKEND_BASE_URL}/withdrawal/get-all-transactions`, {
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
                return rejectWithValue({status: false, msg: err.message, data: ''});
            }
        }
    }
)

// get all withdrawal hxs
export const getWithdrawal= createAsyncThunk(
    'withdraw/getWithdrawal',
    async(id, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.get(`${BACKEND_BASE_URL}/withdrawal/get-transaction/${id}`, {
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
                return rejectWithValue({status: false, msg: err.message, data: ''});
            }
        }
    }
)

// reject request
export const handleRejected= createAsyncThunk(
    'withdraw/handleRejected',
    async(id, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.get(`${BACKEND_BASE_URL}/withdrawal/rejected/${id}`, {
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
                return rejectWithValue({status: false, msg: err.message, data: ''});
            }
        }
    }
)

// confirm request
export const handleConfirm= createAsyncThunk(
    'withdraw/confirmRejected',
    async(id, {rejectWithValue})=>{
        try{
            if(Cookies.get('accesstoken')){
                const res = await axios.put(`${BACKEND_BASE_URL}/withdrawal/confirm/${id}`, {}, {
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
                return rejectWithValue({status: false, msg: err.message, data: ''});
            }
        }
    }
)



const initialState = {
    request: { isLoading: false, status: false, msg: ''},
    withdrawals: { isLoading: false, status: false, msg: '', data: []},
    withdrawal: { isLoading: false, status: false, msg: '', data: ''},
    reject: { isLoading: false, status: false, msg: ''},
    confirm: { isLoading: false, status: false, msg: ''},
}

export const withdrawalsReducer = createSlice({
    name: 'withdraws',
    initialState,
    extraReducers: {

        // make withdrawal request
        [withdawalRequest.pending]: (state)=>{
            state.request.isLoading = true;
        },
        [withdawalRequest.fulfilled]: (state, {payload})=>{
            state.request.isLoading = false;
            state.request.status = payload.status;
            state.request.msg = payload.msg;
        },
        [withdawalRequest.rejected]: (state, {payload})=>{
            state.request.isLoading = false;
            if(payload){
                state.request.status = payload.status;
                state.request.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.request.status = false;
                state.request.msg = 'Error occured';
            }
        },

        // make withdrawal request
        [getWithdrawals.pending]: (state)=>{
            state.withdrawals.isLoading = true;
        },
        [getWithdrawals.fulfilled]: (state, {payload})=>{
            state.withdrawals.isLoading = false;
            state.withdrawals.status = payload.status;
            state.withdrawals.msg = payload.msg;
        },
        [getWithdrawals.rejected]: (state, {payload})=>{
            state.withdrawals.isLoading = false;
            if(payload){
                state.withdrawals.status = payload.status;
                state.withdrawals.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.withdrawals.status = false;
                state.withdrawals.msg = 'Error occured';
            }
        },

        // confirm request
        [handleConfirm.pending]: (state)=>{
            state.confirm.isLoading = true;
        },
        [handleConfirm.fulfilled]: (state, {payload})=>{
            state.confirm.isLoading = false;
            state.confirm.status = payload.status;
            state.confirm.msg = payload.msg;
        },
        [handleConfirm.rejected]: (state, {payload})=>{
            state.confirm.isLoading = false;
            if(payload){
                state.confirm.status = payload.status;
                state.confirm.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.confirm.status = false;
                state.confirm.msg = 'Error occured';
            }
        },

        // reject request
        [handleRejected.pending]: (state)=>{
            state.reject.isLoading = true;
        },
        [handleRejected.fulfilled]: (state, {payload})=>{
            state.reject.isLoading = false;
            state.reject.status = payload.status;
            state.reject.msg = payload.msg;
        },
        [handleRejected.rejected]: (state, {payload})=>{
            state.reject.isLoading = false;
            if(payload){
                state.reject.status = payload.status;
                state.reject.msg = payload.msg;

            }else{
                // to get rid of next js server error
                state.reject.status = false;
                state.reject.msg = 'Error occured';
            }
        },
    }
    
})

export default withdrawalsReducer.reducer