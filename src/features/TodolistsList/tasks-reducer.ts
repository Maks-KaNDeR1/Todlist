<<<<<<< HEAD
import {todolistsAPI} from '../../api/todolists-api'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {appActions} from '../CommonActions/App'
import {handleAsyncServerAppError, handleAsyncServerNetworkError} from '../../utils/error-utils'
import {asyncActions as asyncTodolistsActions} from './todolists-reducer'
import {AppRootStateType, ThunkError} from '../../utils/types'
import {TaskPriorities, TaskStatuses, TaskType, UpdateTaskModelType} from '../../api/types'

const initialState: TasksStateType = {}

export const fetchTasks = createAsyncThunk<{ tasks: TaskType[], todolistId: string }, string, ThunkError>('tasks/fetchTasks', async (todolistId, thunkAPI) => {
    thunkAPI.dispatch(appActions.setAppStatus({status: 'loading'}))
    try {
        const res = await todolistsAPI.getTasks(todolistId)
        const tasks = res.data.items
        thunkAPI.dispatch(appActions.setAppStatus({status: 'succeeded'}))
        return {tasks, todolistId}
    } catch (error) {
        return handleAsyncServerNetworkError(error, thunkAPI)
    }
})
export const removeTask = createAsyncThunk<{ taskId: string, todolistId: string }, { taskId: string, todolistId: string }, ThunkError>('tasks/removeTask',
    async (param, thunkAPI) => {
        const res = await todolistsAPI.deleteTask(param.todolistId, param.taskId)
        return {taskId: param.taskId, todolistId: param.todolistId}
    })
export const addTask = createAsyncThunk<TaskType, { title: string, todolistId: string }, ThunkError>('tasks/addTask',
    async (param, thunkAPI) => {
        thunkAPI.dispatch(appActions.setAppStatus({status: 'loading'}))
        try {
            const res = await todolistsAPI.createTask(param.todolistId, param.title)
=======
import {AddTodolistActionType, RemoveTodolistActionType, SetTodolistsActionType} from './todolists-reducer'
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, UpdateTaskModelType} from '../../api/todolists-api'
import {Dispatch} from 'redux'
import {AppRootStateType} from '../../app/store'
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../../app/app-reducer'
import {handleServerAppError, handleServerNetworkError} from '../../utils/error-utils'

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id != action.taskId)}
        case 'ADD-TASK':
            return {...state, [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]}
        case 'UPDATE-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, ...action.model} : t)
            }
        case 'ADD-TODOLIST':
            return {...state, [action.todolist.id]: []}
        case 'REMOVE-TODOLIST':
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
        case 'SET-TODOLISTS': {
            const copyState = {...state}
            action.todolists.forEach(tl => {
                copyState[tl.id] = []
            })
            return copyState
        }
        case 'SET-TASKS':
            return {...state, [action.todolistId]: action.tasks}
        default:
            return state
    }
}

// actions
export const removeTaskAC = (taskId: string, todolistId: string) =>
    ({type: 'REMOVE-TASK', taskId, todolistId} as const)
export const addTaskAC = (task: TaskType) =>
    ({type: 'ADD-TASK', task} as const)
export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string) =>
    ({type: 'UPDATE-TASK', model, todolistId, taskId} as const)
export const setTasksAC = (tasks: Array<TaskType>, todolistId: string) =>
    ({type: 'SET-TASKS', tasks, todolistId} as const)

// thunks
export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch<ActionsType | SetAppStatusActionType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            const tasks = res.data.items
            dispatch(setTasksAC(tasks, todolistId))
            dispatch(setAppStatusAC('succeeded'))
        })
}
export const removeTaskTC = (taskId: string, todolistId: string) => (dispatch: Dispatch<ActionsType>) => {
    todolistsAPI.deleteTask(todolistId, taskId)
        .then(res => {
            const action = removeTaskAC(taskId, todolistId)
            dispatch(action)
        })
}
export const addTaskTC = (title: string, todolistId: string) => (dispatch: Dispatch<ActionsType | SetAppErrorActionType | SetAppStatusActionType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsAPI.createTask(todolistId, title)
        .then(res => {
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
            if (res.data.resultCode === 0) {
                thunkAPI.dispatch(appActions.setAppStatus({status: 'succeeded'}))
                return res.data.data.item
            } else {
                handleAsyncServerAppError(res.data, thunkAPI, false)
                return thunkAPI.rejectWithValue({errors: res.data.messages, fieldsErrors: res.data.fieldsErrors})
            }
<<<<<<< HEAD
        } catch (err) {
            return handleAsyncServerNetworkError(err, thunkAPI, false)
=======
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) =>
    (dispatch: ThunkDispatch, getState: () => AppRootStateType) => {
        const state = getState()
        const task = state.tasks[todolistId].find(t => t.id === taskId)
        if (!task) {
            //throw new Error("task not found in the state");
            console.warn('task not found in the state')
            return
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
        }
    })
export const updateTask = createAsyncThunk('tasks/updateTask', async (param: { taskId: string, model: UpdateDomainTaskModelType, todolistId: string },
                                                                      thunkAPI) => {
    const state = thunkAPI.getState() as AppRootStateType

    const task = state.tasks[param.todolistId].find(t => t.id === param.taskId)
    if (!task) {
        return thunkAPI.rejectWithValue('task not found in the state')
    }

    const apiModel: UpdateTaskModelType = {
        deadline: task.deadline,
        description: task.description,
        priority: task.priority,
        startDate: task.startDate,
        title: task.title,
        status: task.status,
        ...param.model
    }

    const res = await todolistsAPI.updateTask(param.todolistId, param.taskId, apiModel)
    try {
        if (res.data.resultCode === 0) {
            return param
        } else {
            return handleAsyncServerAppError(res.data, thunkAPI)
        }
    } catch (error) {
        return handleAsyncServerNetworkError(error, thunkAPI)
    }
})

export const asyncActions = {
    fetchTasks,
    removeTask,
    addTask,
    updateTask
}

export const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(asyncTodolistsActions.addTodolistTC.fulfilled, (state, action) => {
                state[action.payload.todolist.id] = []
            })
            .addCase(asyncTodolistsActions.removeTodolistTC.fulfilled, (state, action) => {
                delete state[action.payload.id]
            })
            .addCase(asyncTodolistsActions.fetchTodolistsTC.fulfilled, (state, action) => {
                action.payload.todolists.forEach((tl: any) => {
                    state[tl.id] = []
                })
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state[action.payload.todolistId] = action.payload.tasks
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex(t => t.id === action.payload.taskId)
                if (index > -1) {
                    tasks.splice(index, 1)
                }
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state[action.payload.todoListId].unshift(action.payload)
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex(t => t.id === action.payload.taskId)
                if (index > -1) {
                    tasks[index] = {...tasks[index], ...action.payload.model}
                }
            })
    }
})

// types
export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
<<<<<<< HEAD

=======
type ActionsType =
    | ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof updateTaskAC>
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodolistsActionType
    | ReturnType<typeof setTasksAC>
type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
