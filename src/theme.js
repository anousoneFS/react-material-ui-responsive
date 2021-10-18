import { createTheme } from "@material-ui/core/styles"
import { red, blue } from "@material-ui/core/colors"

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: red[500],
        },
    },
    button: {
        backgroundColor: "red",
        border: "1px solid black",
        color: "white",
    },
})
