import NavLink from '@components/NavLink/NavLink';
import TwoOptionsToggler from '@components/TwoOptionsToggler/TwoOptionsToggler';
import { modeStateType } from '@shared/types/modeType';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modeActions } from './../../store/slices/mode-slice';

const Navbar: FC = (props) => {
	const mode = useSelector((state: modeStateType) => state.mode);
	const dispatch = useDispatch();

	const activateAdminMode = () => {
		dispatch(modeActions.activateAdminMode());
	};
	const activateReaderMode = () => {
		dispatch(modeActions.activateReaderMode());
	};

	return (
		<nav className='AppNavbar navbar pb-0 navbar-expand mx-sm-4 mx-1 bg-transparent navbar-light border-bottom-1'>
			<NavLink
				style={{
					display: mode.activeMode === 'admin' ? 'flex' : 'none',
				}}
				href={'/posts/create'}
				className='createbtn'
			>
				+
			</NavLink>
			<NavLink className='navbar-brand' href={'/'}>
				Mo Blog
			</NavLink>
			<div className='collapse navbar-collapse' id='collapsibleNavId'>
				<ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
					<li className='btn-group'>
						<TwoOptionsToggler
							options={mode.validModes}
							activeOption={mode.activeMode}
							activateOptionOne={activateAdminMode}
							activateOptionTwo={activateReaderMode}
						></TwoOptionsToggler>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
