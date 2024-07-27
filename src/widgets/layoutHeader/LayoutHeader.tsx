import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import logo from '../../assets/7.jpeg'
import Search from '../../features/search/Search'

const LayoutHeader = () => {
    return (
        <header className={'header-main'}>
            <div className="header-inner">
                <Search placeholder={'Search for note...'} />
                <div className="header-account-info">
                    <div className="date">
                        <span>15:15</span>
                        <span>26 FEB</span>
                    </div>
                    <div className="header-settings">
                        <div className="reminder">
                            <NotificationsIcon />
                        </div>
                        <div className="settings">
                            <SettingsIcon />
                        </div>
                        <div className="account-logo">
                            <img src={logo} alt="lgo" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default LayoutHeader
