import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {useState, useEffect} from "react";

function ImageCard({ classes, imageUrl, title, id, bookmarkArea, hideImage}) {
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if(key === id) {
                setBookmarked(true);
                break;
            }
        }
    },[]);
    

    function addBookmarkImage() {
        localStorage.setItem(id, imageUrl);
        setBookmarked(!bookmarked);
    }
    function removeBookmarkImage() {
        localStorage.removeItem(id);
        if(bookmarkArea) {
            hideImage(id);
        }
        setBookmarked(!bookmarked);
    }

    return (
        <Grid item xs={4}>
            <Card className={classes.card}>
                <CardMedia
                    image={imageUrl}
                    title={title}
                    className={classes.media}
                />
                <CardContent>
                    <Typography variant="body1">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color={bookmarked ? 'secondary' : 'primary'} onClick={bookmarked ? removeBookmarkImage : addBookmarkImage}>
                       {bookmarked ? 'Remove it!' : 'Bookmark it!'}
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default ImageCard
