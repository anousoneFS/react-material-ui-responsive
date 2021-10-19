import {
    Container,
    Typography,
    Avatar,
    ImageList,
    ImageListItem,
} from "@material-ui/core"
import { AvatarGroup } from "@material-ui/lab"
import { makeStyles } from "@material-ui/styles"
const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        color: "#555",
    },
    imageList: {
        width: 300,
        height: 280,
    },
}))

const Rightbar = () => {
    const classes = useStyle()

    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>
                online friends
            </Typography>
            <AvatarGroup max={4}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                />
                <Avatar
                    al
                    t="Travis Howard"
                    src="https://mui.com
               /static/images/avatar/2.jpg"
                />
                <Avatar
                    a
                    lt="Cindy Baker"
                    src="https://material-ui.com
               /static/images/avatar/3.jpg"
                />
                <Avatar
                    a
                    l
                    t="Agnes Walker"
                    src="https://material-ui.com
               /static/images/avatar/4.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="https://material-ui.com
               /static/images/avatar/5.jpg"
                />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>
                Gallery
            </Typography>
            <ImageList rowHeight={120} className={classes.imageList} cols={3}>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </ImageListItem>
            </ImageList>
        </Container>
    )
}

export default Rightbar
