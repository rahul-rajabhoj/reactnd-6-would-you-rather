import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveQuestion } from '../utils/api'
import { addQuestionToUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'  
export const ADD_ANSWER = 'ADD_ANSWER'  

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const question = await saveQuestion({ optionOneText, optionTwoText, author })
            dispatch(addQuestion(question))
            dispatch(addQuestionToUser(question))
            dispatch(hideLoading())
        } catch (error) {
            console.error('Error in handleAddQuestion', error)
            dispatch(hideLoading())
        }
    }
} 

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addAnswer(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER,
        authedUser, 
        qid, 
        answer,
    }
}