import ColorLensIcon from '@mui/icons-material/ColorLens'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../app/store'
import { Notes } from '../../entities/noteItem/model/noteSlice'

/**
 * 
 // TODO: MOVE STYLES FROM HTML TO SCSS.
 // TODO: ADD ACTIVE BOTTOM BUTTON STYLE.
 */
export default function MasonryGrid() {
    const notes = useSelector<AppRootStateType, Notes[]>((state) => state.notes)

    const [activeItemId, setActiveItemId] = useState<string | null>(null)

    console.log(notes)

    const addTaskInput = (noteId: string) => {
        setActiveItemId(noteId)
    }

    return (
        <Box sx={{ width: '100%', minHeight: 829 }}>
            <Masonry columns={4} spacing={2}>
                {notes.map((item) => (
                    <div key={item.id} className="masonry-grid-item">
                        {/* <Label>{index + 1}</Label> */}

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
                                    <input type="text" />
                                    <a href="javascript:void(0)" className="btn add-task-button">
                                        Add
                                    </a>
                                </div>
                            ) : (
                                <a
                                    onClick={() => addTaskInput(item.id)}
                                    href="javascript:void(0)"
                                    className="btn add-task-button">
                                    {item.task ? 'Task' : 'Reminder'}
                                </a>
                            )}
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
