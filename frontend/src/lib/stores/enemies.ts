// ======================================================================
// Author: meisto
// Creation Date: Wed 03 Jan 2024 12:00:10 AM CET
// Description: -
// ======================================================================
import { writable } from 'svelte/store';
import type { Enemy, EnemyInstance } from '$lib/types/enemy';

export const enemies = writable<Map<string, Enemy>>(new Map());
export const enemyInstances = writable<EnemyInstance[]>([]);
