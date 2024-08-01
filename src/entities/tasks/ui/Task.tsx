import { useAppDispatch } from '../../../app/store'
import { deleteTask } from '../model/tasksSlice'

type Props = {
    taskId: string
    noteId: string
    title: string
    isDone: boolean
    handleCheckbox: (taskId: string, noteId: string) => void
}

export const TaskItem = ({ taskId, title, isDone, handleCheckbox, noteId }: Props) => {
    const dispatch = useAppDispatch()

    const removeTask = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        dispatch(deleteTask({ taskId: taskId, noteId: noteId }))
    }

    return (
        <div className="task-item">
            <input onChange={() => handleCheckbox(taskId, noteId)} disabled={isDone} type="checkbox" />
            <h5>{title}</h5>
            <a href="#" className="btn" onClick={(e) => removeTask(e)}>
                X
            </a>
        </div>
    )
}
