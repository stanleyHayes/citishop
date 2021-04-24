import React from "react";
import {Container, Grid, makeStyles} from "@material-ui/core";

const Footer = () => {

    const useStyles = makeStyles(theme => {
        return {
            root: {

            }
        }
    });

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container={true}>

            </Grid>
        </Container>
    )
}

export default Footer;