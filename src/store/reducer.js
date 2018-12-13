import { combineReducers} from 'redux-immutable'
import headerReducer from '../common/Header/store/reducer'
import HomeReducer from '../pages/home/store/reducer'
import DetailReducer from '../pages/detail/store/reducer'
import LoginReducer from '../pages/login/store/reducer'
export default combineReducers({
    header: headerReducer,
    detail: DetailReducer,
    home: HomeReducer,
    login: LoginReducer
})
