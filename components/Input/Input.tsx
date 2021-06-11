import { ChangeEventHandler } from 'react';

const Input = (props: {
	label: string;
	id: string;
	placeholder: string;
	onChange: ChangeEventHandler<HTMLElement>;
	type: string;
	defaultValue?: string;
}) => {
	const { label, id, placeholder, onChange, type, defaultValue } = props;
	return (
		<div className='form-group'>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				className='form-control'
				name={id}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue || ''}
			/>
		</div>
	);
};

export default Input;
