import { makeStyles } from "@material-ui/styles"
import React, { useState } from "react"
import { Add as AddIcon } from "@material-ui/icons"
import BodyModal from "./BodyModal"
import { Snackbar, Tooltip, Fab, Modal, Button } from "@material-ui/core"
import { Alert } from "@material-ui/lab"

const useStyle = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    alert: {
        position: "fixed",
        bottom: 90,
        right: 20,
    },
}))

const Add = () => {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const [alert, setAlert] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleAlert = () => {
        setAlert(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseAlert = (even, reason) => {
        if (reason === "clickaway") {
            return
        }
        setAlert(false)
    }

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setAlert(true)}
                className={classes.alert}
            >
                Alert
            </Button>
            <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <BodyModal setOpen={handleOpen} setAlert={handleAlert} />
            </Modal>
            <Snackbar
                open={alert}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={handleCloseAlert} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Add
