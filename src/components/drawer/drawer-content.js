import React from "react";
import {Avatar, Button, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Close} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {closeDrawer} from "../../app/features/ui/ui-slice";


const DrawerContent = () => {

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: "none"
            },
            button: {
                color: theme.palette.text.secondary
            },
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            avatar: {
                width: 150,
                height: 150
            },
            name: {},
            nickname: {},
            role: {
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                marginBottom: 16,
                borderRadius: 16,
                fontWeight: "bold"
            },
            subDivider: {
                marginTop: 8,
                marginBottom: 8
            },
            container: {
                paddingTop: 32,
                paddingBottom: 32
            },
            closeButton: {}
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Container className={classes.container}>
            <Grid container={true} justify="center">
                <Grid item={true} xs={12} container={true} justify="flex-end">
                    <Grid item={true}>
                        <Button
                            color="primary"
                            className={classes.closeButton}
                            onClick={() => dispatch(closeDrawer())}
                            startIcon={<Close/>}
                            variant="outlined"
                            size="large">
                            Close
                        </Button>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} container={true} justify="center">
                    <Grid item={true}>
                        <Avatar src="/assets/online-shopping.svg" className={classes.avatar}/>
                    </Grid>
                </Grid>
                <Grid item={true}>
                    <Typography
                        gutterBottom={true}
                        className={classes.name}
                        variant="h4"
                        color="textSecondary"
                        align="center">
                        CiTi Shop
                    </Typography>
                    <Divider variant="middle" className={classes.subDivider} light={true}/>
                    <Typography
                        color="textSecondary"
                        gutterBottom={true}
                        className={classes.nickname}
                        variant="body2"
                        align="center">
                        Creating tomorrow's businesses now, at ACity
                    </Typography>
                </Grid>
            </Grid>

            <Divider variant="fullWidth" className={classes.divider}/>

            <Grid container={true} justify="center">
                <Grid item={true} xs={12}>
                    <Link to="/" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Home
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/products" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Products
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/shops" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Shops
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/explore" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Explore
                        </Button>
                    </Link>

                    <Divider variant="fullWidth" className={classes.divider} light={true}/>

                    <Link to="/events" className={classes.link}>
                        <Button className={classes.button} fullWidth={true} variant="text" size="large">
                            Events
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;