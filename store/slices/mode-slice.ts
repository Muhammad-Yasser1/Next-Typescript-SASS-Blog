import { createSlice } from '@reduxjs/toolkit';
import { modeObjType } from '@shared/types/modeType';

const initialState: modeObjType = {
	validModes: ['admin', 'reader'],
	activeMode: 'reader',
};

const modeSlice = createSlice({
	name: 'mode',
	initialState,
	reducers: {
		activateReaderMode: (state) => {
			state.activeMode = 'reader';
		},
		activateAdminMode: (state) => {
			state.activeMode = 'admin';
		},
	},
});

export const modeActions = modeSlice.actions;

export default modeSlice;
