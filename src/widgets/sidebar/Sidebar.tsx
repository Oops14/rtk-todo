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
