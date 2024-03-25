import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/books.slice';
import modalReducer from './modal/modal.slice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            books: booksReducer,
            bookModal: modalReducer,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']