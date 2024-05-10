export default function AddOnOption({ name, description }) {
	return (
		<div className='py-3 p-2 border border-gray-300 hover:border-purple-800 flex justify-between items-center cursor-pointer rounded-lg'>
			<div className='px-5'></div>
			<div className='flex-grow'>
				<div className='font-bold font-lg'>{name}</div>
				<div className='text-xs text-gray-400'>{description}</div>
			</div>
			<div className='text-purple-400 text-xs px-3'>+10/yr</div>
		</div>
	);
}
