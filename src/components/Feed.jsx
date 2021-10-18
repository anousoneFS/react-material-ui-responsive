import { makeStyles } from "@material-ui/styles"
import Post from "./Post"
import { Container } from "@material-ui/core"
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        display: "flex",
        flexDirection: "column",
    },
}))

const Feed = () => {
    const classes = useStyle()

    return (
        <Container className={classes.container}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

export default Feed
