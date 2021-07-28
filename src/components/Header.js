import { Grid, AppBar, Typography, Container, Toolbar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


function Header({ classes }) {

    return (
        <AppBar position="absolute">
            <Toolbar>
                <Container fixed>
                    <Grid container className={classes.headerContainer}>
                        <Grid item>
                            <Typography variant="h6">
                                Image Search
                            </Typography>
                        </Grid>
                        <Grid item>
                            <AccountCircle fontSize="large" />
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Header
