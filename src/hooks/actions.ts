import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {commentActions} from "../store/reducers/messages.slice";

const actions = {
    ...commentActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}