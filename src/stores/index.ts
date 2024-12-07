import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

import gridsReducer from "@Stores/gridSlice"
import settingsReducer from "@Stores/settingSlice"

const persistConfig = {
	key: "grids",
	storage,
}

const persistedGridsReducer = persistReducer(persistConfig, gridsReducer)

export const store = configureStore({
	reducer: {
		settings: settingsReducer,
		grids: persistedGridsReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
