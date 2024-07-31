type Props = {
    title: string
}

export const TaskItem = ({ title }: Props) => {
    return (
        <div className="task-item">
            <input type="checkbox" />
            <h5>{title}</h5>
            <a href="#" className="btn">
                X
            </a>
        </div>
    )
}
