import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './FormReducer';
export const store = configureStore({
	reducer: {
		formData: DataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
