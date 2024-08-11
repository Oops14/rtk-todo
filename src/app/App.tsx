import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useState } from 'react'
import AllNotes from '../pages/notes/AllNotes.tsx'
import Reminder from '../pages/reminder/Reminder.tsx'
import Sidebar from '../widgets/sidebar/Sidebar.tsx'
import './app.scss'

function App() {
    const menus = [
        {
            title: 'All Notes',
            icon: <FaceRetouchingNaturalIcon />,
        },
        {
            title: 'Reminders',
            icon: <NotificationsIcon />,
        },
        {
            title: 'Edit Labels',
            icon: <EditCalendarIcon />,
        },
        {
            title: 'Archives',
            icon: <Inventory2OutlinedIcon />,
        },
        {
            title: 'Trash',
            icon: <DeleteOutlineOutlinedIcon />,
        },
    ]

    const [activeTab, setActiveTab] = useState<string>(menus[0].title)

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <Sidebar menus={menus} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                    <div className="col-lg-10">
                        {activeTab === 'All Notes' && <AllNotes />}
                        {activeTab === 'Reminders' && <Reminder title={'Reminders'} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
