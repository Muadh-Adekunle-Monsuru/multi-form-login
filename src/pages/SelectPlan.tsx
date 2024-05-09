import React from 'react';
import { Link } from 'react-router-dom';
export default function SelectPlan() {
	return (
		<div>
			SelectPlan
			<Link to={'/add-ons'}>
				<button>Next Step</button>
			</Link>
		</div>
	);
}
