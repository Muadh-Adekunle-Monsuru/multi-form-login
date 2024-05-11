import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
export default function FinishingUp() {
	const plan = useSelector((state: RootState) => state.formData.plan);
	const addOn = useSelector((state: RootState) => state.formData.addOns);

	const addOnArr = Object.keys(addOn).filter((val) => addOn[val].selected);
	const addOnPrices = addOnArr.map((val) => addOn[val].price);
	const addOnTotal = addOnPrices.reduce((total, price) => {
		return total + (isNaN(price) ? 0 : Number(price));
	}, 0);

	const totalPrice = Number(plan.price) + addOnTotal;
	const finalPrice = isNaN(totalPrice) ? Number(plan.price) : totalPrice;
	return (
		<section className='lg:px-20 py-5 px-4 text-marine-blue  h-full'>
			<div>
				<h1 className='font-bold  text-3xl '>Finishing up</h1>
				<p className='text-gray-400 text-sm lg:py-1'>
					Double-check everything looks OK before confirming.
				</p>
			</div>
			<div className='text-xs text-gray-400 pt-5'>
				<div className='  bg-magnolia px-5 p-2 pb-3 rounded-lg'>
					<div className='flex justify-between items-center py-3 border-b border-gray-300'>
						<div>
							<div className='font-semibold text-marine-blue text-lg py-1'>
								{plan.name} {plan.monthly ? '(monthly)' : '(yearly)'}
							</div>
							<Link to={'/plan'}>
								<div className='underline cursor-pointer'>Change</div>
							</Link>
						</div>
						<div className='font-bold text-marine-blue text-sm'>
							${plan.price}/{plan.monthly ? 'mo' : 'yr'}
						</div>
					</div>
					<div>
						{addOnArr.map((val) => (
							<div className='flex justify-between items-center py-2' key={val}>
								<p>{val}</p>
								<p className='text-marine-blue'>
									+{addOn[val].price}/{plan.monthly ? 'mo' : 'yr'}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='flex justify-between items-center p-5'>
					<p>Total {plan.monthly ? '(per month)' : '(per year)'}</p>
					<p className='text-purplish-blue font-bold text-xl'>
						${finalPrice}/{plan.monthly ? 'mo' : 'yr'}
					</p>
				</div>
			</div>
			<div className='flex justify-between lg:mt-12 items-center'>
				<Link to={'/add-ons'}>
					<p className='lg:relative absolute bottom-1 left-6 font-bold hover:text-purplish-blue cursor-pointer text-gray-600'>
						Go Back
					</p>
				</Link>
				<Link to={'/add-ons'}>
					<button
						className='absolute bottom-1 right-6 lg:relative float-end p-3 bg-purplish-blue text-white rounded-md text-sm hover:bg-marine-blue'
						type='submit'
					>
						Confim
					</button>
				</Link>
			</div>
		</section>
	);
}
