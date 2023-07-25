import { createTheme } from "@mui/material";


// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)


const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: 'hsla(0,3%,94%,.831)',
        },
        secondary: {
            main: '#f50057',
        },
        purple: {
            main: "linear-gradient(90deg,#ea336f,#b02b9a)"
        },
        story: {
            main: "#fff"
        },
        storyText: {
            main: "#242424"
        },
        plainDark: {
            main: "#000"
        },
        plainLight: {
            main: "#fff"
        },
        text: {
            main: "#000"
        },
        addBtn: {
            main: "#1a2958"
        },
        golden: {
            main: "linear-gradient(90deg,#ffce6d,#fdc962,#fcc456,#fabe4a,#f8b93d)"
        }
    },
});

const darkTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#161616',
        },
        secondary: {
            main: '#242424',
        },
        purple: {
            main: "linear-gradient(90deg,#ea336f,#b02b9a)"
        },
        story: {
            main: "#242424"
        },
        storyText: {
            main: "#fff"
        },
        plainDark: {
            main: "#fff"
        },
        plainLight: {
            main: "#000"
        },
        text: {
            main: "#000"
        },
        addBtn: {
            main: "linear-gradient(90deg,#ea336f,#b02b9a)"
        },
        golden: {
            main: "linear-gradient(90deg,#ffce6d,#fdc962,#fcc456,#fabe4a,#f8b93d)"
        }
    },
});

export { lightTheme, darkTheme };