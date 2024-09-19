//封装和文章相关的接口函数
const { request } = require("@/utils");

//1. 获取频道列表

function getChannelAPI(){
    return request({
        url:'/channels',
        method:'GET'
    })
}

//提交文章表单

function createArticleAPI(data){
    return request({
        url:'/mp/articles?draft=false',
        method:'POST',
        data
    })
}

//更新文章表单

function upDateArticleAPI(data){
    return request({
        url:`/mp/articles/${data.id}?draft=false`,
        method:'PUT',
        data
    })
}

//获取文章列表
function getArticleListAPI(params){
    return request({
        url:'/mp/articles',
        method:'GET',
        params
    })
}

//删除文章
function delArticleAPI(id){
    return request({
        url:`/mp/articles/${id}`,
        method:'DELETE'
    })
}

//获取文章详情
function getArticleById(id){
    return request({
        url:`/mp/articles/${id}`
    })
}
export {getChannelAPI,createArticleAPI,getArticleListAPI,delArticleAPI,getArticleById,upDateArticleAPI}