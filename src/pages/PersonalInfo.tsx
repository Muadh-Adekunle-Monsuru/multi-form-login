import { useDispatch, useSelector } from 'react-redux';
import { addPersonalInfo, addErrors } from '../redux/FormReducer';
import { RootState } from '../redux/store';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
export default function PersonalInfo() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.formData.personal);

	const errors = useSelector((state: RootState) => state.formData.errors);

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email').required('Email is required'),
		phone: Yup.string().required('Phone number is required'),
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const inputData = {
			name: e.target.username.value,
			email: e.target.email.value,
			phone: e.target.phone.value,
		};
		const empty = {
			name: '',
			email: '',
			phone: '',
		};
		try {
			await validationSchema.validate(inputData, { abortEarly: false });
			dispatch(addPersonalInfo(inputData));
			dispatch(addErrors(empty));
			navigate('/plan');
		} catch (error: any) {
			const newErrors = {};
			error.inner.forEach((err: any) => {
				newErrors[err.path] = err.message;
			});
			dispatch(addErrors(newErrors));
			console.log(newErrors);
		}
	};
	return (
		<section className='lg:px-20 p-2 text-marine-blue'>
			<div>
				<h1 className='font-bold text-4xl '>Personal info</h1>
				<p className='text-gray-400 text-sm py-1'>
					Please provide your name,email address and phone number
				</p>

				<form className='py-4 font-semibold space-y-3' onSubmit={handleSubmit}>
					<div className='flex flex-col gap-1'>
						<label>Name</label>
						{errors.name && (
							<div className='text-red-500 text-xs text-right'>
								{errors.name}
							</div>
						)}
						<input
							name='username'
							placeholder='Name'
							className={`p-2 border rounded-md border-purple-900 focus:border-purple-600 ${
								errors.name ? 'border-2 border-red-500' : ''
							}`}
							// value={store.name}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label>Email Address</label>
						{errors.email && (
							<div className='text-red-500 text-xs text-right'>
								{errors.email}
							</div>
						)}
						<input
							name='email'
							placeholder='Email'
							className={`p-2 border rounded-md border-purple-900 ${
								errors.email ? 'border-2 border-red-500' : ''
							}`}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label>Phone Number</label>
						{errors.phone && (
							<div className='text-red-500 text-xs text-right'>
								{errors.phone}
							</div>
						)}
						<input
							name='phone'
							placeholder='e.g +243 555 334 333'
							className={`p-2 border rounded-md border-purple-900  ${
								errors.phone ? 'border-2 border-red-500' : ''
							}`}
						/>
					</div>
					<button className='p-2 bg-purplish-blue text-white' type='submit'>
						Next Step
					</button>
				</form>
			</div>
		</section>
	);
}
