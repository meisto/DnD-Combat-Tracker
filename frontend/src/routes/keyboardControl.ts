// ======================================================================
// Author: meisto
// Creation Date: Mon 22 Jan 2024 02:13:42 AM CET
// Description: -
// ======================================================================
// Handle key presses
// Rump function for bindings
/*
let scrollTurnOrderRight: () => void;
let scrollTurnOrderLeft: () => void;

let centerPaneChangeColumn: (arg0: 'left' | 'right') => void;
let centerPaneNextCharacter: () => void;
let centerPanePrevCharacter: () => void;

let mainMenuNextElement: (arg0?: boolean) => void;
let mainMenuAct: () => void;

let selection = 0;
let controlPanes = ['centerpane', 'turnorder', 'mainmenu'];
*/
/*
   <svelte:window use:keybind={{ handleKey }} />
	function handleKey(combination: KeyCombination) {
		// console.log('Haha:', selection, combination);
		if (combination.alt && combination.key === 'Tab') {
			selection = (selection + 1) % controlPanes.length;
			console.log('New control pane:', controlPanes[selection]);
			return;
		}

		switch (controlPanes[selection]) {
			case 'turnorder':
				switch (combination.key) {
					case 'ArrowRight':
						if (!combination.alt) {
							scrollTurnOrderRight();
						}
						break;
					case 'ArrowLeft':
						if (!combination.alt) {
							scrollTurnOrderLeft();
						}
						break;
				}
				break;
			case 'centerpane':
				switch (combination.key) {
					case 'ArrowRight':
						if (!combination.alt) centerPaneChangeColumn('right');
						break;
					case 'ArrowLeft':
						if (!combination.alt) centerPaneChangeColumn('left');
						break;
					case 'ArrowDown':
						if (!combination.alt) centerPaneNextCharacter();
						break;
					case 'ArrowUp':
						if (!combination.alt) centerPanePrevCharacter();
						break;
				}
				break;
			case 'mainmenu':
				switch (combination.key) {
					case 'ArrowRight':
						if (!combination.alt) mainMenuNextElement(true);
						break;
					case 'Tab':
						if (!combination.alt) {
							mainMenuNextElement(!combination.shift);
						}
						break;
					case 'ArrowLeft':
						if (!combination.alt) mainMenuNextElement(false);
						break;
					case 'Enter':
						if (!combination.alt) mainMenuAct();
						break;
				}
		}
   }
*/
