import { _getQuestions as getQuestions, _getUsers as getUsers } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export function handleInitialData() {
    return async (dispatch) => {
        const questions = await getQuestions()
        const users = await getUsers()

        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
    }
}   
