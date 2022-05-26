import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
<<<<<<< HEAD
import {useSelector} from 'react-redux'
import {appActions} from '../../features/CommonActions/App'
import {AppRootStateType} from '../../utils/types'
import {useActions} from '../../utils/redux-utils'
=======
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../app/store'
import {setAppErrorAC} from '../../app/app-reducer'
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {
    //const [open, setOpen] = React.useState(true)
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error);
<<<<<<< HEAD
    const {setAppError} = useActions(appActions)
=======
    const dispatch = useDispatch()
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
<<<<<<< HEAD
        setAppError({error: null});
=======
        dispatch(setAppErrorAC(null));
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
    }


    const isOpen = error !== null;

    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
