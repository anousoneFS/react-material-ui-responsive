import { makeStyles } from "@material-ui/styles"
import { Container, Typography } from "@material-ui/core"
import { Bookmark, Camera, Home, Person, Settings } from "@material-ui/icons"
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main,
        color: "white",
        height: "100vh",
        top: 0,
        position: "sticky",
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "white",
            color: "#555",
            // borderRight: "1px solid #555",
        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        },
    },
    icon: {
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
        },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}))

const Leftbar = () => {
    const classes = useStyle()

    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>Home Page</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>Setting</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>Person</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon} />
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>Bookmark</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
