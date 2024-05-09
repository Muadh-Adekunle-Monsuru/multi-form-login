import React from 'react';
import { Link } from 'react-router-dom';

export default function Summary() {
	return (
		<div>
			Summary
			<Link to={'/'}>
				<button>HOme</button>
			</Link>
		</div>
	);
}
