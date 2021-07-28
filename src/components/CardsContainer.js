import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

function CardsContainer({ classes, allImages, bookmarkArea, hideImage }) {
    if (allImages.length === 0) {
        return (
            <Typography variant="h4">No images here. Would you try to search for anything else?</Typography>
        )
    }
    const allCards = allImages.map((image) =>
        <ImageCard
            classes={classes}
            imageUrl={image.url}
            key={image.id}
            title={image.title}
            id={image.id}
            bookmarkArea={bookmarkArea}
            hideImage={hideImage}
        />
    );
    return (
        <Grid container spacing={1}>
            {allCards}
        </Grid>

    )
}

export default CardsContainer
