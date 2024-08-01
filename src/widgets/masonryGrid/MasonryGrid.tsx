import ColorLensIcon from '@mui/icons-material/ColorLens'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { AppRootStateType, useAppDispatch } from '../../app/store'
import { Notes } from '../../entities/noteItem/model/noteSlice'
import { addTask, NoteTasks, Task } from '../../entities/tasks/model/tasksSlice'
import { TaskItem } from '../../entities/tasks/ui/Task.tsx'

/**
 *
 // TODO: MOVE STYLES FROM HTML TO SCSS.
 // TODO: ADD ACTIVE BOTTOM BUTTON STYLE.
 */
export default function MasonryGrid() {
    const notes = useSelector<AppRootStateType, Notes[]>((state) => state.notes)
    const tasks = useSelector<AppRootStateType, NoteTasks>((state) => state.tasks)

    const dispatch = useAppDispatch()

    const [isDone, setIsDone] = useState(false)

    console.log(tasks)
    console.log(notes)

    const [activeItemId, setActiveItemId] = useState<string | null>(null)
    const taskRef = useRef<HTMLInputElement>(null)

    const addTaskInput = (noteId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        setActiveItemId(noteId)
    }

    const handleTask = (noteId: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        if (taskRef.current) {
            console.log('Task:', taskRef.current.value)
            const task = {
                id: uuidv4(),
                title: taskRef.current.value,
                isDone: false,
            }

            dispatch(addTask({ noteId: noteId, task: task }))
        }

        setActiveItemId(null)
    }

    return (
        <Box sx={{ width: '100%', minHeight: 829 }}>
            <Masonry columns={4} spacing={2}>
                {notes.map((item) => (
                    <div key={item.id} className="masonry-grid-item">
                        <div className="top-note">
                            <img
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=162&auto=format`}
                                alt={item.title}
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
                            <h3>{item.title}</h3>
                            {item.id === activeItemId ? (
                                <div className="add-task-input">
                                    <input type="text" ref={taskRef} />
                                    <a onClick={(e) => handleTask(item.id, e)} href="#" className="btn add-task-button">
                                        Add
                                    </a>
                                </div>
                            ) : (
                                <a onClick={(e) => addTaskInput(item.id, e)} href="#" className="btn add-task-button">
                                    {item.isTask ? 'Task' : 'Reminder'}
                                </a>
                            )}

                            <div className="tasks">
                                {tasks[item.id]?.map((task: Task) => (
                                    <TaskItem
                                        key={task.id}
                                        taskId={task.id}
                                        noteId={item.id}
                                        title={task.title}
                                        isDone={task.isDone}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="bottom-buttons">
                            <button>
                                <NotificationsIcon />
                            </button>
                            <button>
                                <ColorLensIcon />
                            </button>
                            <button>
                                <PermMediaIcon />
                            </button>
                        </div>
                    </div>
                ))}
            </Masonry>
        </Box>
    )
}
