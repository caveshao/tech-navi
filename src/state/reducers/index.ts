import {combineReducers} from 'redux'

import { homeReducer } from './home.reducer'

const allReducers = combineReducers({
    home: homeReducer
})

export default allReducers