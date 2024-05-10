export default function PlanOptions({
	icon,
	name,
	selectedName,
	price,
	yearly,
}) {
	return (
		<div
			className={`border hover:border-purple-900 flex lg:flex-col lg:items-start items-center p-1 lg:p-3 cursor-pointer gap-3  w-full rounded-lg ${
				selectedName == name ? 'bg-magnolia border-purple-800' : ''
			}`}
		>
			<div className='w-10 lg:py-1'>{icon}</div>
			<div className='lg:pt-8'>
				<p className='font-semibold'>{name}</p>
				<p className='text-xs text-gray-400'>
					${price}
					{yearly ? '/yr' : '/mo'}
				</p>
				{yearly && <p className='text-xs text-marine-blue'>2 months free</p>}
			</div>
		</div>
	);
}
