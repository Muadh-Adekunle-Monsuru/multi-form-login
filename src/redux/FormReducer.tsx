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
	plan: {
		name: string;
		price: string;
		monthly: boolean;
		yearly: boolean;
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
	plan: {
		name: '',
		price: '',
		monthly: true,
		yearly: false,
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
		addPlan: (state, action) => {
			state.plan = action.payload;
		},
	},
});

export const { addPersonalInfo, addErrors, addPlan } = dataSlice.actions;
export default dataSlice.reducer;
