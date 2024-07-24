import LayoutHeader from '../../widgets/layoutHeader/LayoutHeader.tsx'

const AllNotes = () => {
    return (
        <div className={'main-content'}>
            <LayoutHeader />
            <div className={'content-block-title'}>
                <h3 className={'content-title'}>Notes</h3>
                <button className={'btn btn-add'}> + New Note</button>
            </div>
        </div>
    )
}

export default AllNotes
