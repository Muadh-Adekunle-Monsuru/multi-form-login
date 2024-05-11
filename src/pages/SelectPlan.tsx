import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPlan } from '../redux/FormReducer';
import { RootState } from '../redux/store';
import PlanOptions from '../components/PlanOptions';
import Icon1 from '../components/Icon1';
import Icon2 from '../components/Icon2';
import Icon3 from '../components/Icon3';
import '../App.css';
export default function SelectPlan() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.formData.plan);
	const price = {
		monthly: {
			Arcade: '9',
			Advanced: '12',
			Pro: '15',
		},
		yearly: {
			Arcade: '90',
			Advanced: '120',
			Pro: '150',
		},
	};
	const getPrice = (name = 'Arcade', monthly) => {
		if (monthly) {
			return price.monthly[name];
		}
		return price.yearly[name];
	};
	const handleChange = () => {
		const form = document.forms['PlanForm'];
		const selection = {
			name: form.plan.value,
			price: getPrice(form.plan.value, !form.toggleSwitch.checked),
			monthly: !form.toggleSwitch.checked,
			yearly: form.toggleSwitch.checked,
		};
		dispatch(addPlan(selection));
	};
	return (
		<section className='lg:px-20 py-5 px-4 text-marine-blue h-full lg:flex lg:flex-col lg:justify-between'>
			<div>
				<h1 className='font-bold  text-3xl '>Selct your plan</h1>
				<p className='text-gray-400 text-sm lg:py-1'>
					You have the option of monthyly or yearly billings.
				</p>
				<form id='PlanForm' className=''>
					<div className='flex flex-col lg:gap-3 lg:flex-row'>
						<label className='w-full'>
							<input
								type='radio'
								name='plan'
								value='Arcade'
								id='Arcade'
								className='w-0 h-0 opacity-0'
								checked={store.name == 'Arcade'}
								onChange={handleChange}
							/>
							<PlanOptions
								icon={<Icon1 />}
								name='Arcade'
								selectedName={store.name}
								price={
									store.monthly ? price.monthly.Arcade : price.yearly.Arcade
								}
								yearly={store.yearly}
							/>
						</label>
						<label className='w-full'>
							<input
								type='radio'
								name='plan'
								value='Advanced'
								className='w-0 h-0 opacity-0'
								checked={store.name == 'Advanced'}
								onChange={handleChange}
							/>
							<PlanOptions
								icon={<Icon2 />}
								name='Advanced'
								selectedName={store.name}
								price={
									store.monthly ? price.monthly.Advanced : price.yearly.Advanced
								}
								yearly={store.yearly}
							/>
						</label>
						<label className='w-full'>
							<input
								type='radio'
								name='plan'
								value='Pro'
								className='w-0 h-0 opacity-0'
								checked={store.name == 'Pro'}
								onChange={handleChange}
							/>
							<PlanOptions
								icon={<Icon3 />}
								name='Pro'
								selectedName={store.name}
								price={store.monthly ? price.monthly.Pro : price.yearly.Pro}
								yearly={store.yearly}
							/>
						</label>
					</div>
					<div className='p-1 bg-magnolia flex justify-center gap-2 items-center mt-3 rounded-lg text-sm'>
						<span
							className={`${store.monthly ? 'font-bold' : 'text-gray-400'}`}
						>
							Monthly
						</span>
						<div className='switch-container'>
							<label className='switch'>
								<input
									type='checkbox'
									id='toggleSwitch'
									checked={store.yearly}
									onChange={handleChange}
								/>
								<span className='slider'></span>
							</label>
						</div>
						<span className={`${store.yearly ? 'font-bold' : 'text-gray-400'}`}>
							Yearly
						</span>
					</div>
				</form>
			</div>
			<div className='flex justify-between lg:mt-12 items-center'>
				<Link to={'/'}>
					<p className='lg:relative absolute bottom-1 left-6 font-bold hover:text-purplish-blue cursor-pointer text-gray-600'>
						Go Back
					</p>
				</Link>
				<Link to={'/add-ons'}>
					<button
						className='absolute bottom-1 right-6 lg:relative float-end p-3 bg-marine-blue text-white rounded-md text-sm hover:bg-purplish-blue'
						type='submit'
					>
						Next Step
					</button>
				</Link>
			</div>
		</section>
	);
}
