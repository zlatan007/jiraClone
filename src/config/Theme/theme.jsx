import { createTheme, ThemeProvider } from "@mui/material/styles";

const Theme = (props) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#39789a",
                contrastText: "#fff"
            },
            secondary: {
                main: "#252525",
                contrastText: "#fff"
            },
            text: {
                primary: "#1B2543"
            }
        }
    })

    return (
        <>
            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </>
    )
}

export default Theme;