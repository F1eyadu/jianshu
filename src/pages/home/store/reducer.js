import { fromJS } from 'immutable'
import { GET_HOME_DATA, GET_MORE_LIST, SHOW_SCROLL_TOP} from './actionTypes'
const defaultState = fromJS({
    TopicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage:1,
    showScroll: false
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_HOME_DATA:
            return state.merge({
                TopicList: fromJS(action.TopicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writerList: fromJS(action.writerList)
            })
        case GET_MORE_LIST: 
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.page
            })
        case SHOW_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state
    }
}