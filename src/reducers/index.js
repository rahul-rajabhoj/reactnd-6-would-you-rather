import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import questions from './questions'
import users from './users'

export default combineReducers({
    users,
    questions,
    loadingBar: loadingBarReducer,
})