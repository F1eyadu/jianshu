import { GET_HOME_DATA, GET_MORE_LIST, SHOW_SCROLL_TOP } from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
const getHomeInfo = (result) => ({
    type: GET_HOME_DATA,
    TopicList: result.TopicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/jianshu/index')
            .then((res) => {
                if (res.status === 200) {
                    let result = res.data
                    dispatch(getHomeInfo(result))
                }
            })
    }
}


const getMore = (data,page) =>({
    type: GET_MORE_LIST,
    list: fromJS(data),
    page
})
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/listMore?page='+ page)
            .then((res) => {
                if (res.status === 200) {
                    let lists = res.data.lists
                    dispatch(getMore(lists, page+1))
                }
            })
    }
}

export const toggleTopShow = (flag) => ({
    type: SHOW_SCROLL_TOP,
    show: flag
})