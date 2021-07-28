import CardsContainer from "./CardsContainer";
import { useState, useEffect } from "react";


function BookmarkArea({ classes }) {
    const [bookmarkedImages, setBookmarkImages] = useState([]);
    let bookmarkedContainer = [];

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            bookmarkedContainer.push({
                url: localStorage.getItem(key),
                id: key,
                title: ' '
            });
            setBookmarkImages(bookmarkedContainer);
        }
    }, []);

    function removeImage(id) {
        bookmarkedContainer = bookmarkedImages.filter((image) => !(image.id === id));
        setBookmarkImages(bookmarkedContainer);
    }

    return (
        <CardsContainer classes={classes} allImages={bookmarkedImages} bookmarkArea={true} hideImage={removeImage}/>
    )
}

export default BookmarkArea
