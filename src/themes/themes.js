import {createMuiTheme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const dark = createMuiTheme({
    palette: {
        primary: {
            main: "#cc3634"
        },
        secondary: {
            main: "#ffffff"
        },
        text: {
            primary: "#ffffff",
            secondary: "#cc3634",
            hint: grey["300"],
            disabled: grey["100"]
        },
        type: "dark"
    },
    typography: {
        fontFamily: 'Quicksand, sans-serif'
    },
    shape: {
        borderRadius: 2
    },
    background: {
        default: "#303030",
        paper: "#212121"
    },
    action: {
        hover: "#cc3634",
        selected: "#cc3634",
        focus: "#cc3634",
        active: "#cc3634",
        disabled: "#cc3634",
        hoverOpacity: 0.5,
        selectedOpacity: 0.7,
        focusOpacity: 0.6,
        activatedOpacity: 0.9
    },
    divider: "#cc3634",
    common: {
        white: "#ffffff",
        black: "#000000"
    }
});


export const light = createMuiTheme({
    palette: {
        primary: {
            main: "#cc3634"
        },
        secondary: {
            main: "#ffffff"
        },
        text: {
            primary: "#ffffff",
            secondary: "#cc3634",
            hint: grey["300"],
            disabled: grey["100"]
        },
        type: "light",
        background: {
            default: "#f0f1f2",
            paper: "#ffffff"
        },
        action: {
            hover: "#cc3634",
            selected: "#cc3634",
            focus: "#cc3634",
            active: "#cc3634",
            disabled: "#cc3634",
            hoverOpacity: 0.5,
            selectedOpacity: 0.7,
            focusOpacity: 0.6,
            activatedOpacity: 0.9
        },
        divider: "#cc3634",
        common: {
            white: "#ffffff",
            black: "#000000"
        }
    },
    typography: {
        fontFamily: 'Quicksand, sans-serif'
    },
    shape: {
        borderRadius: 2
    }
});