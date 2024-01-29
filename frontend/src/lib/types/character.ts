// ======================================================================
// Author: meisto
// Creation Date: Wed 10 Jan 2024 05:16:10 PM CET
// Description: -
// ======================================================================
export type Race = {
	name: string;
	desc: string;
};
export type Class = {
	name: string;
	subclass: string;
	level: number;
};

export type Attributes = {
	STR: number;
	DEX: number;
	CON: number;
	INT: number;
	WIS: number;
	CHA: number;
};

export type Sense = {
	name: string;
	value: number;
	unit?: string;
};

export type Action = {
	name: string;
	desc: string;
};

export type Proficiencies = {
	armor: Array<string>;
	weapons: Array<string>;
	languages: Array<string>;
	savingThrows: Array<string>;
	skills: Array<string>;
	tools: Array<string>;
};

export type Background = string;

export type PlayerCharacter = {
	name: string;
	alignment: string;
	race_name: string;
	background?: string;
	STR: number;
	DEX: number;
	CON: number;
	INT: number;
	WIS: number;
	CHA: number;
	hit_points: number;
	max_hit_points: number;
	temporary_hit_points: number;
	hit_dice: string;
	armor_class: number;
	armor_type: string;
	platinum_pieces: number;
	gold_pieces: number;
	silver_pieces: number;
	copper_pieces: number;
	initiative: number;
	speed_unit: string;
	speed: number;
	speed_flying: number;
	speed_swimming: number;
	speed_crawling: number;
	blindsight: number;
	darkvision: number;
	truesight: number;
	tremorsense: number;
};

export type CharacterSelection = {
	id: string;
	name: string;
	amount?: number;
};
