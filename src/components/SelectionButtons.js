import { Bookmarks, ImageSearch } from '@material-ui/icons'
import { Container, IconButton } from '@material-ui/core';

function SelectionButtons({ isSearch, isBookmark }) {
    function selectSearch() {
        isSearch(true);
    }
    function selectBookmarks() {
        isSearch(false);
    }

    return (
        <Container fixed>
            <IconButton onClick={selectSearch} aria-label="image search" color="primary" disabled={!isBookmark}>
                <ImageSearch />
            </IconButton>
            <IconButton onClick={selectBookmarks} aria-label="bookmarks" color="primary" disabled={isBookmark}>
                <Bookmarks />
            </IconButton>
        </Container>
    )
}

export default SelectionButtons
