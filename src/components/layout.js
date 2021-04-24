import React from "react";
import {Box,  makeStyles} from "@material-ui/core";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            root: {},
            content: {},
            footer: {},
            header: {}
        }
    });

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>

            </Box>
            <Box className={classes.content}>
                {children}
            </Box>
            <Box className={classes.footer}>

            </Box>
        </Box>
    )
}

export default Layout;