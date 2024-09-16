//和用户相关的状态管理

import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
    name:'user',
    initialState:{
        token:''
    },
    reducers:{
        setToken(state,action){
            state.token = action.payload
        }
    }
})

//解构出actionCreater
const {setToken} = userStore.actions
const reducer = userStore.reducer

const fetchLogin = (loginForm)=>{
    return async(dispatch)=>{
        const res = await request.post('/authorizations',loginForm)
        dispatch(setToken(res.data.token))
    }
}
export {fetchLogin}
export default reducer