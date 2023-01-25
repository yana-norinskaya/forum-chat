import {configureStore} from "@reduxjs/toolkit";
import {messagesApi} from "./reducers/messages.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [messagesApi.reducerPath]: messagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(messagesApi.middleware)
})

setupListeners(store.dispatch)