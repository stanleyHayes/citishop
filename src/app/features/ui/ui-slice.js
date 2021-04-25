import {createSlice} from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: "light",
        activePage: "/",
        drawerOpen: false
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = state.theme === "light" ? "dark": "light";
        },
        changeActivePage: (state, action) => {
            state.activePage = action.payload;
        },
        closeDrawer: (state, action) => {
            state.drawerOpen = false;
        },
        openDrawer: (state, action) => {
            state.drawerOpen = true;
        },
    }
});
export const selectTheme = state => state.ui.theme;
export const selectActivePage = state => state.ui.activePage;
export const selectDrawerOpen = state => state.ui.drawerOpen;

export const {changeActivePage, toggleTheme, openDrawer, closeDrawer} = uiSlice.actions;
export default uiSlice.reducer;