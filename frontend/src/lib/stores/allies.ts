// ======================================================================
// Author: meisto
// Creation Date: Wed 03 Jan 2024 12:00:10 AM CET
// Description: -
// ======================================================================
import { writable } from 'svelte/store';
import type { PlayerCharacter } from '$lib/types/character';

export const players = writable<PlayerCharacter[]>([]);
