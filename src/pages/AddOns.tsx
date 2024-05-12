import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddOnOption from '../components/AddOnOption';
import { useDispatch, useSelector } from 'react-redux';
import { addAddons } from '../redux/FormReducer';
import { RootState } from '../redux/store';
import '../components/CheckBox.css';
import AnimatedLayout from '../components/AnimatedLayout';
export default function AddOns() {
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.formData.addOns);
	const monthly = useSelector(
		(state: RootState) => state.formData.plan.monthly
	);
	useEffect(() => {
		handleChange();
	}, [monthly]);
	const price = {
		monthly: {
			'Online service': '1',
			'Larger storage': '2',
			'Customizable profile': '2',
		},
		yearly: {
			'Online service': '10',
			'Larger storage': '20',
			'Customizable profile': '20',
		},
	};
	const getPrice = (name, monthly) => {
		if (monthly) {
			return price.monthly[name];
		}
		return price.yearly[name];
	};
	const handleChange = () => {
		const form = document.forms['PlanForm'];
		const selection = {
			'Online service': {
				selected: form.addOn1.checked,
				price: getPrice('Online service', monthly),
			},
			'Larger storage': {
				selected: form.addOn2.checked,
				price: getPrice('Larger storage', monthly),
			},
			'Customizable profile': {
				selected: form.addOn3.checked,
				price: getPrice('Customizable profile', monthly),
			},
		};
		dispatch(addAddons(selection));
	};
	return (
		<AnimatedLayout>
			<section className='lg:px-20 py-5 px-4 text-marine-blue h-full lg:flex lg:flex-col lg:justify-between'>
				<div>
					<h1 className='font-bold  text-3xl '>Pick add-ons</h1>
					<p className='text-gray-400 text-sm lg:py-1'>
						Add-ons help enhance your gaming experience.
					</p>
					<form id='PlanForm'>
						<div className='flex flex-col gap-3 py-3'>
							<label className='relative'>
								<input
									name='addOn1'
									type='checkbox'
									value='Online service'
									checked={store['Online service'].selected}
									onChange={handleChange}
									className='absolute top-6 left-6 checked:bg-black'
								/>
								<AddOnOption
									name='Online service'
									description='Access to multiplayer games'
									price={getPrice('Online service', monthly)}
									monthly={monthly}
									selected={store['Online service'].selected}
								/>
							</label>
							<label className='relative'>
								<input
									name='addOn2'
									type='checkbox'
									value='Larger storage'
									checked={store['Larger storage'].selected}
									onChange={handleChange}
									className='absolute top-6 left-6 '
								/>
								<AddOnOption
									name='Larger storage'
									description='Extra 1TB of cloud save'
									price={getPrice('Larger storage', monthly)}
									monthly={monthly}
									selected={store['Larger storage'].selected}
								/>
							</label>
							<label className='relative'>
								<input
									name='addOn3'
									type='checkbox'
									value='Customizable profile'
									checked={store['Customizable profile'].selected}
									onChange={handleChange}
									className='absolute top-6 left-6 '
								/>
								<AddOnOption
									name='Customizable profile'
									description='Custom theme on your profile'
									price={getPrice('Customizable profile', monthly)}
									monthly={monthly}
									selected={store['Customizable profile'].selected}
								/>
							</label>
						</div>
					</form>
				</div>
				<div className='flex justify-between lg:mt-12 items-center'>
					<Link to={'/plan'}>
						<p className='lg:relative absolute bottom-1 left-6 font-bold hover:text-purplish-blue cursor-pointer text-gray-600'>
							Go Back
						</p>
					</Link>
					<Link to={'/summary'}>
						<button
							className='absolute bottom-1 right-6 lg:relative float-end p-3 bg-marine-blue text-white rounded-md text-sm hover:bg-purplish-blue'
							type='submit'
						>
							Next Step
						</button>
					</Link>
				</div>
			</section>
		</AnimatedLayout>
	);
}
