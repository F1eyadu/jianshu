import { combineReducers} from 'redux-immutable'
import headerReducer from '../common/Header/store/reducer'
import HomeReducer from '../pages/home/store/reducer'

export default combineReducers({
    header: headerReducer,
    home: HomeReducer
})
