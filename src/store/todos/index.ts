export const GET_ALL_TODO_RESULT = 'GET_ALL_TODO_RESULT'
export const GET_ALL_TODO_START = 'GET_ALL_TODO_START'
export const CREATE_TODO_RESULT = 'CREATE_TODO_RESULT'
export const CREATE_TODO_START = 'CREATE_TODO_START'

// GET ALL
const getAllInitialStore = {
    data: [],
    error: null,
    success: null,
    loading: false,
}

export const getAllReducer = (prevState = getAllInitialStore, action: any) => {
    switch (action.type) {
        case GET_ALL_TODO_START:
            return {
                data: prevState.data,
                error: prevState.error,
                success: prevState.success,
                loading: true,
            }
        case GET_ALL_TODO_RESULT:
            return {
                data: action.payload,
                error: false,
                success: true,
                loading: false,
            }
        default:
            return prevState
    }
}

// GET
const createInitialStore = {
    data: {},
    error: null,
    success: null,
    loading: false,
}

export const createReducer = (prevState = createInitialStore, action: any) => {
    switch (action.type) {
        case CREATE_TODO_START:
            return {
                data: prevState.data,
                error: prevState.error,
                success: prevState.success,
                loading: true,
            }
        case CREATE_TODO_RESULT:
            return {
                data: action.payload,
                error: false,
                success: true,
                loading: false,
            }
        default:
            return prevState
    }
}
