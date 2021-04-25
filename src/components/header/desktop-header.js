import React from "react";
import {Avatar, Badge, Button, Fab, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectTheme, toggleTheme} from "../../app/features/ui/ui-slice";
import {Brightness4, Brightness7, ShoppingCart} from "@material-ui/icons";

const DesktopHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            root: {},
            button: {
                fontWeight: 600
            },
            link: {
                textDecoration: "none"
            },
            account: {},
            container: {
                display: "flex"
            },
            navigation: {
                flexGrow: 1
            },
            brand: {},
            logo: {
                width: 50,
                height: 50,
                border: '2px solid white'
            },
        }
    });

    const classes = useStyles();

    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Toolbar variant="regular" className={classes.root}>
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid
                    alignItems="center"
                    justify="flex-start"
                    lg={3}
                    spacing={3}
                    container={true}
                    className={classes.brand}>
                    <Grid item={true}>
                        <Avatar src="/assets/online-shopping.svg" className={classes.logo}/>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/" className={classes.link}>
                            <Typography color="textPrimary" variant="h3">CiTi SHOP</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid
                    spacing={3}
                    alignItems="center"
                    justify="center"
                    lg={6}
                    className={classes.navigation}
                    container={true} >
                    <Grid item={true}>
                        <Link to="/" className={classes.link}>
                            <Button className={classes.button} variant="text" size="large">Home</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/products" className={classes.link}>
                            <Button className={classes.button} variant="text" size="large">Products</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/shops" className={classes.link}>
                            <Button className={classes.button} variant="text" size="large">Shops</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/explore" className={classes.link}>
                            <Button className={classes.button} variant="text" size="large">Explore</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/events" className={classes.link}>
                            <Button className={classes.button} variant="text" size="large">Events</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid
                    spacing={3}
                    lg={3}
                    alignItems="center"
                    container={true}
                    className={classes.account}
                    justify="flex-end">
                    <Grid item={true}>
                        <Badge variant="standard" color="secondary" badgeContent={10}>
                            <ShoppingCart/>
                        </Badge>

                    </Grid>
                    <Grid item={true}>
                        {theme === "dark" ?
                            <Fab onClick={() => dispatch(toggleTheme())} size="small" color="secondary"><Brightness7
                                color="primary"/></Fab> :
                            <Fab onClick={() => dispatch(toggleTheme())} color="secondary" size="small"><Brightness4
                                color="primary"/></Fab>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;