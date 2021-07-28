import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';
import CardsContainer from './CardsContainer';
import { useState } from 'react'


function SearchArea({ classes, allImages, onSearch, onChangePage, numberOfPage }) {
    const [searchText, setSearchText] = useState('');

    function searchImages(e) {
        if (e.key === 'Enter') {
            onSearch(searchText);
        }
    }

    function changePage(e, value) {
        onChangePage(value);
    }

    return (
        <>
            <TextField
                id="outlined-basic"
                label="Type text and press Enter"
                variant="outlined"
                className={classes.search}
                value={searchText}
                onChange={(e) => { setSearchText(e.target.value) }}
                onKeyPress={searchImages}
            />
            <Pagination
                count={10}
                variant="outlined"
                color="secondary"
                onChange={changePage}
                className={classes.pagination}
                value={numberOfPage}
            />
            <CardsContainer classes={classes} allImages={allImages} bookmarkArea={false} />
        </>
    )
}

export default SearchArea
