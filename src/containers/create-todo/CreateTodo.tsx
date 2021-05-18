import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodoAction } from '../../store/todos/actions'

const CreateTodo = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const handlerChange = ({ target }: any) => {
        setTitle(target.value)
    }

    const handlerSave = () => {
        const data = {
            id: new Date().getTime(),
            title,
        }
        dispatch(createTodoAction(data))
    }

    const disabled = () => title === ''

    return (
        <div className="col">
            <div className="card bg-light">
                <div className="card-header">Nuevo</div>
                <div className="card-body">
                    <label>Titulo</label>
                    <input className="form-control" value={title} onChange={handlerChange} />
                </div>
                <div className="card-footer text-end">
                    <button className="btn btn-success" disabled={disabled()} onClick={handlerSave}>Guardar</button>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo
