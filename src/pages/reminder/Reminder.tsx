import { ReminderItem } from '../../entities/reminderItem/ui/ReminderItem'
import LayoutHeader from '../../widgets/layoutHeader/LayoutHeader'

type Props = {
    title: string
}

const Reminder = ({ title }: Props) => {
    return (
        <div className="main-content">
            <LayoutHeader />
            <div className={'content-block-title'}>
                <h3 className={'content-title'}>{title}</h3>
            </div>
            <div className="r-items">
                <ReminderItem />
                <ReminderItem />
                <ReminderItem />
            </div>
        </div>
    )
}

export default Reminder
