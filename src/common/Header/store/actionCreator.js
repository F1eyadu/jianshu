import {SEARCH_BLUR, SEARCH_FOCUS, UPDATE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'
export const getSearchBlur = ()=>({
    type:SEARCH_BLUR
})
export const getSearchFoucs = ()=>({
    type:SEARCH_FOCUS
})

export const ChangeList = (data)=>({
    type: UPDATE_LIST,
    data: fromJS(data),
    totalPage: parseInt(data.length / 10)
})

export const getList = () => {
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/headerList')
        .then((res) =>{
            if(res.status === 200){
                const action = ChangeList(res.data.lists)
                dispatch(action)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const mouseEnter = () =>({
    type: MOUSE_ENTER
})

export const mouseLeave = ()=> ({
    type: MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
})