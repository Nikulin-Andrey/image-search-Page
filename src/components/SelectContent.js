import SearchArea from './SearchArea';
import BookmarkArea from './BookmarkArea';


function SelectContent({ classes, allImages, onSearch, onChangePage, bookmark, numberOfPage }) {
    if (bookmark) {
        return (
            <BookmarkArea classes={classes} />
        );
    } else {
        return <SearchArea
            classes={classes}
            allImages={allImages}
            onSearch={onSearch}
            onChangePage={onChangePage}
            numberOfPage={numberOfPage}
        />
    }
}

export default SelectContent
