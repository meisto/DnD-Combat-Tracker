// ======================================================================
// Author: meisto
// Creation Date: Wed 10 Jan 2024 01:12:17 AM CET
// Description: -
// ======================================================================
import { writable } from 'svelte/store';

export type SelectionMenuEntry = {
	label: string;
	callback: () => void;
};

export type SelectionMenu = {
	selectedItemIndex: number;
	menuItems: Array<SelectionMenuEntry>;
};

export const popupsStore = writable<Array<SelectionMenu>>([
	/*
	{
		selectedItemIndex: 0,
		menuItems: [
			{ label: 'Fight', callback: () => console.log('Fight') },
			{ label: 'Bag', callback: () => console.log('Bag') },
			{ label: 'Animals', callback: () => console.log('Animals') },
			{ label: 'Run', callback: () => console.log('Run') },
			{ label: 'Animals', callback: () => console.log('Animals') },
			{ label: 'Run', callback: () => console.log('Run') }
		]
	},
	{
		selectedItemIndex: 0,
		menuItems: [
			{ label: 'Fight', callback: () => console.log('Fight') },
			{ label: 'Bag', callback: () => console.log('Bag') },
			{ label: 'Animals', callback: () => console.log('Animals') },
			{ label: 'Run', callback: () => console.log('Run') }
		]
	}*/
]);

export const addSelectionMenu = (sm: SelectionMenu) => {
	popupsStore.update((current: Array<SelectionMenu>) => {
		return [...current, sm];
	});
};

export const closeSelectionMenu = () => {
	popupsStore.update((current: Array<SelectionMenu>) => {
		return current.splice(1);
	});
};

export const nextItem = () => {
	popupsStore.update((current: Array<SelectionMenu>) => {
		if (current.length <= 0) return [];

		const active = current[0];
		active.selectedItemIndex = (active.selectedItemIndex + 1) % active.menuItems.length;

		return [active, ...current.slice(1)];
	});
};

export const selectItem = () => {
	popupsStore.update((current: Array<SelectionMenu>) => {
		const active = current[0];

		active.menuItems[active.selectedItemIndex].callback();

		return current.slice(1);
	});
};
