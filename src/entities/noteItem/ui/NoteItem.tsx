import React, { memo, useCallback } from 'react'
import { addTask, NoteTasks, Task } from '../../tasks/model/tasksSlice.ts'
import { TaskItem } from '../../tasks/ui/Task.tsx'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import { AppRootStateType, useAppDispatch } from '../../../app/store.ts'
import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import { addReminder, type Reminder } from '../../reminderItem/model/reminderSlice.ts'

type Props = {
    itemId: string
    title: string
    img: string
    isTask: boolean
}

const NoteItem = memo(({ itemId, title, img, isTask }: Props) => {
    const dispatch = useAppDispatch()
    const tasks = useSelector<AppRootStateType, NoteTasks>((state) => state.tasks)
    const reminders = useSelector<AppRootStateType, Reminder[]>(state => state.reminder)

    console.log(reminders)

    const [activeItemId, setActiveItemId] = useState<string | null>(null)
    const taskRef = useRef<HTMLInputElement>(null)

    const addTaskInput = (noteId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setActiveItemId(noteId)
    }

    const handleTask = (noteId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        if (taskRef.current && taskRef.current.value.length) {
            const task = {
                id: uuidv4(),
                title: taskRef.current.value,
                isDone: false,
            }

            dispatch(addTask({ noteId: noteId, task: task }))
        }

        setActiveItemId(null)
    }

    /**
     * TODO: RECREATE DATE PARAM.
     */
    const addToReminders = useCallback(() => {
        const currentDateTime = new Date();
        const formattedDateTime = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
        }).format(currentDateTime);

        dispatch(addReminder({ id: itemId, title, img, date: formattedDateTime }))
    }, [dispatch, itemId, title, img])

    return (
        <div key={itemId} className="masonry-grid-item">
            <div className="top-note">
                <img
                    srcSet={`${img}?w=162&auto=format&dpr=2 2x`}
                    src={`${img}?w=162&auto=format`}
                    alt={title}
                    loading="lazy"
                    style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                    }}
                />
            </div>
            <div className="bottom-note">
                <h3>{title}</h3>
                {itemId === activeItemId ? (
                    <div className="add-task-input">
                        <input type="text" ref={taskRef} />
                        <a onClick={(e) => handleTask(itemId, e)} href="#" className="btn add-task-button">
                            Add
                        </a>
                    </div>
                ) : (
                    <a onClick={(e) => addTaskInput(itemId, e)} href="#" className="btn add-task-button">
                        {isTask ? 'Task' : 'Reminder'}
                    </a>
                )}

                <div className="tasks">
                    {tasks[itemId]?.map((task: Task) => (
                        <TaskItem
                            key={task.id}
                            taskId={task.id}
                            noteId={itemId}
                            title={task.title}
                            isDone={task.isDone}
                        />
                    ))}
                </div>
            </div>

            <div className="bottom-buttons">
                <button>
                    <NotificationsIcon onClick={addToReminders}
                                       className={reminders.some(r => r.id === itemId) ? 'active-reminder' : ''} />
                </button>
                <button>
                    <ColorLensIcon />
                </button>
                <button>
                    <PermMediaIcon />
                </button>
            </div>
        </div>
    )
})

export default NoteItem