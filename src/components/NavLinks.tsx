import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
export default function NavLinks() {
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
		<nav className='flex lg:flex-col gap-4 p-5 text-alabaster text-xs'>
			{navlinks.map((val) => (
				<div
					key={val.name}
					className='flex uppercase gap-3 items-center hover:opacity-70'
				>
					<div
						className={clsx(
							'w-8 h-8 flex items-center justify-center rounded-full border ',
							{
								'bg-light-blue': val.path == location.pathname,
							}
						)}
					>
						{val.step}
					</div>
					<div className='flex flex-col'>
						<div className=' text-gray-300 font-thin '>Step {val.step}:</div>
						<div className='font-semibold font-mono text-sm'>{val.name}</div>
					</div>
				</div>
			))}
		</nav>
	);
}
