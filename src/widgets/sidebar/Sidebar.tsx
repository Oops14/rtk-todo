import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../app/store.ts'
import type { Reminder } from '../../entities/reminderItem/model/reminderSlice.ts'
import { ItemCounter } from '../../features/item-counter/ItemCounter.tsx'

type MenuItem = {
    title: string
    icon: JSX.Element
}

type Props = {
    menus: MenuItem[]
    activeTab: string
    setActiveTab: (activeTab: string) => void
}

const Sidebar = ({ menus, activeTab, setActiveTab }: Props) => {
    const reminders = useSelector<AppRootStateType, Reminder[]>(state => state.reminder)

    const changeTab = (tabTitle: string) => {
        setActiveTab(tabTitle)
    }

    return (
        <div className={'main-sidebar'}>
            <ul className={'sidebar-menu'}>
                {menus.map((i, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => changeTab(i.title)}
                            className={activeTab === i.title ? 'active' : ''}>
                            {i.title === 'Reminders' && reminders.length ?
                                <ItemCounter reminders={reminders} /> : <></>}
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
