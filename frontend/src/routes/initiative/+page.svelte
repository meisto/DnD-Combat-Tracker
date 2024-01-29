<!--
======================================================================
Author: meisto
Creation Date: Thu 18 Jan 2024 11:12:57 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { goto } from '$app/navigation';

	import { players } from '$lib/stores/allies';
	import { enemies } from '$lib/stores/enemies';

	import { formatModifier, getModifier } from '$lib/utils';
	import { submitData } from './api';
	import type { InitiativeCharInfo } from './api';

	let allyInitiatives: InitiativeCharInfo[] = $players.map((x) => {
		return {
			id: 0,
			dexBonus: getModifier(x.DEX),
			additionalBonus: 0,
			d20Roll: 0,
			individualName: x.name,
			name: x.name
		};
	});
	let enemyInitiatives: InitiativeCharInfo[] = Array.from($enemies.values()).map((x) => {
		return {
			id: 0,
			name: x.name,
			dexBonus: getModifier(x.DEX),
			additionalBonus: 0,
			individualName: x.name
		};
	});

	function enemyRollInitiative(rollAll: boolean = false) {
		const fn = () => Math.ceil(Math.random() * 20);

		if (rollAll) {
			const a = new Set([].map((x) => x.general_name));

			let res: InitiativeCharInfo[] = [];
			let m = new Map();
			for (let a of enemyInitiatives) {
				if (a.name != null) {
					if (!m.has(a.name)) {
						m.set(a.name, fn());
					}
					a.d20Roll = m.get(a.name);
					res.push(a);
				} else {
					a.d20Roll = fn();
					res.push(a);
				}
			}
			enemyInitiatives = res;
		} else {
			enemyInitiatives = enemyInitiatives.map((x) => {
				return { ...x, d20Roll: fn() };
			});
		}
	}

	const handleSubmit = () => {
		// TODO: Security checks (correct value, all set,...)
		submitData(allyInitiatives.concat(enemyInitiatives))
			.then((response) => {
				if (!response.ok) {
					alert('Response not ok.');
				} else {
					goto('/');
				}
			})
			.catch(() => {
				alert('Error while submitting.');
			});
	};
</script>

<div class="flex h-fit w-screen flex-col items-center justify-center p-2 pt-8 md:mt-0 md:h-screen">
	<div class="parchment h-fit w-fit rounded-3xl p-2">
		<h1 class="my-4 w-full text-center text-4xl font-bold">Initiative</h1>
		<form on:submit|preventDefault={handleSubmit} class="grid grid-cols-1 gap-6 p-2 lg:grid-cols-2">
			<!-- Allies -->
			<div class="flex w-[500px] flex-col gap-1">
				<div class="">
					<table>
						<tbody>
							{#each allyInitiatives as ally}
								<tr>
									<td class="w-60 p-2">{ally.name}</td>
									<td class="w-20">
										<input type="number" class="w-20" bind:value={ally.d20Roll} />
									</td>
									<td class="w-12 text-center font-bold">{formatModifier(ally.dexBonus)}</td>
									<td class="w-20 font-bold"
										>{#if ally.d20Roll != null}={ally.d20Roll +
												ally.dexBonus +
												ally.additionalBonus}{:else}-{/if}</td
									>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>

			<!-- Enemies -->
			<div class="flex flex-col gap-1">
				<div class="h-96 overflow-scroll">
					<table>
						<tbody>
							{#each enemyInitiatives as enemy}
								<tr>
									<td class="w-60 p-2">{enemy.name}</td>
									<td class="w-12 text-center">{enemy.d20Roll ? enemy.d20Roll : '-'}</td>
									<td class="w-12 text-center font-bold">{formatModifier(enemy.dexBonus)}</td>
									<td>
										<input type="number" class="w-20" bind:value={enemy.additionalBonus} />
									</td>
									<td class="w-12 text-center font-bold"
										>{#if enemy.d20Roll != null}={enemy.d20Roll +
												enemy.dexBonus +
												enemy.additionalBonus}{:else}-{/if}</td
									>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<div class="flex h-12 w-full flex-row flex-wrap items-center justify-center gap-2">
					<button type="button" class="btn" on:click={() => enemyRollInitiative(false)}
						>Roll Individually</button
					>
					<button type="button" class="btn" on:click={() => enemyRollInitiative(true)}
						>Roll by Creature Type</button
					>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center lg:col-span-2">
				<button type="submit" class="btn" on:click|preventDefault={handleSubmit}>Submit</button>
			</div>
		</form>
	</div>
</div>
