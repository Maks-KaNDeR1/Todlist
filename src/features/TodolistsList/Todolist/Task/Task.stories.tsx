import React from 'react'
import {action} from '@storybook/addon-actions'
import {Task} from './Task'
<<<<<<< HEAD
import {
    ReduxStoreProviderDecorator
} from '../../../../stories/decorators/ReduxStoreProviderDecorator'
import {TaskPriorities, TaskStatuses} from '../../../../api/types'

export default {
    title: 'Task Stories',
    component: Task,
    decorators: [ReduxStoreProviderDecorator]
=======
import {TaskPriorities, TaskStatuses} from '../../../../api/todolists-api'

export default {
    title: 'Task Stories',
    component: Task
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
}

const removeCallback = action('Remove Button inside Task clicked');
const changeStatusCallback = action('Status changed inside Task');
const changeTitleCallback = action('Title changed inside Task');

export const TaskBaseExample = (props: any) => {
    return (
        <div>
            <Task
                task={{id: '1', status: TaskStatuses.Completed, title: "CSS", todoListId: "todolistId1", description: '',
                    startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}}
<<<<<<< HEAD
=======
                removeTask={removeCallback}
                changeTaskTitle={changeTitleCallback}
                changeTaskStatus={changeStatusCallback}
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
                todolistId={"todolistId1"}
            />
            <Task
                task={{id: '2', status: TaskStatuses.New, title: "JS", todoListId: "todolistId1", description: '',
                    startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low}}
<<<<<<< HEAD
=======
                removeTask={removeCallback}
                changeTaskTitle={changeTitleCallback}
                changeTaskStatus={changeStatusCallback}
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
                todolistId={"todolistId2"}
            />
        </div>)
}
