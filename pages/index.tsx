import { InferGetStaticPropsType } from 'next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../shared/interfaces/Article';
import NavLink from './../components/NavLink/NavLink';
import getArticlesRequest from './../shared/utils/getArticlesRequest';
import { articlesActions } from './../store/slices/articles-slice';

type modeStateType = {
	mode: { activeMode: 'admin' | 'reader'; validModes: ['admin', 'reader'] };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(articlesActions.getArticles(props.articles));
	}, []);
	const articles = props.articles;
	const mode = useSelector((state: modeStateType) => state.mode);

	return (
		<div className='Blog row justify-content-around'>
			{articles.map((article: Article) => (
				<div
					className='card text-white bg-transparent border-0 col-10 col-sm-8 col-md-6 col-lg-4 p-4'
					key={article.id}
				>
					<NavLink
						href={
							mode.activeMode === 'reader'
								? `/posts/${article.id}`
								: `/posts/${article.id}/edit`
						}
					>
						<img
							className='card-img-top'
							src={`/static/images/${article.image}`}
							alt='Article'
						/>
						<div className='title'>{article.title}</div>
						<div className='overlay'></div>
						<div className='author'>
							{article.updated_at || article.created_at}{' '}
							{article.author && `by ${article.author}`}
						</div>
					</NavLink>
				</div>
			))}
		</div>
	);
};

export const getStaticProps = async () => {
	const articles = await getArticlesRequest();

	return {
		props: {
			articles,
		},
	};
};

export default Blog;
