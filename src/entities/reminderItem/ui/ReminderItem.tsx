type Props = {
    date: string
}

export const ReminderItem = ({ date }: Props) => {
    const splitDate = date.split('at');

    return (
        <div className="r-item">
            <div className="r-image">
                <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" alt="img" />
            </div>
            <div className="r-item-info">
                <div className="r-date">
                    {splitDate[1]}
                    <span>{splitDate[0]}</span>
                </div>
                <div className="r-title">Mushrooms</div>
            </div>
        </div>
    )
}
