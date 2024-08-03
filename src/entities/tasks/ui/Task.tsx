import { useAppDispatch } from '../../../app/store'
import { deleteTask, toggleTaskCompletion, updateTask } from '../model/tasksSlice'
import { useRef, useState } from 'react'

type Props = {
    taskId: string
    noteId: string
    title: string
    isDone: boolean
}

export const TaskItem = ({ taskId, title, isDone, noteId }: Props) => {
    const dispatch = useAppDispatch()

    const [isEdited, setIsEdited] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleCheckbox = (taskId: string, noteId: string) => {
        dispatch(toggleTaskCompletion({ taskId, noteId }))
    }

    const removeTask = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(deleteTask({ taskId, noteId }))
    }

    const updateCurrentTask = () => {
        setIsEdited(false)

        if (inputRef.current && inputRef.current.value.length) {
            const text = inputRef.current.value
            dispatch(updateTask({ taskId, noteId, newTitle: text }))
        }
    }

    return isEdited ? (
        <>
            <input placeholder={title} type="text" ref={inputRef} />
            <button onClick={() => updateCurrentTask()} className={'btn'}>
                Update
            </button>
        </>
    ) : (
        <div
            className={isDone ? 'task-item is-checked' : 'task-item'}
            onDoubleClick={() => {
                console.log('double click')
                setIsEdited(true)
            }}>
            <input onChange={() => handleCheckbox(taskId, noteId)} checked={isDone} type="checkbox" />
            <h5>{title}</h5>
            <a href="#" className="btn" onClick={(e) => removeTask(e)}>
                X
            </a>
        </div>
    )
}
