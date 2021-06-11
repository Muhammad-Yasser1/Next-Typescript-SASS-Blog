import { FC, useEffect } from 'react';

const TwoOptionsToggler: FC<{
	options: [string, string];
	activeOption: string;
	activateOptionOne: () => void;
	activateOptionTwo: () => void;
}> = (props) => {
	useEffect(() => {
		if (props.options.indexOf(props.activeOption) === -1) {
			throw new Error(
				'ActiveOption Prop have to be in one of the options values'
			);
		}
	}, []);
	return (
		<>
			<button
				type='button'
				className={
					props.activeOption === 'admin'
						? 'btn-primary btn'
						: 'btn-secondary btn'
				}
				data-toggle='modal'
				data-target='#modelId'
				onClick={props.activateOptionOne}
			>
				Admin Mode
			</button>
			<button
				type='button'
				className={
					props.activeOption === 'admin'
						? 'btn-secondary btn'
						: 'btn-primary btn'
				}
				onClick={props.activateOptionTwo}
			>
				Reader Mode
			</button>
		</>
	);
};

export default TwoOptionsToggler;
