// ======================================================================
// Author: meisto
// Creation Date: Sun 21 Jan 2024 04:03:29 PM CET
// Description: -
// ======================================================================
import { post } from '$lib/util.api';

export type InitiativeCharInfo = {
	id: string;
	name?: string;
	individualName: string;
	d20Roll?: number;
	dexBonus: number;
	additionalBonus: number;
};

export type SetInitiativeMessage = {
	id: string;
	value: number;
};

export const submitData = async (initiatives: InitiativeCharInfo[]) => {
	const fn = (i: InitiativeCharInfo) => {
		let sum = i.dexBonus + i.additionalBonus;
		if (i.d20Roll != null) sum += i.d20Roll;

		return {
			id: i.id,
			value: sum
		};
	};

	return post('/characters/set_initiative', initiatives.map(fn));
};
