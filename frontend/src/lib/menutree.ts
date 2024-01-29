// ======================================================================
// Author: meisto
// Creation Date: Thu 11 Jan 2024 06:37:00 PM CET
// Description: -
// ======================================================================
export type MenuItem = {
	title: string | (() => string);
	selection: number;
	children: Array<MenuItem>;
	callback?: () => void;
};

export function getBounds(item: MenuItem, numberRows: number): [number, number] {
	if (item.children.length <= 0) return [0, 0];

	const isEven = (numberRows - 1) % 2 == 0;
	const l = item.children.length;

	let numberElementsLeft = isEven ? (numberRows - 1) / 2 : (numberRows - 2) / 2 + 1;
	let numberElementsRight = isEven ? (numberRows - 1) / 2 : (numberRows - 2) / 2;

	// Rebalance values on list edges
	if (item.selection + numberElementsRight >= l) {
		numberElementsRight = l - 1 - item.selection;
		numberElementsLeft = numberRows - numberElementsRight - 1;
	} else if (item.selection - numberElementsLeft < 0) {
		numberElementsLeft = item.selection;
		numberElementsRight = numberRows - numberElementsLeft - 1;
	}

	return [numberElementsLeft, numberElementsRight];
}
