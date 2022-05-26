import React from 'react'
import {action} from '@storybook/addon-actions'
import {AddItemForm} from './AddItemForm'

export default {
    title: 'AddItemForm Stories',
    component: AddItemForm
}

<<<<<<< HEAD
const asyncCallback = async (...params: any[]) => {
    action('Button inside form clicked')(...params);
}

export const AddItemFormBaseExample = (props: any) => {
    return (<AddItemForm
        addItem={asyncCallback}
=======
export const AddItemFormBaseExample = (props: any) => {
    return (<AddItemForm
        addItem={action('Button inside form clicked')}
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
    />)
}


export const AddItemFormDisabledExample = (props: any) => {
    return (<AddItemForm disabled={true}
<<<<<<< HEAD
        addItem={asyncCallback}
=======
        addItem={action('Button inside form clicked')}
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
    />)
}
