import { useEffect, useState } from "react";
import { getChannelAPI} from "@/apis/article";
//封装获取频道列表的逻辑
function useChannel(){
    //1. 获取频道列表所有的逻辑
    //2. 把组件中要用到的数据return出去
    const [channelList, setChannelList] = useState([]);
    useEffect(()=>{
        const getChannelList = async()=>{
            const res = await getChannelAPI()
            setChannelList(res.data.channels)
        }
        getChannelList()
    },[])
    return {
        channelList
    }
}

export {useChannel}