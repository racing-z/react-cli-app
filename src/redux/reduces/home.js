import * as types from '../type'

const initState={
    banner:[]
}
export default function homeState(state=initState,action){
    switch(action.type){
        case types.HOME_GET_BANNER_LIST:
        return Object.assign({},state,{
            banner:action.data.billboards
        })
        default:
        return state
    }
}