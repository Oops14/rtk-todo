import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import NotificationsIcon from '@mui/icons-material/Notifications'

const Sidebar = () => {
    return (
        <div className={'main-sidebar'}>
            <ul className={'sidebar-menu'}>
                <li className={'active'}>
                    <a href="#">
                        <span>
                            <FaceRetouchingNaturalIcon />
                        </span>
                        All Notes
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            <NotificationsIcon />
                        </span>
                        Reminders
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            <EditCalendarIcon />
                        </span>
                        Edit Labels
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            <Inventory2OutlinedIcon />
                        </span>
                        Archives
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            <DeleteOutlineOutlinedIcon />
                        </span>
                        Trash
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
