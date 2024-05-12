import { ReactNode } from 'react';
import { motion } from 'framer-motion';
// AnimatedLayout.tsx

type Props = {
	children: ReactNode;
};

// I want a fade in bottom-up - fade out top-down animation
// so these are my variants
const variants = {
	hidden: { opacity: 0, x: 0 },
	enter: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 0 },
};

const AnimatedLayout = ({ children }: Props): React.JSX.Element => {
	return (
		<motion.div
			initial='hidden'
			animate='enter'
			exit='exit'
			variants={variants}
			transition={{ duration: 0.5, type: 'tween' }}
			// className='relative'
		>
			{children}
		</motion.div>
	);
};

export default AnimatedLayout;
