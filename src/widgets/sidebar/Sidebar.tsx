import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import NotificationsIcon from '@mui/icons-material/Notifications'

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

const Sidebar = () => {
    return (
        <div className={'main-sidebar'}>
            <ul className={'sidebar-menu'}>
                {menus.map((i, index) => {
                    return (
                        <li key={index} className={''}>
                            <a href="#">
                                <span>{i.icon}</span>
                                {i.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
