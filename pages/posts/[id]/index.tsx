import Article from '@shared/interfaces/Article';
import {
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { articlesActions } from 'store/slices/articles-slice';
import getArticlesRequest from './../../../shared/utils/getArticlesRequest';

const ArticleDetails = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const dispatch = useDispatch();
	const article = props.article;
	useEffect(() => {
		dispatch(articlesActions.getOneArticle(props.article));
	}, []);

	return (
		<div className='Article row p-4'>
			<div className='col-lg-4 col-md-6 col-9 mx-auto'>
				{article.image && (
					<img
						className='img-fluid'
						src={`/static/images/${article.image}`}
						alt='Article'
					/>
				)}
			</div>
			<div className='col-11 col-md-6 col-lg-8 mx-auto my-3 my-lg-0'>
				<h1 className='title'>{article.title}</h1>
				<div className='my-3 mb-4'>
					<h6>
						by {article.author} -- {article.updated_at}
					</h6>
				</div>
				<hr />
				<div className='card bg-transparent border-0'>
					<div className='card-body'>
						<blockquote className='blockquote'>
							<p>{article.content}</p>
						</blockquote>
					</div>
				</div>
				<p>{article.content}</p>
			</div>
		</div>
	);
};

export const getStaticPaths = async () => {
	const articles = await getArticlesRequest();
	const paths = articles.map((article: Article) => {
		return { params: { id: article.id.toString() } };
	});

	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async (
	ctx: GetStaticPropsContext
) => {
	const articles: Article[] = await getArticlesRequest();
	const id = ctx?.params?.id as string;
	const article = articles.find((article) => article.id === +id);
	return {
		props: {
			article,
		},
	};
};

export default ArticleDetails;
