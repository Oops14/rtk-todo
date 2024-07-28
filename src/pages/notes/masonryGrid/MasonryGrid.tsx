import ColorLensIcon from '@mui/icons-material/ColorLens'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../../app/store'
import { Notes } from '../../../entities/noteItem/model/noteSlice'

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}))

export default function MasonryGrid() {
    const notes = useSelector<AppRootStateType, Notes[]>((state) => state.notes)

    return (
        <Box sx={{ width: '100%', minHeight: 829 }}>
            <Masonry columns={4} spacing={2}>
                {notes.map((item, index) => (
                    <div key={index} className="masonry-grid-item">
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
                            <a href="#" className="btn add-task-button">
                                Task
                            </a>
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
