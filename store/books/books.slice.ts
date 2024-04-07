import { Book } from '@/fe-models/book';
import { BOOKS_IN_STOCK, generateRandomString } from '@/utils/book-store';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    bookList: Array<Book>;
}

const initialState: CounterState = {
    bookList: [...BOOKS_IN_STOCK].map(book => ({ ...book, id: generateRandomString(15) })),
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addNewBook: (state, action: PayloadAction<any>) => {
            const newBook: Book = {
                category: action.payload.bookCategory,
                description: action.payload.bookDescription,
                id: generateRandomString(15),
                name: action.payload.bookName,
                price: action.payload.bookPrice,
            };
            state.bookList = [newBook, ...state.bookList];
        },
        deleteBook: (state, action: PayloadAction<Book>) => {
            state.bookList = [...state.bookList].filter(book => (book.id !== action.payload.id));
        },
        updateBook: (state, action: PayloadAction<Book>) => {
            let updatedBookList = [...state.bookList].map(book => {
                if (action.payload.id === book.id) {
                    book = { ...action.payload };
                }
                return book;
            });
            state.bookList = updatedBookList;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addNewBook, deleteBook, updateBook } = booksSlice.actions

export default booksSlice.reducer