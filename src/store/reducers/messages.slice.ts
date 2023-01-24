import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IComment} from "../../interface/message";

interface IComments {
    isEdit: boolean,
    isForm: boolean
}

const initialState: IComments = {
    isEdit: false,
    isForm: false
}
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        toddleEdit(state){
            state.isEdit = !state.isEdit
        },
    }
})

export const commentActions = commentSlice.actions;
export const commentReducer = commentSlice.reducer;