// ======================================================================
// Author: meisto
// Creation Date: Wed 17 Jan 2024 12:10:42 AM CET
// Description: -
// ======================================================================
const api = 'http://localhost:8070/api';
export const get = async (url: string, data: object | null = null) => {
	const body = data ? JSON.stringify(data) : null;

	return await fetch(api + url, { method: 'GET', body: body })
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error('Something went wrong');
		})
		.catch((error) => {
			alert(error);
			console.log(error);
		});
};

export const post = async (url: string, body: object | null = null) => {
	// TODO: Fetch errors
	return fetch(api + url, {
		method: 'POST',
		body: body != null ? JSON.stringify(body) : null,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	});
};
