import axios from 'axios';

export function submit(data) {
	try {
		axios
			.post('http://localhost:8080/orders', data)
			.then(() => console.log('data sent!'))
			.catch((e) => console.log('error sendind data', e));
	} catch (e) {
		console.log('Error sending data to backend', e);
	}
}
