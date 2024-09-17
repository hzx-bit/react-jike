//和用户相关的状态管理

import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken,getToken,removeToken } from "@/utils";
const userStore = createSlice({
    name:'user',
    initialState:{
        token:getToken()||'',
        userInfo:{}
    },
    reducers:{
        setToken(state,action){
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state,action){
            state.userInfo = action.payload
        },
        clearUserInfo(state){
            state.userInfo = {}
            state.token=''
            removeToken()
        }
    }
})

//解构出actionCreater
const {setToken,setUserInfo,clearUserInfo} = userStore.actions
const reducer = userStore.reducer

const fetchLogin = (loginForm)=>{
    return async(dispatch)=>{
        const res = await request.post('/authorizations',loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = ()=>{
    return async(dispatch)=>{
        const res = await request.get('user/profile')
        dispatch(setUserInfo(res.data))
    }
}
export {fetchLogin,fetchUserInfo,setToken,clearUserInfo}
export default reducer