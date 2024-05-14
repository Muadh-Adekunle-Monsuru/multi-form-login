import Checkmark from './Checkmark';
import Animation from '../assets/confetti.json';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useMutation } from '@tanstack/react-query';
export default function ThankYou() {
	const store = useSelector((state: RootState) => state.formData);
	const postNote = async () => {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(store), // Convert object to JSON string
		};

		fetch('https://gaming-backend-w1dq.onrender.com/orders', requestOptions)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log('Response:', data);
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
	};
	const { mutate: pushData } = useMutation({
		mutationFn: postNote,
		onSuccess: () => {
			console.log('Dat added successfully');
		},
	});

	return (
		<div
			className='flex flex-col justify-center items-center gap-3 h-full relative'
			onLoad={() => pushData()}
		>
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
