import {LOGIN_SUCCESS, LOGIN_OUT} from './actionTypes'
import axios from 'axios'

const login = () => {
    return {
        type: LOGIN_SUCCESS,
        value: true
    }
}
export const loginAction = (account, pwd) => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/login?account='+account +'&pwd='+pwd)
        .then((res) => {
            if(res.status === 200 && res.data.code === 0){
                dispatch(login())
            } 
        })
    }
}

export const loginOut = () => ({
    type: LOGIN_OUT
})