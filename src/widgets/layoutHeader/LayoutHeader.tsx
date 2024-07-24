import logo from '../../assets/7.jpeg'
import SettingsIcon from '@mui/icons-material/Settings'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'

const LayoutHeader = () => {
    return (
        <header className={'header-main'}>
            <div className="header-inner">
                <div className={'search'}>
                    <div className="s-icon">
                        <SearchIcon />
                    </div>
                    <input type="text" placeholder={'Search for note...'} />
                </div>
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
