import { ModalProps } from '@/fe-models/book';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    modalData: ModalProps | null;
}

const initialState: CounterState = {
    modalData: new ModalProps(),
}

export const modalSlice = createSlice({
    name: 'bookModal',
    initialState,
    reducers: {
        setModalData: (state, action: PayloadAction<ModalProps>) => {
            state.modalData = {
                title: action.payload.title,
                btnText: action.payload.btnText,
                action: action.payload.action,
                data: action.payload.data
            };
        },
        closeModalData: (state, action: PayloadAction<any>) => {
            state.modalData = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setModalData, closeModalData } = modalSlice.actions

export default modalSlice.reducer