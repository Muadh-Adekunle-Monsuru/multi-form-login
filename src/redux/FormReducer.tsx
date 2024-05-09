import { createSlice } from '@reduxjs/toolkit';

interface data {
	personal: {
		name: string;
		email: string;
		phone: string;
	};
	errors: {
		name: string;
		email: string;
		phone: string;
	};
}

const initialState: data = {
	personal: {
		name: '',
		email: '',
		phone: '',
	},
	errors: {
		name: '',
		email: '',
		phone: '',
	},
};

const dataSlice = createSlice({
	name: 'formData',
	initialState,
	reducers: {
		addPersonalInfo: (state, action) => {
			state.personal = action.payload;
		},
		addErrors: (state, action) => {
			state.errors = action.payload;
		},
	},
});

export const { addPersonalInfo, addErrors } = dataSlice.actions;
export default dataSlice.reducer;
