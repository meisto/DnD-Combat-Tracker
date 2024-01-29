<!--
======================================================================
Author: meisto
Creation Date: Wed 17 Jan 2024 12:35:12 AM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getPlayers, getEnemies, generateCharacters } from './api';

	import type { CharacterSelection } from '$lib/types/character';

	let selectedAllies: Array<CharacterSelection> = [];
	let selectedEnemies: Map<string, number> = new Map();
	let currentEnemy: CharacterSelection | null = null;

	let allAllies: Array<CharacterSelection> = [];
	let allEnemies: Array<CharacterSelection> = [];

	onMount(async () => {
		const sortFn = (a: CharacterSelection, b: CharacterSelection) => (a.name > b.name ? -1 : 1);
		allAllies = (await getPlayers()).sort(sortFn);
		allEnemies = (await getEnemies()).sort(sortFn);
	});

	const handleSubmit = () => {
		const chars = Array.from(selectedEnemies, (entry) => {
			return { name: entry[0], amount: entry[1] };
		});
		generateCharacters(chars).then(() => goto('/initiative'));
	};
</script>

<div class="flex h-fit w-screen flex-col items-center justify-center p-2 pt-8 md:mt-0 md:h-screen">
	<div class="parchment h-fit w-fit rounded-3xl p-2">
		<h1 class="my-4 w-full text-center text-4xl font-bold text-tundora">Select Combatants</h1>
		<form on:submit|preventDefault={handleSubmit} class="flex flex-col items-center gap-2">
			<button type="button" class="btn" on:click={() => alert('Not Implemented')}
				>Load Scenario</button
			>

			<!-- Wrapper -->
			<div class="grid grid-cols-1 md:grid-cols-2">
				<!-- Left column -->
				<div class="flex flex-col items-center">
					<div class="flex flex-row items-center gap-2">
						<button type="button" class="btn" on:click={() => alert('Not Implemented')}
							>Choose Party</button
						>
					</div>

					<div class="h-72 overflow-scroll p-2">
						<table class="table-auto">
							<tbody>
								{#each allAllies as ally}
									<tr>
										<td
											><input
												type="checkbox"
												class="h-8 w-8 shadow ring-2 ring-black checked:shadow-xl"
												value={ally}
												bind:group={selectedAllies}
											/></td
										>
										<td class="w-64 pl-5 text-left font-bold">{ally.name} </td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>

				<!-- Right column -->
				<div class="flex w-full flex-col items-center">
					<div class="flex flex-row items-center gap-2">
						<button type="button" class="btn" on:click={() => alert('Not Implemented')}
							>Choose Preset</button
						>
					</div>
					<div class="h-72 overflow-scroll p-2">
						<table class="w-96 table-auto">
							<tbody>
								{#each selectedEnemies as [enemy, value]}
									<tr>
										<td class="overflow-hidden pl-5 text-left font-bold">{enemy} </td><td> </td><td
											class="w-10 text-center font-bold">{value}</td
										>
										<td class="w-10"
											><button
												type="button"
												class="btn h-full w-10"
												on:click={() => {
													selectedEnemies.set(enemy, value + 1);
													selectedEnemies = selectedEnemies;
												}}>+</button
											></td
										>
										<td class="w-10"
											><button
												type="button"
												class="btn h-full w-full"
												on:click={() => {
													selectedEnemies.set(enemy, Math.max(value - 1, 1));
													selectedEnemies = selectedEnemies;
												}}>-</button
											></td
										>
										<td class="w-10"
											><button
												type="button"
												class="btn h-full w-full"
												on:click={() => {
													selectedEnemies.delete(enemy);
													selectedEnemies = selectedEnemies;
												}}>x</button
											></td
										>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>

					<div class="mt-4 flex w-full flex-row items-center justify-center gap-1">
						<select class="w-64 rounded-lg border" bind:value={currentEnemy}>
							{#each allEnemies as enemy}
								<option value={enemy}>{enemy.name}</option>
							{/each}
						</select>
						<button
							type="button"
							class="btn text-md w-10 font-bold"
							on:click={() => {
								if (currentEnemy != null && !selectedEnemies.has(currentEnemy.name)) {
									selectedEnemies.set(currentEnemy.name, 1);
									selectedEnemies = selectedEnemies;
								}
							}}>+</button
						>
					</div>
				</div>
			</div>
			<div class="mt-3 flex justify-center gap-1">
				<button type="submit" class="btn">Submit</button>
			</div>
		</form>
	</div>
</div>
