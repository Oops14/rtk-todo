import type { Reminder } from '../../entities/reminderItem/model/reminderSlice.ts'

type Props = {
    reminders: Reminder[]
}

export const ItemCounter = ({reminders}: Props) => {
    return (
        <div className={'r-counter'}>{reminders.length}</div>
    )
}