import React from 'react';
import { Link } from 'react-router-dom';
export default function AddOns() {
	return (
		<div>
			AddOns
			<Link to={'/summary'}>
				<button>Next Step</button>
			</Link>
		</div>
	);
}
