import { Grid } from "@material-ui/core"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"
import { makeStyles } from "@material-ui/styles"
import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import Add from "./components/Add"
const useStyle = makeStyles((theme) => ({
    right: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}))

const App = () => {
    const classes = useStyle()

    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Leftbar />
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed />
                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <Rightbar />
                </Grid>
            </Grid>
            <Add />
        </div>
    )
}

export default App
