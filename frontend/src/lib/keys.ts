// ======================================================================
// Author: meisto
// Creation Date: Tue 09 Jan 2024 04:42:36 PM CET
// Description: -
// ======================================================================
import type { KeyCombination } from '$lib/types/keycombination';

type Options = {
	handleKey: (arg0: KeyCombination) => void;
};

export function keybind(element: HTMLElement, options: Options) {
	console.log('Bound action with element', element);
	let { handleKey } = options;

	let is_ctrl_down = false;
	let is_alt_down = false;
	let is_shift_down: boolean = false;

	function on_key_down(event: KeyboardEvent) {
		if (event.repeat) return;

		console.log(event);

		switch (event.key) {
			case 'Control':
				is_ctrl_down = true;
				event.preventDefault();
				break;

			case 'Alt':
				is_alt_down = true;
				event.preventDefault();
				break;

			case 'Shift':
				is_shift_down = true;
				event.preventDefault();
				break;

			default:
				// Catch only legal keys
				if (
					['Tab', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)
				) {
					handleKey({ key: event.key, ctrl: is_ctrl_down, alt: is_alt_down, shift: is_shift_down });
					event.preventDefault();
				}
				break;
		}
	}

	function on_key_up(event: KeyboardEvent) {
		switch (event.key) {
			case 'Control':
				is_ctrl_down = false;
				event.preventDefault();
				break;

			case 'Alt':
				is_alt_down = false;
				event.preventDefault();
				break;

			case 'Shift':
				is_shift_down = false;
				event.preventDefault();
				break;
		}
	}

	window.addEventListener('keydown', on_key_down);
	window.addEventListener('keyup', on_key_up);

	return {
		destroy() {
			window.removeEventListener('keydown', on_key_down);
			window.removeEventListener('keyup', on_key_up);
		},

		update(options: Options) {
			// Implement Reactive Options. This function is called when an option changes.
			({ handleKey } = options);
		}
	};
}
