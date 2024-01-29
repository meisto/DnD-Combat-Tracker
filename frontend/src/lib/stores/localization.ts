// ======================================================================
// Author: meisto
// Creation Date: Tue 16 Jan 2024 04:21:45 PM CET
// Description: -
// ======================================================================
import { writable } from 'svelte/store';
import type { Localization } from '$lib/types/localization';

import { en } from '$lib/localization/en';
import { de } from '$lib/localization/de';

export const localization = writable<Localization>(de);

export function setLanguage(lang: 'en' | 'de') {
	switch (lang) {
		case 'en':
			localization.update(() => {
				return en;
			});
			break;
		case 'de':
			localization.update(() => {
				return de;
			});
			break;
	}
}
