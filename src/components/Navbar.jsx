import React, { useState } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Badge,
    Avatar,
} from "@material-ui/core"
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons"
import { alpha } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/styles"

const useStyle = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoLg: {
        display: "none",
        cursor: "pointer",
        // if screen size > small then display large text
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        cursor: "pointer",
        // if screen size < sm then this play small text
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    search: {
        display: "flex",
        width: "50%",
        padding: 5,
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "80%",
        },
    },
    searchIcon: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        color: "#555",
        fontSize: "30px",
        cursor: "pointer",
    },
    searchButton: {
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    input: {
        width: "80%",
        border: "1px solid white",
        borderRadius: "10px",
        padding: "5px 15px",
        fontSize: "18px",
        fontWeight: "300",
        color: "black",
        marginRight: "10px",
    },
    cancel: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
        },
    },
    icons: {
        display: (props) => (props.open ? "none" : "flex"),
        alignItems: "center",
    },
    badge: {
        marginRight: theme.spacing(2),
    },
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyle({ open })

    const openSearch = () => {
        setOpen(!open)
    }

    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                {/* display this when screen size > small */}
                <Typography variant="h6" className={classes.logoLg}>
                    ANOUSONE
                </Typography>
                {/* display this when screen size < small */}
                <Typography variant="h6" className={classes.logoSm}>
                    ANS
                </Typography>
                {/* search secsion */}
                <div className={classes.search}>
                    <Search className={classes.searchIcon} />
                    <InputBase placeholder="Search" className={classes.input} />
                    <Cancel
                        className={classes.cancel}
                        onClick={() => setOpen(false)}
                    />
                </div>
                <div className={classes.icons}>
                    <Search
                        className={classes.searchButton}
                        onClick={() => openSearch()}
                    />
                    <Badge
                        badgeContent={4}
                        color="secondary"
                        className={classes.badge}
                    >
                        <Mail />
                    </Badge>
                    <Badge
                        badgeContent={2}
                        color="secondary"
                        className={classes.badge}
                    >
                        <Notifications />
                    </Badge>
                    <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                    />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
