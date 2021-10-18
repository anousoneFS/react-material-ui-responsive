import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
    },
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
    },
    action: {
        display: "flex",
        justifyContent: "flex-end",
        right: 0,
    },
    share: {
        marginRight: theme.spacing(3),
    },
}))

const Post = () => {
    const classes = useStyle()

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    title="my post"
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        my first post
                    </Typography>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat nemo voluptatibus nam minus reiciendis
                        fugit vitae consectetur, officiis esse soluta recusandae
                        numquam excepturi veniam. Cumque eligendi quia,
                        voluptate provident, voluptates iure ipsum odit est
                        blanditiis deserunt exercitationem, qui culpa quod!
                        Nemo, libero voluptate. Minus rerum illo dolorem,
                        aspernatur voluptatum sit dolor quibusdam, voluptatem
                        sunt nam autem quia. Illo sequi in nobis enim soluta
                        commodi accusamus voluptatem sint error aspernatur
                        voluptatum voluptate, perferendis minus harum saepe unde
                        tempore tenetur velit aut dolorum nulla, accusantium
                        ipsa cumque ea? Tenetur veritatis nulla ipsam temporibus
                        mollitia, praesentium, molestias saepe rerum asperiores
                        impedit aliquam. Enim?
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>
                <div className="actionPosition">
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.share}
                    >
                        Share
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.like}
                    >
                        Like
                    </Button>
                </div>
            </CardActions>
        </Card>
    )
}

export default Post
