<<<<<<< HEAD
import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {IconButton, TextField} from '@material-ui/core'
import {AddBox} from '@material-ui/icons'
=======
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Box, Button, FormControl, IconButton, TextField} from '@material-ui/core';
import {AddBox} from '@material-ui/icons';
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09

export type AddItemFormSubmitHelperType = { setError: (error: string) => void, setTitle: (title: string) => void}
type AddItemFormPropsType = {
    addItem: (title: string, helper: AddItemFormSubmitHelperType) => void
    disabled?: boolean
}

<<<<<<< HEAD
export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = async () => {
        if (title.trim() !== '') {
                addItem(title, {setError, setTitle})
        } else {
            setError('Title is required')
=======
export const AddItemForm = React.memo(function({addItem, disabled = false}: AddItemFormPropsType) {
    console.log("AddItemForm called")

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null)
        }
        if (e.charCode === 13) {
            addItemHandler()
        }
    }

    return <div>
        <TextField variant="outlined"
                   disabled={disabled}
                   error={!!error}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Title"
                   helperText={error}
        />
<<<<<<< HEAD
        <IconButton color="primary" onClick={addItemHandler} disabled={disabled} style={{marginLeft: '5px'}}>
            <AddBox/>
=======
        <IconButton color="primary" onClick={addItemHandler} disabled={disabled}>
            <AddBox />
>>>>>>> f64df78645cc0e75da478139f0f761a22ecf5f09
        </IconButton>
    </div>
})
