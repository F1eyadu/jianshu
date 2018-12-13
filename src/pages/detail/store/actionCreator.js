import {GET_DETAIL_INFO} from './actionTypes'
import axios from 'axios'

const getDetail = (result) => ({
    type: GET_DETAIL_INFO,
    title: result.title,
    content: result.content
})

export const getDetailInfo = (id) => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/detail?id='+id)
        .then((res) => {
            if(res.status === 200){
                let result = res.data
                dispatch(getDetail(result))
            }
        })
    }
}