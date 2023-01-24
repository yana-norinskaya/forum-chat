import {configureStore} from "@reduxjs/toolkit";
import {messagesApi} from "./reducers/messages.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {commentReducer} from "./reducers/messages.slice";

export const store = configureStore({
    reducer: {
        [messagesApi.reducerPath]: messagesApi.reducer,
        comment: commentReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(messagesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)