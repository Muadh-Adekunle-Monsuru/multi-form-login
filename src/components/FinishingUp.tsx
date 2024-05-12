import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isComplete } from '../redux/FormReducer';
import { RootState } from '../redux/store';
import * as emailjs from '@emailjs/browser';

export default function FinishingUp() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const plan = useSelector((state: RootState) => state.formData.plan);
	const addOn = useSelector((state: RootState) => state.formData.addOns);
	const store = useSelector((state: RootState) => state.formData);

	const addOnArr = Object.keys(addOn).filter((val) => addOn[val].selected);
	const addOnPrices = addOnArr.map((val) => addOn[val].price);
	const addOnTotal = addOnPrices.reduce((total, price) => {
		return total + (isNaN(price) ? 0 : Number(price));
	}, 0);

	const totalPrice = Number(plan.price) + addOnTotal;
	const finalPrice = isNaN(totalPrice) ? Number(plan.price) : totalPrice;
	emailjs.init({
		publicKey: 'LgQKXVuexOU_J5inq',
		limitRate: {
			// Set the limit rate for the application
			id: 'app',
			// Allow 1 request per 10s
			throttle: 10000,
		},
	});
	const getEmailData = () => {
		return {
			customer_name: store.personal.name,
			customer_email: store.personal.email,
			customer_phone: store.personal.phone,
			plan_name: store.plan.name,
			plan_price: store.plan.price,
			plan_monthly: store.plan.monthly ? 'Monthly' : 'Yearly',
			addOns: addOnArr,
			total: finalPrice,
		};
	};
	const handleSubmit = () => {
		if (plan.name == '') return;
		if (store.personal.name == '') return navigate('/');
		emailjs.send('service_yw2a5am', 'template_6mx4zha', getEmailData()).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);
			},
			(error) => {
				console.log('FAILED...', error);
			}
		);
		dispatch(isComplete());
	};
	return (
		<section className='lg:px-20 py-5 px-4 text-marine-blue h-full lg:flex lg:flex-col lg:justify-between'>
			<div>
				<h1 className='font-bold  text-3xl '>Finishing up</h1>
				<p className='text-gray-400 text-sm lg:py-1'>
					Double-check everything looks OK before confirming.
				</p>
				<div className='text-xs text-gray-400 pt-5'>
					<div className='bg-magnolia px-5 p-2 pb-3 rounded-lg'>
						<div className='flex justify-between items-center py-5 border-b border-gray-300'>
							<div>
								{plan.name == '' ? (
									<Link to={'/plan'}>
										<div className='text-red-500 animate-pulse underline font-bold text-xl'>
											Select a plan
										</div>
									</Link>
								) : (
									<div>
										<div className='font-semibold text-marine-blue text-lg py-1'>
											{plan.name} {plan.monthly ? '(monthly)' : '(yearly)'}
										</div>
										<Link to={'/plan'}>
											<div className='underline cursor-pointer'>Change</div>
										</Link>
									</div>
								)}
							</div>
							<div className='font-bold text-marine-blue text-sm'>
								${plan.price}/{plan.monthly ? 'mo' : 'yr'}
							</div>
						</div>
						<div>
							{addOnArr.map((val) => (
								<div
									className='flex justify-between items-center py-2'
									key={val}
								>
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
			</div>
			<div className='flex justify-between lg:mt-12 items-center'>
				<p className='lg:relative absolute bottom-1 left-6 font-bold hover:text-purplish-blue text-gray-600'>
					<Link to={'/add-ons'}>Go Back</Link>
				</p>
				<button
					className='absolute bottom-1 right-6 lg:relative float-end p-3 bg-purplish-blue text-white rounded-md text-sm hover:bg-marine-blue'
					type='submit'
					onClick={handleSubmit}
				>
					Confim
				</button>
			</div>
		</section>
	);
}
