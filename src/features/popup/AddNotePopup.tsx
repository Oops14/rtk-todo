import { useRef } from 'react'
import { useAppDispatch } from '../../app/store'
import { addNewNoteAction } from '../../entities/noteItem/model/noteSlice'

type Props = {
    setIsOpen: (isOpen: boolean) => void
}

export const AddNotePopup = ({ setIsOpen }: Props) => {
    const dispatch = useAppDispatch()
    const titleInputRef = useRef<HTMLInputElement>(null)

    const addNewNote = () => {
        if (titleInputRef.current) {
            const title = titleInputRef.current.value
            console.log('Note Title:', title)

            dispatch(
                addNewNoteAction({
                    title: title,
                    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=162&auto=format',
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
                            <select>
                                <option value="tas">Task</option>
                                <option value="rem">Reminder</option>
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
