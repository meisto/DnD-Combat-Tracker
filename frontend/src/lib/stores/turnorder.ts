// ======================================================================
// Author: meisto
// Creation Date: Sun 14 Jan 2024 12:52:44 AM CET
// Description: -
// ======================================================================
import { writable } from 'svelte/store';

import { enemyInstances } from '$lib/stores/enemies';
import { players } from '$lib/stores/allies';

export type Turn = {
	characterName: string;
	initiative: number;
	position: 'pc' | 'npc';
};

export type Round = {
	number: number;
	index: number;
	elements: Array<Turn>;
};

export const currentRound = writable<Round>({ number: 0, index: 0, elements: [] });

export const nextTurn = () => {
	currentRound.update((current: Round) => {
		current.index = Math.min(current.index + 1, current.elements.length - 1);
		return current;
	});
};

let playerCharacterOrder: Array<Turn> = [];
let nonPlayerCharacterOrder: Array<Turn> = [];

export const updateRound = () => {
	currentRound.update((current: Round) => {
		return {
			number: current.number,
			index: current.index,
			elements: playerCharacterOrder
				.concat(nonPlayerCharacterOrder)
				.sort((a, b) => (a.initiative > b.initiative ? 1 : -1))
		};
	});
};

players.subscribe((value) => {
	if (value == null) return;
	playerCharacterOrder = value.map((x) => {
		return { characterName: x.name, initiative: x.initiative, position: 'pc' };
	});
});

enemyInstances.subscribe((value) => {
	if (value == null) return;
	console.log('Updateing player order by values', value);

	nonPlayerCharacterOrder = Array.from(value.values()).map((x) => {
		return { characterName: x.name, initiative: x.initiative, position: 'npc' };
	});
});
