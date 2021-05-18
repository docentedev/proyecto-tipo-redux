import { Dispatch, Store } from 'redux'
import { CREATE_TODO_RESULT, CREATE_TODO_START, GET_ALL_TODO_RESULT, GET_ALL_TODO_START } from '.'
import { getAllTodoClient, createTodoClient } from '../../clients/todos'

export const getAllTodoAction = () => {
    return async (dispatch: Dispatch, getState: () => Store) => {
        dispatch({ type: GET_ALL_TODO_START, payload: null })
        const data: any[] = await getAllTodoClient()

        dispatch({
            type: GET_ALL_TODO_RESULT,
            payload: data,
        })
    };
}

export const createTodoAction = (data: any) => {
    return async (dispatch: Dispatch, getState: () => Store) => {
        dispatch({ type: CREATE_TODO_START, payload: null })
        const result: any = await createTodoClient(data)
        dispatch({
            type: CREATE_TODO_RESULT,
            payload: result,
        })
    };
}