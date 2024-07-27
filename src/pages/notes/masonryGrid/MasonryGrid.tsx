import { useCallback, useEffect } from 'react'
import NoteItem from '../../../entities/noteItem/ui/NoteItem'

export default function MasonryGrid() {
    const imagesMasonry = useCallback(() => {
        const masonryWrapper = document.querySelector('.masonry-with-flex') as HTMLElement
        Array.from(masonryWrapper.children).forEach((child, i) => {
            const order = i % 3
            ;(child as HTMLElement).style.order = `${order}`
        })
    }, [])

    useEffect(() => {
        imagesMasonry()
    }, [imagesMasonry])

    return (
        <div className="masonry-with-flex masonry-with-columns" style={{ maxHeight: '1200px' }}>
            {/* <img src="https://mdbootstrap.com/img/Photos/Others/food3.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image06.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image17.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image02.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image008.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image010.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image002.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image005.webp" />
            <img src="https://mdbootstrap.com/img/Photos/Others/image18.webp" /> */}
            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image06.webp'} />
            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image17.webp'} />

            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image02.webp'} />
            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image008.webp'} />
            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image010.webp'} />

            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image002.webp'} />
            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image005.webp'} />
            <NoteItem img={'https://mdbootstrap.com/img/Photos/Others/image18.webp'} />
        </div>
    )
}
