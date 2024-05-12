import Checkmark from './Checkmark';
import Animation from '../assets/confetti.json';
import Lottie from 'lottie-react';
export default function ThankYou() {
	return (
		<div className='flex flex-col justify-center items-center gap-3 h-full relative'>
			<div>
				<Lottie
					animationData={Animation}
					loop={1}
					className='absolute top-0 left-5 h-full'
				/>
			</div>
			<div className=''>
				<Checkmark />
			</div>
			<div className='text-marine-blue lg:px-20'>
				<h1 className='font-bold  text-3xl text-center'>Thank You!</h1>
				<p className='text-gray-400 text-sm text-center p-4'>
					Thanks for confirming your subscription! We hope you have fun using
					our platform. If you evern need support, please feel free to email us
					at support@lovegaming.com
				</p>
			</div>
		</div>
	);
}
