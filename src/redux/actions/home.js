import * as types from '../type'
import api from '../api'

function getBannerList(res) {
    return {
        type:types.HOME_GET_BANNER_LIST,
        data:res.data
    }
}
export function fetchBanner(){
    return (dispatch)=>{
        api.getBannerList((res)=>{
            dispatch(getBannerList(res))
        })
    }
}