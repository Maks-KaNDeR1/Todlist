<<<<<<< HEAD
import {TodolistDomainType, slice} from './todolists-reducer'
import {slice as tasksSlice, TasksStateType} from './tasks-reducer'
import {todolistsActions} from './'
import {TodolistType} from '../../api/types'

const todolistsReducer = slice.reducer
const tasksReducer = tasksSlice.reducer


test('ids should be equals', () => {
    const startTasksState: TasksStateType = {}
    const startTodolistsState: Array<TodolistDomainType> = []
=======
import {addTodolistAC, TodolistDomainType, todolistsReducer} from './todolists-reducer'
import {tasksReducer, TasksStateType} from './tasks-reducer'
import {TodolistType} from '../../api/todolists-api'

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistDomainType> = [];
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    let todolist: TodolistType = {
        title: 'new todolist',
        id: 'any id',
        addedDate: '',
        order: 0
    }

<<<<<<< HEAD
    const action = todolistsActions.addTodolistTC.fulfilled({todolist}, 'requestId', todolist.title)
=======
    const action = addTodolistAC(todolist);
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

<<<<<<< HEAD
    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistsState[0].id

    expect(idFromTasks).toBe(action.payload.todolist.id)
    expect(idFromTodolists).toBe(action.payload.todolist.id)
})
=======
    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolist.id);
    expect(idFromTodolists).toBe(action.todolist.id);
});
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
