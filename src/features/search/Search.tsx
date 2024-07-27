import SearchIcon from '@mui/icons-material/Search'

type Props = {
    placeholder: string
}

const Search = ({ placeholder }: Props) => {
    return (
        <div className={'search'}>
            <div className="s-icon">
                <SearchIcon />
            </div>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default Search
