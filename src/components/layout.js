import React from "react";
import {Box, makeStyles, SwipeableDrawer, ThemeProvider} from "@material-ui/core";
import Header from "./header/header";
import Footer from "./footer/footer";
import {useDispatch, useSelector} from "react-redux";
import {selectDrawerOpen, selectTheme, closeDrawer, openDrawer} from "../app/features/ui/ui-slice";
import {dark, light} from "../themes/themes";
import DrawerContent from "./drawer/drawer-content";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            root: {
                minHeight: '100vh',
                background: theme.palette.background.default
            },
            content: {},
            footer: {},
            header: {}
        }
    });

    const classes = useStyles();

    const theme = useSelector(selectTheme);
    const drawerOpen = useSelector(selectDrawerOpen);
    const dispatch = useDispatch();

    return (
        <ThemeProvider theme={theme === "dark" ? dark : light}>
            <Box className={classes.root}>
                <Box className={classes.header}>
                    <Header/>
                </Box>
                <Box className={classes.content}>
                    {children}
                </Box>
                <Box className={classes.footer}>
                    <Footer/>
                </Box>

                <SwipeableDrawer
                    onClose={() => dispatch(closeDrawer())}
                    onOpen={() => dispatch(openDrawer())}
                    open={drawerOpen}>
                    <DrawerContent/>
                </SwipeableDrawer>
            </Box>
        </ThemeProvider>
    )
}

export default Layout;