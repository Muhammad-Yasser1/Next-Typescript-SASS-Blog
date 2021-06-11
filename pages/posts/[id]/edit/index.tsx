import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import Textarea from '@components/Textarea/Textarea';
import Article from '@shared/interfaces/Article';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useState } from 'react';
import getArticlesRequest from './../../../../shared/utils/getArticlesRequest';

type propsType = {
	article: {
		author: string;
		content: string;
		created_at: string;
		image: string;
		title: string;
		updated_at: Date;
	};
};

const Edit: FC<propsType> = (props) => {
	const router = useRouter();
	const [article, setArticle] = useState({
		...props.article,
		updated_at: new Date().toDateString(),
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setArticle({ ...article, [e?.target?.id]: e.target.value });
	};

	return (
		<div className='container p-5 Create'>
			<form>
				<h1 className='mb-3'>Edit this Article:</h1>
				<Input
					label='Title:'
					id='title'
					placeholder='Write your article title here'
					onChange={handleChange}
					type='text'
					defaultValue={props.article.title}
				/>
				<Textarea
					label='Content:'
					id='content'
					placeholder='Write your article content here'
					onChange={handleChange}
					defaultValue={props.article.content}
				/>
				<Input
					type='text'
					label='Author Name:'
					id='author'
					placeholder='Write your Name here'
					onChange={handleChange}
					defaultValue={props.article.author}
				/>
				<Button color='warning' type='button' onClick={() => {}}>
					Edit
				</Button>
				<Button color='danger' type='button' onClick={() => {}}>
					Delete
				</Button>
				<Button
					color='dark'
					type='button'
					onClick={() => router.push('/')}
				>
					Cancel
				</Button>
			</form>
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

export default Edit;
