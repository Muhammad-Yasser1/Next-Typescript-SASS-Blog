import { Dispatch } from '@reduxjs/toolkit';
import { articlesActions } from 'store/slices/articles-slice';
import getArticlesRequest from './../../shared/utils/getArticlesRequest';

export const getArticles = () => async (dispatch: Dispatch) => {
	const articles = await getArticlesRequest();
	console.log(articles);

	dispatch(articlesActions.getArticles(articles));
};
