import { useAppDispatch } from '../../../app/store'
import { deleteTask, toggleTaskCompletion } from '../model/tasksSlice'

type Props = {
    taskId: string
    noteId: string
    title: string
    isDone: boolean
}

export const TaskItem = ({ taskId, title, isDone, noteId }: Props) => {
    const dispatch = useAppDispatch()

    const handleCheckbox = (taskId: string, noteId: string) => {
        dispatch(toggleTaskCompletion({ taskId, noteId }))
    }

    const removeTask = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        dispatch(deleteTask({ taskId, noteId }))
    }

    return (
        <div className={isDone ? 'task-item is-checked' : 'task-item'}>
            <input onChange={() => handleCheckbox(taskId, noteId)} checked={isDone} type="checkbox" />
            <h5>{title}</h5>
            <a href="#" className="btn" onClick={(e) => removeTask(e)}>
                X
            </a>
        </div>
    )
}
