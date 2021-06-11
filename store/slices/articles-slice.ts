import { createSlice } from '@reduxjs/toolkit';
import Article from '../../shared/interfaces/Article';

interface Articles {
	articles: Article[];
}

const initialState: Articles = {
	articles: [],
};

const articlesSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		getArticles: (state, action) => {
			state.articles = [...action.payload];
		},
		getOneArticle: (state, action) => {},
		addArticle: (state, action) => {},
		deleteArticle: (state, action) => {},
		editArticle: (state, action) => {},
	},
});

export const articlesActions = articlesSlice.actions;

export default articlesSlice;
