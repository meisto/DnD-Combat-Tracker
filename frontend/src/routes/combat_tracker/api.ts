// author: meisto
// date: 2024-01-26 17:40:24
import { enemies, enemyInstances } from '$lib/stores/enemies';
import { players } from '$lib/stores/allies';
import { updateRound } from '$lib/stores/turnorder';

export const loadData = async () => {
	console.log('Loading data...');
	const baseUrl = 'http://localhost:8070/api';

	const p1 = async () => {
		fetch(baseUrl + '/enemy/instances/all', { method: 'GET' })
			.then((response) => {
				if (response.ok) return response.json();

				throw new Error('Something went wrong while fetching enemies');
			})
			.then((en) => {
				enemyInstances.update(() => {
					console.log('Enemies: ', en);
					return en;
				});
			})
			.catch((error) => {
				alert(error);
				console.log(error);
			});
	};

	const p2 = async () => {
		fetch(baseUrl + '/player/all', { method: 'GET' })
			.then((response) => {
				if (response.ok) return response.json();

				throw new Error('Something went wrong while fetching enemies');
			})
			.then((pls) => {
				players.update(() => {
					console.log('Players: ', pls);
					return pls;
				});
			})
			.catch((error) => {
				alert(error);
				console.log(error);
			});
	};

	const p3 = async () => {
		fetch(baseUrl + '/enemy/all', { method: 'GET' })
			.then((response) => {
				if (response.ok) return response.json();

				throw new Error('Something went wrong while fetching enemies');
			})
			.then((pls) => {
				enemies.update(() => {
					let a = new Map();
					pls.forEach((x) => a.set(x.name, x));

					console.log('Base Enemy Map: ', a);
					return a;
				});
			})
			.catch((error) => {
				alert(error);
				console.log(error);
			});
	};

	// fetchRound

	return Promise.all([p3(), p1(), p2()]).then((_) => updateRound());
};
