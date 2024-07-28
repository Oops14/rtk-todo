import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../app/store'
import { addNote } from '../../entities/noteItem/model/noteSlice'

type Props = {
    setIsOpen: (isOpen: boolean) => void
}

/**
 * 
 // TODO: REMOVE HARDCODED VALUE FOR IMG.
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
            console.log('Note Title:', title)

            dispatch(
                addNote({
                    id: uuidv4(),
                    title: title,
                    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=162&auto=format',
                    reminder: noteType === 'reminder' ? true : false,
                    task: noteType === 'task' ? true : false,
                })
            )
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
