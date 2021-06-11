import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from './slices/articles-slice';
import modeSlice from './slices/mode-slice';

const store = configureStore({
	reducer: {
		mode: modeSlice.reducer,
		articlesReducer: articlesSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
