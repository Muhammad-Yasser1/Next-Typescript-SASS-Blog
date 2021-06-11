import Input from '@components/Input/Input';
import Textarea from '@components/Textarea/Textarea';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Button from './../../../components/Button/Button';

type propsType = {
	author: string;
	content: string;
	created_at: string;
	image: string;
	title: string;
	updated_at: Date;
};
const Create: FC<propsType> = (props) => {
	const [state, setState] = useState({
		author: '',
		content: '',
		created_at: new Date().toDateString(),
		image: 'default-image.jpeg',
		title: '',
		updated_at: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [e.target.id]: e.target.value });
	};
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};
	return (
		<div className='container p-5 Create'>
			<form onSubmit={handleSubmit}>
				<h1 className='mb-3'>Create a new Article:</h1>
				<Input
					label='Title:'
					id='title'
					placeholder='Write your article title here'
					onChange={handleChange}
					type='text'
				/>
				<Textarea
					label='Content:'
					id='content'
					placeholder='Write your article content here'
					onChange={handleChange}
				/>
				<Input
					type='text'
					label='Author Name:'
					id='author'
					placeholder='Write your Name here'
					onChange={handleChange}
				/>
				<Button color='warning' type='button' onClick={() => {}}>
					Edit
				</Button>
				<Button color='danger' type='button' onClick={() => {}}>
					Delete
				</Button>
			</form>
		</div>
	);
};

export default Create;
