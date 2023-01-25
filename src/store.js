import { configureStore } from '@reduxjs/toolkit'
import { configure } from '@testing-library/react'
import counterReducer from './helpers/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})