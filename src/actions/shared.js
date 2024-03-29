import { getInitialData } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        getInitialData().then(({users, questions}) => {
            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        }).catch( error => {
            console.error('Error in getInitialData', error)
            dispatch(hideLoading())
        })
    }
}   
