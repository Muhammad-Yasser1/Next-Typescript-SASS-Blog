const Button = (props: {
	onClick: () => void;
	color: string;
	type: 'button' | 'submit' | 'reset';
	children: string;
}) => {
	const { onClick, color, type } = props;
	return (
		<button onClick={onClick} type={type} className={`btn btn-${color}`}>
			{props.children}
		</button>
	);
};

export default Button;
