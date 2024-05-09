import { Outlet } from 'react-router-dom';
import NavLinks from './components/NavLinks';
import NavLinksMobile from './components/NavLinksMobile';
function App() {
	return (
		<main className='font-ubuntu bg-magnolia h-screen overflow-hidden flex flex-col justify-center items-center'>
			<div className='flex justify-center w-full h-60 bg-mobile lg:hidden bg-cover bg-center'>
				<NavLinksMobile />
			</div>
			<div className='container shadow-lg lg:w-[65%] p-1 mx-auto bg-alabaster border h-3/4 rounded-lg grid lg:grid-cols-4 gap-3'>
				<div className=' hidden lg:flex rounded-md bg-desktop bg-cover bg-no-repeat bg-center'>
					<NavLinks />
				</div>
				<div className='bg-white col-span-3 -mt-36 lg:m-0 h-3/4 lg:h-full rounded-md'>
					<Outlet />
				</div>
			</div>
		</main>
	);
}

export default App;
