import { _saveQuestionAnswer as saveQuestionAnswer} from "../utils/_DATA"
import { addAnswer } from './questions'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'  

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser(question) {
    return {
        type: ADD_QUESTION_TO_USER,
        question
    }
}

function addAnswerToUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return async dispatch => {
        dispatch(addAnswerToUser(authedUser, qid, answer))
        dispatch(addAnswer(authedUser, qid, answer))
        try {
            return saveQuestionAnswer({ authedUser, qid, answer })
        } catch (error) {
            console.error('Error in handleSaveQuestionAnswer', error)
        }
    }
}