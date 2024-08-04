import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../app/store'
import { addNote } from '../../entities/noteItem/model/noteSlice'

type Props = {
    setIsOpen: (isOpen: boolean) => void
}

/**
 * AddNotePopup component allows users to create a new note.
 * It provides a form with an input field for the note title and a select dropdown to choose the note type (task or reminder).
 * When the form is submitted, a new note is dispatched to the Redux store and the popup is closed.
 */
export const AddNotePopup = ({ setIsOpen }: Props) => {
    const dispatch = useAppDispatch()
    const titleInputRef = useRef<HTMLInputElement>(null)
    const [noteType, setNoteType] = useState('task')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNoteType(event.target.value)
    }

    const addNewNote = () => {
        if (titleInputRef.current) {
            const title = titleInputRef.current.value

            if (title.length) {
                dispatch(
                    addNote({
                        id: uuidv4(),
                        title: title,
                        img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=162&auto=format',
                        isReminder: noteType === 'reminder' ? true : false,
                        isTask: noteType === 'task' ? true : false,
                    })
                )
            }
        }

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
                            <input type="text" className="title-note-input" ref={titleInputRef} />
                            <label>Is this note for task or reminder?</label>
                            <select value={noteType} onChange={handleChange}>
                                <option value="task">Task</option>
                                <option value="reminder">Reminder</option>
                            </select>
                        </div>

                        <button onClick={addNewNote} className="btn">
                            Create a Note
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
