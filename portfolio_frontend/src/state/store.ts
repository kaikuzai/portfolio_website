import { configureStore } from "@reduxjs/toolkit"

import storage from 'redux-persist/lib/storage'
import authorizationReducer from './authorization/authorizationSlice'
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"

const authPersistConfig = {
    key: 'authorization',
    storage,
}

const persistedAuthorizationReducer = persistReducer(authPersistConfig, authorizationReducer)

export const store = configureStore({
    reducer: {
        authorization: persistedAuthorizationReducer,
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch> 