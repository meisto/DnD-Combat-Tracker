<!--
======================================================================
Author: meisto
Creation Date: Sun 14 Jan 2024 03:52:35 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	import { players } from '$lib/stores/allies';
	import { enemies, enemyInstances } from '$lib/stores/enemies';

	import PlayerLine from '$lib/components/PlayerLine.svelte';
	import EnemyLine from '$lib/components/EnemyLine.svelte';

	let column: boolean = false;
	let index: number = 0;

	export const changeColumn = (direction: 'left' | 'right') => {
		if (!column && direction === 'left') {
			column = true;
			index = 0;
		}
		if (column && direction === 'right') {
			column = false;
			index = 0;
		}
	};
</script>

<div class="flex h-full w-full flex-row">
	<!-- Turn Sequence Overview -->
	<div class="flex w-2/5 flex-col items-start justify-start gap-4 p-3">
		{#each $players as c, i (c)}
			<button
				animate:flip={{ delay: 300 }}
				in:fade={{ duration: 200 }}
				out:fade={{ duration: 200 }}
				class={'h-24 w-full select-none transition-transform' +
					(column && index == i ? ' translate-x-8' : '')}
				on:click={() => {
					column = true;
					index = i;
				}}
			>
				<PlayerLine bind:character={c} />
			</button>
		{/each}
	</div>

	<div class="h-full w-2/3 p-8">
		<!-- Character Information -->
		<!--<PlayerOverview bind:character={$characters[index]} />-->
		<!--<EnemyOverview bind:enemy={$enemies[index]} />-->
	</div>

	<!-- Turn Sequence Overview -->
	<div class="flex h-full w-2/5 grow-0 flex-col items-end justify-start gap-4 overflow-scroll p-3">
		{#each $enemyInstances as c, i (i)}
			<button
				animate:flip={{ delay: 300 }}
				in:fade={{ duration: 200 }}
				out:fade={{ duration: 200 }}
				class={'select-none transition-transform' +
					(!column && index == i ? ' -translate-x-8' : '')}
				on:click={() => {
					column = false;
					index = i;
				}}
			>
				<EnemyLine bind:character={c} baseEnemy={$enemies.get(c.general_name)} />
			</button>
		{/each}
	</div>
</div>
