import React from "react"
import PropTypes from "prop-types"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

function SnackBar(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <Snackbar
          open={openSnackbar.open && openSnackbar.status === 201}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            You have subcribe to our Monthly Newsletter!
          </Alert>
        </Snackbar> */}

      <Snackbar
        open={props.openSnackbar.open && props.openSnackbar.status === 201}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={props.handleClose}
      >
        <Alert onClose={props.handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={props.openSnackbar.open && props.openSnackbar.status > 201}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={props.handleClose}
      >
        <Alert onClose={props.handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>

      {/* <Snackbar
          open={openSnackbar.open && openSnackbar.status === 422}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            Inavlid Email Address!
          </Alert>
        </Snackbar> */}
    </div>
  )
}

SnackBar.propTypes = {
  openSnackbar: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
}

export default SnackBar
