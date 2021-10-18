import {
    Button,
    RadioGroup,
    Radio,
    FormControlLabel,
    Container,
    TextField,
    MenuItem,
    FormLabel,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import PropTypes from "prop-types"

const useStyle = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 500,
        height: 550,
        backgroundColor: "white",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        },
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    },
}))

const BodyModal = (open, alert) => {
    const classes = useStyle()
    return (
        <Container className={classes.paper}>
            <form className={classes.form} autoComplete="off">
                <div className={classes.item}>
                    <TextField
                        label="Title"
                        id="standard-size-small"
                        size="small"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className={classes.item}>
                    <TextField
                        id="standard-size-small"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className={classes.item}>
                    <TextField label="Visibility" value="Public" select>
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                        <MenuItem value="Unlisted">Unlisted</MenuItem>
                    </TextField>
                </div>
                <div className={classes.item}>
                    <FormLabel component="legend">who can comment?</FormLabel>
                    <RadioGroup>
                        <FormControlLabel
                            value="every one"
                            control={<Radio size="small" />}
                            label="every one"
                        />
                        <FormControlLabel
                            value="No Body"
                            control={<Radio size="small" />}
                            label="No Body"
                        />
                        <FormControlLabel
                            value="My Friends"
                            control={<Radio size="small" />}
                            label="My Friends"
                        />
                        <FormControlLabel
                            value="Custom"
                            disabled
                            control={<Radio size="small" />}
                            label="Custom (Premium)"
                        />
                    </RadioGroup>
                </div>
                <div className={classes.item}>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{ marginRight: "10px" }}
                        onClick={() => alert()}
                    >
                        Create
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={open}>
                        Cancel
                    </Button>
                </div>
            </form>
            {/* <Add /> */}
        </Container>
    )
}

BodyModal.propTypes = {
    open: PropTypes.func.isRequired,
    alert: PropTypes.func.isRequired,
}

export default BodyModal
