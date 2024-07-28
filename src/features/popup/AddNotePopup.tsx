type Props = {
    setIsOpen: (isOpen: boolean) => void
}

export const AddNotePopup = ({ setIsOpen }: Props) => {
    const addNewNote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        setIsOpen(false)
    }

    return (
        <>
            <div className="popup-bg"></div>
            <div className="add-note-popup">
                <div className="popup-inner">
                    <form>
                        <div className="form-inner">
                            <label>Set the title for your Note</label>
                            <input type="text" className="title-note-input" />
                            <label>Is this note for task or reminder?</label>
                            <select>
                                <option value="tas">Task</option>
                                <option value="rem">Reminder</option>
                            </select>
                        </div>

                        <button onClick={(e) => addNewNote(e)} className="btn">
                            Create a Note
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
