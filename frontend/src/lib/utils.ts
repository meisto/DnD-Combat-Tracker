// ======================================================================
// Author: meisto
// Creation Date: Sun 14 Jan 2024 03:20:01 AM CET
// Description: -
// ======================================================================
export function isOverflown(element: HTMLElement) {
	return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

export function isScrolledH(element: HTMLDivElement): boolean {
	return element.scrollLeft > 0;
}

export function checkScrollH(element: HTMLDivElement): boolean {
	return element.scrollHeight - element.scrollTop == element.offsetHeight;
}

export function getModifier(abilityScore: number): number {
	if (abilityScore <= 1) return -5;
	if (abilityScore >= 30) return 10;

	return Math.ceil((abilityScore - 1) / 2) - 5;
}

export function formatModifier(modifier: number): string {
	if (modifier < 0) {
		return modifier.toString();
	} else {
		return '+' + modifier.toString();
	}
}
