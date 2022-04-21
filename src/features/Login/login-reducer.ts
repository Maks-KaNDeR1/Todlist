import { AppThunkType } from "../../app/store"

const initialState = {

}

export const authReducer = (state = initialState, action: LoginActionType) => {
    switch (action.type) {

        default:
            return state
    }
}

// actions

export const addTaskTC = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) => {
   
    
}



export type LoginActionType = any
