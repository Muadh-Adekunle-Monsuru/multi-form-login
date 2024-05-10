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
		console.log(e);
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
	const handleChange = async (e) => {
		const form = document.forms['myForm'];
		const inputData = {
			name: form.elements['username'].value,
			email: form.elements['email'].value,
			phone: form.elements['phone'].value,
		};
		const empty = {
			name: '',
			email: '',
			phone: '',
		};
		dispatch(addPersonalInfo(inputData));
		try {
			await validationSchema.validate(inputData, { abortEarly: false });
			dispatch(addErrors(empty));
		} catch (error: any) {
			// const newErrors = {};
			// error.inner.forEach((err: any) => {
			// 	newErrors[err.path] = err.message;
			// });
			// dispatch(addErrors(newErrors));
			// console.log(newErrors);
		}
	};
	return (
		<section className='lg:px-20 py-5 text-marine-blue'>
			<div>
				<h1 className='font-bold text-3xl '>Personal info</h1>
				<p className='text-gray-400 text-sm py-1'>
					Please provide your name,email address and phone number
				</p>

				<form
					id='myForm'
					className='py-4 font-semibold space-y-5 lg:space-y-3'
					onChange={handleChange}
					onSubmit={handleSubmit}
				>
					<div className='flex flex-col gap-1'>
						<label className='text-sm'>Name</label>
						{errors.name && (
							<div className='text-red-500 text-xs text-right'>
								{errors.name}
							</div>
						)}
						<input
							name='username'
							id='name'
							placeholder='Name'
							className={`p-2 border rounded-md border-purple-900 focus:border-purple-600 ${
								errors.name ? 'border-2 border-red-500' : ''
							}`}
							value={store.name}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='text-sm'>Email Address</label>
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
							value={store.email}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label className='text-sm'>Phone Number</label>
						{errors.phone && (
							<div className='text-red-500 text-xs text-right'>
								{errors.phone}
							</div>
						)}
						<input
							name='phone'
							placeholder='e.g +243 555 334 333'
							className={`p-2 border rounded-md border-purple-900 mb-12  ${
								errors.phone ? 'border-2 border-red-500' : ''
							}`}
							value={store.phone}
						/>
					</div>
					<button
						className='absolute bottom-1 right-6 lg:relative float-end p-3 bg-marine-blue text-white rounded-md text-sm hover:bg-purplish-blue'
						type='submit'
					>
						Next Step
					</button>
				</form>
			</div>
		</section>
	);
}
