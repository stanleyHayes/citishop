import React from "react";
import { Grid, makeStyles, Toolbar} from "@material-ui/core";

const DesktopHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            root: {

            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="regular" className={classes.root}>
            <Grid container={true}>

            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;