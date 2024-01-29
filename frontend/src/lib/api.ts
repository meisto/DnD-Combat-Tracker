// ======================================================================
// Author: meisto
// Creation Date: Tue 16 Jan 2024 11:46:06 PM CET
// Description: -
// ======================================================================
import { setStats } from '$lib/stores/stats';
import type { Stats } from '$lib/types/state';

// Stores
import { currentRound } from '$lib/stores/turnorder';

import { get, post } from '$lib/util.api';

// Single character updates
export const getStatus = async (characterId: string) => {
	const data = await get('/characters/status', { id: characterId });
	console.log(data);
};

export const fetchRound = async () => {
	post('/round/get_round')
		.then((response) => {
			if (!response.ok) throw new Error('Something went wrong.');

			response.json().then((data) => {
				console.log('Round: ', data);
				if (data != null) {
					currentRound.update(() => {
						return data;
					});
				}
			});
		})
		.catch((error) => console.log('Error ' + error));
};

export const fetchStats = async () => {
	await post('/characters/get_all_stats')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Error while catching.');
			}
			return response;
		})
		.then((response) => {
			return response.json();
		})
		.then((j) => {
			console.log('Updated Stats.');
			j.forEach((x: Stats) => {
				console.log('\tStats: ', x);
				setStats(x.id, x);
			});
		})
		.catch((error) => {
			alert(error);
		});
};
