import React from "react";
import {Badge, Fab, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Brightness4, Brightness7, Menu, ShoppingCart} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {selectTheme, openDrawer, toggleTheme} from "../../app/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const MobileHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            root: {

            },
            link: {
                textDecoration: "none"
            },
            brand: {
                fontWeight: "bold"
            }
        }
    });

    const classes = useStyles();

    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Toolbar variant="regular" className={classes.root}>
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={1}>
                    <Menu onClick={() => dispatch(openDrawer())} />
                </Grid>
                <Grid container={true} justify="flex-start" item={true} xs={6}>
                    <Link to="/" className={classes.link}>
                        <Typography color="secondary" variant="h5" className={classes.brand}>CiTi Shop</Typography>
                    </Link>
                </Grid>
                <Grid item={true} xs={5} spacing={3} container={true} justify="flex-end" alignItems="center">
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

export default MobileHeader;