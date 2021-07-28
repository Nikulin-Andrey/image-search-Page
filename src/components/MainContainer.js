import { Container, Grid, Paper } from '@material-ui/core';
import SelectionButtons from './SelectionButtons';
import SelectContent from './SelectContent';

function MainContainer({ classes, onSearch, allImages, onChangePage, isBookmark, isSearch, numberOfPage }) {

    return (
        <Container fixed>
            <div className={classes.appBarSpacer} />
            <Grid container className={classes.mainContainer} spacing={2}>
                <Grid item xs={1}>
                    <Paper className={classes.leftBar}>
                        <SelectionButtons isSearch={isSearch} isBookmark={isBookmark}/>
                    </Paper>
                </Grid>
                <Grid item xs={11}>
                    <SelectContent
                        bookmark={isBookmark}
                        classes={classes}
                        allImages={allImages}
                        onSearch={onSearch}
                        onChangePage={onChangePage}
                        numberOfPage={numberOfPage}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainContainer
