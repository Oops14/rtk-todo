import { ReminderItem } from '../../entities/reminderItem/ui/ReminderItem'
import LayoutHeader from '../../widgets/layoutHeader/LayoutHeader'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../app/store.ts'
import type { Reminder } from '../../entities/reminderItem/model/reminderSlice.ts'

type Props = {
    title: string
}

const Reminder = ({ title }: Props) => {
    const reminders = useSelector<AppRootStateType, Reminder[]>(state => state.reminder)

    return (
        <div className="main-content">
            <LayoutHeader />
            <div className={'content-block-title'}>
                <h3 className={'content-title'}>{title}</h3>
            </div>
            <div className="r-items">
                {reminders.map(r => {
                    return (
                        <ReminderItem key={r.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Reminder
