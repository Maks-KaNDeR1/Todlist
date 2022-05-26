import React, {useCallback, useEffect} from 'react'
<<<<<<< HEAD
import {useSelector} from 'react-redux'
import {TodolistDomainType} from './todolists-reducer'
import {TasksStateType} from './tasks-reducer'
import {Grid, Paper} from '@material-ui/core'
import {AddItemForm, AddItemFormSubmitHelperType} from '../../components/AddItemForm/AddItemForm'
import {Todolist} from './Todolist/Todolist'
import {Redirect} from 'react-router-dom'
import {selectIsLoggedIn} from '../Auth/selectors'
import {tasksActions, todolistsActions} from './index'
import {AppRootStateType} from '../../utils/types'
import {useActions, useAppDispatch} from '../../utils/redux-utils'
=======
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../app/store'
import {
    addTodolistTC,
    changeTodolistFilterAC,
    changeTodolistTitleTC,
    fetchTodolistsTC,
    FilterValuesType,
    removeTodolistTC,
    TodolistDomainType
} from './todolists-reducer'
import {addTaskTC, removeTaskTC, TasksStateType, updateTaskTC} from './tasks-reducer'
import {TaskStatuses} from '../../api/todolists-api'
import {Grid, Paper} from '@material-ui/core'
import {AddItemForm} from '../../components/AddItemForm/AddItemForm'
import {Todolist} from './Todolist/Todolist'
import { Redirect } from 'react-router-dom'
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

type PropsType = {
    demo?: boolean
}

export const TodolistsList: React.FC<PropsType> = ({demo = false}) => {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const isLoggedIn = useSelector(selectIsLoggedIn)

    const dispatch = useAppDispatch()

    const {fetchTodolistsTC, addTodolistTC} = useActions(todolistsActions)

    const addTodolistCallback = useCallback(async (title: string, helper: AddItemFormSubmitHelperType) => {
        let thunk = todolistsActions.addTodolistTC(title)
        const resultAction = await dispatch(thunk)

        if (todolistsActions.addTodolistTC.rejected.match(resultAction)) {
            if (resultAction.payload?.errors?.length) {
                const errorMessage = resultAction.payload?.errors[0]
                helper.setError(errorMessage)
            } else {
                helper.setError('Some error occured')
            }
        } else {
            helper.setTitle('')
        }
    }, [])


    useEffect(() => {
        if (demo || !isLoggedIn) {
            return
        }
        fetchTodolistsTC()
    }, [])


    if (!isLoggedIn) {
<<<<<<< HEAD
        return <Redirect to={'/login'}/>
=======
        return <Redirect to={"/login"} />
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
    }

    return <>
        <Grid container style={{padding: '20px'}}>
            <AddItemForm addItem={addTodolistCallback}/>
        </Grid>
        <Grid container spacing={3} style={{flexWrap: 'nowrap', overflowX: 'scroll'}}>
            {
                todolists.map(tl => {
                    let allTodolistTasks = tasks[tl.id]

                    return <Grid item key={tl.id}>
                        <div style={{width: '300px'}}>
                            <Todolist
                                todolist={tl}
                                tasks={allTodolistTasks}
                                demo={demo}
                            />
                        </div>
                    </Grid>
                })
            }
        </Grid>
    </>
}
