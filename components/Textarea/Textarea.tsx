import { ChangeEventHandler, FC } from 'react';

const Textarea: FC<{
	label: string;
	defaultValue?: string;
	id: string;
	placeholder: string;
	onChange: ChangeEventHandler<HTMLElement>;
}> = (props) => {
	const { label, defaultValue, id, placeholder, onChange } = props;
	return (
		<div className='form-group'>
			<label htmlFor={id}>{label}</label>
			<textarea
				className='form-control'
				name={id}
				id={id}
				rows={10}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue || ''}
			/>
		</div>
	);
};

export default Textarea;
