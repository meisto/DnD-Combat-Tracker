// ======================================================================
// Author: meisto
// Creation Date: Sun 21 Jan 2024 09:29:36 PM CET
// Description: -
// ======================================================================
import { writable } from 'svelte/store';
import type { Stats } from '$lib/types/state';

export const statsStore = writable<Map<string, Stats>>(new Map());

export const setStats = (id: string, stats: Stats) => {
	statsStore.update((current: Map<string, Stats>) => {
		current.set(id, stats);
		return current;
	});
};

export const changeHealth = (id: string, delta: number) => {
	statsStore.update((current: Map<string, Stats>) => {
		if (!current.has(id)) {
			console.log(`Tried to change health for an unknown id '${id}'`);
			return current;
		}

		const s = current.get(id);
		if (s != null) {
			s.health = Math.max(0, s.health + delta);
		}

		return current;
	});
};
