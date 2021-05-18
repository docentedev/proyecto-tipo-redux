import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodoAction } from "../../store/todos/actions"

const Home = () => {
    const dispatch = useDispatch()
    const store = useSelector(s => s)
    useEffect(() => {
        dispatch(getAllTodoAction())
    }, [dispatch])
    return (
        <pre>
            {JSON.stringify(store, undefined, 2)}
        </pre>
    )
}

export default Home
