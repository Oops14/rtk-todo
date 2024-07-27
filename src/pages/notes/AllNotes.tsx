import GridViewIcon from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList'
import Search from '../../features/search/Search.tsx'
import LayoutHeader from '../../widgets/layoutHeader/LayoutHeader.tsx'
import MasonryGrid from './masonryGrid/MasonryGrid.tsx'

const AllNotes = () => {
    return (
        <div className={'main-content'}>
            <LayoutHeader />
            <div className={'content-block-title'}>
                <h3 className={'content-title'}>Notes</h3>
                <button className={'btn btn-add'}> + New Note</button>
            </div>

            <div className="search-filter-block">
                <Search placeholder={'Search by title...'} />
                <div className="filter-area">
                    <select className="filter-select">
                        <option value="filter">Filter</option>
                        <option value="newest">Sort by newest</option>
                        <option value="latest">Sort by latest</option>
                    </select>
                    <div className="buttons_grid">
                        <button className="list-btn">
                            <ViewListIcon />
                        </button>
                        <button className="grid-btn active-btn">
                            <GridViewIcon />
                        </button>
                    </div>
                </div>
            </div>

            <div className="notes-grid">
                <MasonryGrid />
            </div>
        </div>
    )
}

export default AllNotes
