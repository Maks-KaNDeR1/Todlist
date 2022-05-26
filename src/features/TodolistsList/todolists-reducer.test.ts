import {
<<<<<<< HEAD
    changeTodolistEntityStatus,
    changeTodolistFilter,
    FilterValuesType,
    TodolistDomainType,
    slice
} from './todolists-reducer'
import {v1} from 'uuid'
import {RequestStatusType} from '../Application/application-reducer'
import {todolistsActions} from './'
import {TodolistType} from '../../api/types'

const todolistsReducer = slice.reducer
const {addTodolistTC, changeTodolistTitleTC, fetchTodolistsTC, removeTodolistTC} = todolistsActions
=======
    addTodolistAC, changeTodolistEntityStatusAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC, FilterValuesType,
    removeTodolistAC, setTodolistsAC, TodolistDomainType,
    todolistsReducer
} from './todolists-reducer'
import {v1} from 'uuid'
import {TodolistType} from '../../api/todolists-api'
import {RequestStatusType} from '../../app/app-reducer'
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

let todolistId1: string
let todolistId2: string
let startState: Array<TodolistDomainType> = []

beforeEach(() => {
    todolistId1 = v1()
    todolistId2 = v1()
    startState = [
        {id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'idle', addedDate: '', order: 0},
        {id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'idle', addedDate: '', order: 0}
    ]
})

test('correct todolist should be removed', () => {
<<<<<<< HEAD
    const endState = todolistsReducer(startState, removeTodolistTC.fulfilled({id: todolistId1}, 'requestId', todolistId1))
=======
    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})

test('correct todolist should be added', () => {
    let todolist: TodolistType = {
        title: 'New Todolist',
        id: 'any id',
        addedDate: '',
        order: 0
    }


<<<<<<< HEAD
    const endState = todolistsReducer(startState, addTodolistTC.fulfilled({todolist}, "requestId", todolist.title))
=======
    const endState = todolistsReducer(startState, addTodolistAC(todolist))
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(todolist.title)
    expect(endState[0].filter).toBe('all')
})

test('correct todolist should change its name', () => {
    let newTodolistTitle = 'New Todolist'

<<<<<<< HEAD
    let payload = {id: todolistId2, title: newTodolistTitle}
    const action = changeTodolistTitleTC.fulfilled(payload,"requestId", payload)
=======
    const action = changeTodolistTitleAC(todolistId2, newTodolistTitle)
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    const endState = todolistsReducer(startState, action)

    expect(endState[0].title).toBe('What to learn')
    expect(endState[1].title).toBe(newTodolistTitle)
})

test('correct filter of todolist should be changed', () => {
    let newFilter: FilterValuesType = 'completed'

<<<<<<< HEAD
    const action = changeTodolistFilter({id: todolistId2, filter: newFilter})
=======
    const action = changeTodolistFilterAC(todolistId2, newFilter)
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    const endState = todolistsReducer(startState, action)

    expect(endState[0].filter).toBe('all')
    expect(endState[1].filter).toBe(newFilter)
})
test('todolists should be added', () => {

<<<<<<< HEAD
    let payload = {todolists: startState}
    const action = fetchTodolistsTC.fulfilled(payload, "requestId", undefined)
=======
    const action = setTodolistsAC(startState)
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    const endState = todolistsReducer([], action)

    expect(endState.length).toBe(2)
})
test('correct entity status of todolist should be changed', () => {
    let newStatus: RequestStatusType = 'loading'

<<<<<<< HEAD
    const action = changeTodolistEntityStatus({id: todolistId2, status: newStatus})
=======
    const action = changeTodolistEntityStatusAC(todolistId2, newStatus)
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    const endState = todolistsReducer(startState, action)

    expect(endState[0].entityStatus).toBe('idle')
    expect(endState[1].entityStatus).toBe(newStatus)
})



