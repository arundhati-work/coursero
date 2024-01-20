import { configureStore } from "@reduxjs/toolkit";
import courseStatusReducer from './slices/courseStatusSlice';

export const store = configureStore({
    reducer: {
        course: courseStatusReducer
    }
});