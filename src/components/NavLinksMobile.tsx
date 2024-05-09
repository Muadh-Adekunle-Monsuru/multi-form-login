import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import clsx from 'clsx';
export default function NavLinksMobile() {
	const location = useLocation();
	const navlinks = [
		{
			path: '/',
			step: 1,
			name: 'Your Info',
		},
		{
			path: '/plan',
			step: 2,
			name: 'Select Plan',
		},
		{
			path: '/add-ons',
			step: 3,
			name: 'Add-Ons',
		},
		{
			path: '/summary',
			step: 4,
			name: 'Summary',
		},
	];
	return (
		<nav className='flex  gap-3 p-5 text-alabaster text-sm'>
			{navlinks.map((val) => (
				<Link to={val.path} key={val.step}>
					<div className='flex uppercase gap-3 items-center cursor-pointer hover:opacity-90'>
						<div
							className={clsx(
								'w-9 h-9 flex items-center justify-center rounded-full border ',
								{
									'bg-light-blue': val.path == location.pathname,
								}
							)}
						>
							{val.step}
						</div>
					</div>
				</Link>
			))}
		</nav>
	);
}
