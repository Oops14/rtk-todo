import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../../app/store'
import { Notes } from '../../entities/noteItem/model/noteSlice'
import NoteItem from '../../entities/noteItem/ui/NoteItem.tsx'

/**
 *
 // TODO: MOVE STYLES FROM HTML TO SCSS.
 // TODO: ADD ACTIVE BOTTOM BUTTON STYLE.
 */
export default function MasonryGrid() {
    const notes = useSelector<AppRootStateType, Notes[]>((state) => state.notes)

    return (
        <Box sx={{ width: '100%', minHeight: 829 }}>
            <Masonry columns={4} spacing={2}>
                {notes.map((item) => (
                    <NoteItem
                        key={item.id}
                        itemId={item.id}
                        title={item.title}
                        img={item.img ?? ''}
                        isTask={item.isTask}
                    />
                ))}
            </Masonry>
        </Box>
    )
}
