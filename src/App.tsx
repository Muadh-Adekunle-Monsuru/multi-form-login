import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import NavLinks from './components/NavLinks';
import NavLinksMobile from './components/NavLinksMobile';
import { AnimatePresence } from 'framer-motion';
function App() {
	const location = useLocation();
	const element = useOutlet();
	return (
		<main className='font-ubuntu bg-magnolia h-screen overflow-hidden flex flex-col justify-center items-center'>
			<div className='flex justify-center items-start w-full  h-52 bg-mobile lg:hidden bg-cover bg-center'>
				<NavLinksMobile />
			</div>
			<div className='container lg:shadow-lg lg:w-[65%] p-5 lg:p-1 mx-auto bg-transparent lg:bg-white h-3/4 rounded-lg grid lg:grid-cols-4 gap-3'>
				<div className=' hidden lg:flex rounded-md bg-desktop bg-cover bg-no-repeat bg-center'>
					<NavLinks />
				</div>
				<div className='bg-white col-span-3 -mt-28 p-3  lg:p-0 lg:m-0 h-full shadow-lg lg:shadow-none  lg:h-full rounded-md'>
					<AnimatePresence mode='wait' initial={true}>
						{element && React.cloneElement(element, { key: location.pathname })}
					</AnimatePresence>
				</div>
			</div>
		</main>
	);
}

export default App;
