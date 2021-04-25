import React from "react";
import {AppBar, Hidden, makeStyles} from "@material-ui/core";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
import TabletHeader from "./tablet-header";

const Header = () => {

    const useStyles = makeStyles(theme => {
        return {
            root: {}
        }
    });

    const classes = useStyles();

    return (
        <AppBar className={classes.root} variant="outlined" elevation={0}>
            <Hidden mdDown={true}>
                <DesktopHeader/>
            </Hidden>
            <Hidden mdUp={true}>
                <MobileHeader/>
            </Hidden>
            <Hidden only={['xs', 'sm', 'lg', "xl"]}>
                <TabletHeader/>
            </Hidden>
        </AppBar>
    )
}

export default Header;