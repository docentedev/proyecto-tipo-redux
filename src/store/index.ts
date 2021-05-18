import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
    getAllReducer as getAllReducerTodos,
    createReducer as createReducerTodos,
} from './todos/index'

const todosReducers = combineReducers({
    getAll: getAllReducerTodos,
    create: createReducerTodos,
})

const rootReducer = combineReducers({
    todos: todosReducers,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store