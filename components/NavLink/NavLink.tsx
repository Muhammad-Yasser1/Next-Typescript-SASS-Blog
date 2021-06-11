import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

const NavLink: FC<{
	children: string | ReactNode;
	href: string;
	className?: string;
	activeClassName?: string;
	style?: any;
}> = (props) => {
	const router = useRouter();

	const { children, className, activeClassName, ...restOfProps } = props;

	const isActive = router.pathname === props.href;
	return (
		<Link {...restOfProps}>
			<a
				className={`${className || ''} ${
					isActive ? activeClassName || 'active' : ''
				}`}
			>
				{children}
			</a>
		</Link>
	);
};

export default NavLink;
