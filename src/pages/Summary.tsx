import FinishingUp from '../components/FinishingUp';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ThankYou from '../components/ThankYou';
import { motion } from 'framer-motion';
export default function Summary() {
	const complete = useSelector((state: RootState) => state.formData.complete);
	console.log(complete);
	return (
		<motion.div className='h-full flex-grow'>
			{complete ? <ThankYou /> : <FinishingUp />}
		</motion.div>
	);
}
