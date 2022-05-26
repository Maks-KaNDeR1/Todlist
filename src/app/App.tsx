import React, {useCallback, useEffect} from 'react'
import './App.css'
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
<<<<<<< HEAD
import {TodolistsList} from '../features/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {appActions} from '../features/Application'
import {Route} from 'react-router-dom'
import {authActions, Login} from '../features/Auth'
import {selectIsInitialized, selectStatus} from '../features/Application/selectors'
import {authSelectors} from '../features/Auth'
import {useActions} from '../utils/redux-utils'
=======
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeAppTC, RequestStatusType} from './app-reducer'
import {BrowserRouter, Route} from 'react-router-dom'
import {Login} from '../features/Login/Login'
import {logoutTC} from '../features/Login/auth-reducer'
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
<<<<<<< HEAD
    const status = useSelector(selectStatus)
    const isInitialized = useSelector(selectIsInitialized)
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn)

    const {logout} = useActions(authActions)
    const {initializeApp} = useActions(appActions)

    useEffect(() => {
        if (!demo) {
            initializeApp()
        }
    }, [])

    const logoutHandler = useCallback(() => {
        logout()
=======
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
<<<<<<< HEAD
=======
        <BrowserRouter>
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
            <div className="App">
                <ErrorSnackbar/>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6">
                            News
                        </Typography>
                        {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Log out</Button>}
                    </Toolbar>
                    {status === 'loading' && <LinearProgress/>}
                </AppBar>
                <Container fixed>
                    <Route exact path={'/'} render={() => <TodolistsList demo={demo}/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </Container>
            </div>
<<<<<<< HEAD
=======
        </BrowserRouter>
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
    )
}

export default App
