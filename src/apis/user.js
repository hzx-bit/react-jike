//用户相关的所有请求

const { request } = require("@/utils");

//1. 用户登录

function loginAPI(formData){
    return request({
        url:'/authorizations',
        method:'POST',
        data:formData
    })
}

function getProfileAPI(){
    return request({
        url:'/user/profile',
        method:'GET'
    })
}

export {loginAPI,getProfileAPI}