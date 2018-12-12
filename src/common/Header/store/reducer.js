import {SEARCH_BLUR, SEARCH_FOCUS, UPDATE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list:[],
    page:0,
    totalPage:1
})
export default (state = defaultState, action) => {
    switch(action.type){
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case SEARCH_BLUR:
            return state.set('focused', false)
        case UPDATE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case MOUSE_ENTER:
            return state.set('mouseIn', true)
        case MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}