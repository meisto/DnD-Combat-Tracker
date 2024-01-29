// ======================================================================
// Author: meisto
// Creation Date: Fri 05 Jan 2024 01:30:39 AM CET
// Description: -
// ======================================================================
export enum CombatLogEntryType {
	Damage,
	Heal
}

export type CombatLogEntry = {
	source: string;
	targets: Array<string>;
	type: CombatLogEntryType;
	amount: number;
};

export const entries: Array<CombatLogEntry> = [
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Ork 1', targets: ['Ork 1'], type: CombatLogEntryType.Heal, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 },
	{ source: 'Horst', targets: ['Ork 1'], type: CombatLogEntryType.Damage, amount: 999.9 }
];

export const formatTargetList = (targets: Array<string>) => {
	if (targets.length <= 0) return targets[0];

	return targets.join(', ');
};
