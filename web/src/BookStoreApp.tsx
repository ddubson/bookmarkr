import * as React from "react";
import {AppBar, CssBaseline, Grid, Toolbar, Typography, withStyles, WithStyles} from "@material-ui/core";
import {styles} from "./BookStoreApp.styles";
import ProductCard from "./ProductCard";

interface BookStoreAppProps extends WithStyles<typeof styles> {
}

const BookStoreApp = (props: BookStoreAppProps) => (
    <React.Fragment>
        <CssBaseline />
        <Grid container>
            <AppBar position="static"
                    className={props.classes.appBar}>
                <Toolbar>
                    <Typography
                        variant="title"
                        color="inherit"
                        data-test="test"
                        noWrap
                        className={props.classes.toolbarTitle}>
                        Book Store
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
        <Grid>
            <ProductCard />
        </Grid>
    </React.Fragment>
);

export default withStyles(styles)(BookStoreApp);