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
	addOns: {
		'Online service': {
			selected: boolean;
			price: string;
		};
		'Larger storage': {
			selected: boolean;
			price: string;
		};
		'Customizable profile': {
			selected: boolean;
			price: string;
		};
	};
	complete: boolean;
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
	addOns: {
		'Online service': {
			selected: false,
			price: '',
		},
		'Larger storage': {
			selected: false,
			price: '',
		},
		'Customizable profile': {
			selected: false,
			price: '',
		},
	},
	complete: false,
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
		addAddons: (state, action) => {
			state.addOns = action.payload;
		},
		isComplete: (state) => {
			state.complete = true;
		},
	},
});

export const { addPersonalInfo, addErrors, addPlan, addAddons, isComplete } =
	dataSlice.actions;
export default dataSlice.reducer;
