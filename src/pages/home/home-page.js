import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";
import Layout from "../../components/layout";

const HomePage = () => {

    const useStyles = makeStyles(theme => {
        return {
            root: {
                paddingTop: 83
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.root}>
                <Typography variant="h1" align="center">Home Page</Typography>
            </Container>
        </Layout>
    )
}

export default HomePage;