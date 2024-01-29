// author: meisto
// date: 2024-01-28 15:31:09

export const getPlayers = async () => {
	return [];
};

export const getEnemies = async () => {
	return fetch('http://localhost:8070/api/enemy/all')
		.then((response) => {
			if (!response.ok) throw new Error('Reponse not ok.');

			return response.json();
		})
		.catch((error) => {
			alert(error);
		});
};

export const generateCharacters = async (instances: Array<{ name: string; amount: number }>) => {
	return fetch('http://localhost:8070/api/enemy/generate_enemies', {
		method: 'POST',
		body: JSON.stringify(instances),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then((response) => {
			if (!response.ok) throw new Error('Something went wrong while instanciating the characters.');

			return response.json();
		})
		.catch((error) => {
			alert(error);
		});
};
