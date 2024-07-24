
const Sidebar = () => {
    return (
        <div className={'main-sidebar'}>
            <ul className={"sidebar-menu"}>
                <li className={"active"}>
                    <a href="#">
                        All Notes
                    </a>
                </li>
                <li>
                    <a href="#">
                        Reminders
                    </a>
                </li>
                <li>
                    <a href="#">
                        Edit Labels
                    </a>
                </li>
                <li>
                    <a href="#">
                        Archives
                    </a>
                </li>
                <li>
                    <a href="#">
                        Trash
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar