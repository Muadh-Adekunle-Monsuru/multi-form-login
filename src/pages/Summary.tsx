import FinishingUp from '../components/FinishingUp';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ThankYou from '../components/ThankYou';
export default function Summary() {
	const complete = useSelector((state: RootState) => state.formData.complete);
	console.log(complete);
	return (
		<div className='h-full'>{complete ? <ThankYou /> : <FinishingUp />}</div>
	);
}
