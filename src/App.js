import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/home-page";
import AccountPage from "./pages/account/account-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import SignUpPage from "./pages/authentication/sign-up-page";
import SignInPage from "./pages/authentication/sign-in-page";
import CheckoutPage from "./pages/cart/checkout-page";
import ShippingPage from "./pages/cart/shipping-page";
import {ShoppingCart} from "@material-ui/icons";
import ExplorePage from "./pages/explore/explore-page";
import OrderDetailPage from "./pages/order/order-detail-page";
import ProductsPage from "./pages/product/products-page";
import ShopsPage from "./pages/shop/shops-page";
import ShopDetailPage from "./pages/shop/shop-detail-page";
import EventDetailPage from "./pages/others/event-detail-page";
import EventsPage from "./pages/others/events-page";
import {useSelector} from "react-redux";
import {selectTheme} from "./app/features/ui/ui-slice";
import {ThemeProvider} from "@material-ui/core";
import {dark, light} from "./themes/themes";
import React from "react";

function App() {
    const theme = useSelector(selectTheme);
    return (
        <ThemeProvider theme={theme === "dark" ? dark : light}>
            <Switch>
                <Route path="/" exact={true}>
                    <HomePage/>
                </Route>
                <Route path="/account" exact={true}>
                    <AccountPage/>
                </Route>
                <Route path="/auth/forgot-password" exact={true}>
                    <ForgotPasswordPage/>
                </Route>
                <Route path="/auth/reset-password" exact={true}>
                    <ResetPasswordPage/>
                </Route>
                <Route path="/auth/signup" exact={true}>
                    <SignUpPage/>
                </Route>
                <Route path="/auth/signin" exact={true}>
                    <SignInPage/>
                </Route>
                <Route path="/checkout" exact={true}>
                    <CheckoutPage/>
                </Route>
                <Route path="/shipping" exact={true}>
                    <ShippingPage/>
                </Route>
                <Route path="/cart" exact={true}>
                    <ShoppingCart/>
                </Route>
                <Route path="/explore" exact={true}>
                    <ExplorePage/>
                </Route>
                <Route path="/orders/:orderID" exact={true}>
                    <OrderDetailPage/>
                </Route>
                <Route path="/orders" exact={true}>
                    <HomePage/>
                </Route>
                <Route path="/products" exact={true}>
                    <ProductsPage/>
                </Route>
                <Route path="/shops" exact={true}>
                    <ShopsPage/>
                </Route>
                <Route path="/shops/:shopID" exact={true}>
                    <ShopDetailPage/>
                </Route>
                <Route path="/events" exact={true}>
                    <EventsPage/>
                </Route>
                <Route path="/events/:eventID" exact={true}>
                    <EventDetailPage/>
                </Route>
            </Switch>
        </ThemeProvider>
    );
}

export default App;
