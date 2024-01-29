// ======================================================================
// Author: meisto
// Creation Date: Tue 16 Jan 2024 07:10:13 PM CET
// Description: -
// ======================================================================
export type Trait = {
	name: string;
	desc: string;
};

export type Immunities = {
	damageResistances?: Array<string>;
	damageImmunities?: Array<string>;
	conditionImmunities?: Array<string>;
};

export type EnemyInstance = {
	name: string;
	general_name: string;
	current_hit_points: number;
	temporary_hit_points: number;
	initiative: number;
};

export type Enemy = {
	name: string;
	race_name: string;
	alignment: string;
	size: number;
	STR: number;
	DEX: number;
	CON: number;
	INT: number;
	WIS: number;
	CHA: number;

	max_hit_points: number;
	hit_dice: string;
	armor_class: number;
	armor_type: string;
	challenge_rating: number;
	speed: number;
	speed_flying: number;
	speed_swimming: number;
	speed_crawling: number;
	passive_perception: number;
	blindsight: number;
	darkvision: number;
	truesight: number;
	tremorsense: number;
	description?: string;
};
