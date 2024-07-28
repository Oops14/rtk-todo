type Props = {
    img?: string
}

const NoteItem = ({ img }: Props) => {
    return (
        <div className="note-grid-item ">
            <img src={img} alt="#" />
            <h3>Title for the note.</h3>
        </div>
    )
}

export default NoteItem
