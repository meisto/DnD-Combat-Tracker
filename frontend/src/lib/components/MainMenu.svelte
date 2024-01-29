<!--
======================================================================
Author: meisto
Creation Date: Sun 14 Jan 2024 05:04:09 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { nextTurn } from '$lib/stores/turnorder';

	import FancyBox from '$lib/components/FancyBox.svelte';
	import ActionMenu from '$lib/components/ActionMenu.svelte';

	type entry = { label: string; callback: () => void };

	let selection = 0;
	let actionModalOpen: boolean = false;

	let entries: Array<entry> = [
		{
			label: 'Aktion',
			callback: () => {
				console.log('Fight');
				actionModalOpen = true;
			}
		},
		{
			label: 'Bonusaktion',
			callback: () => {
				console.log('Pokemon');
			}
		},
		{
			label: 'Status zufügen',
			callback: () => {}
		},
		{
			label: 'Status entfernen',
			callback: () => {}
		},
		{
			label: 'Nächster Zug',
			callback: () => {
				nextTurn();
				selection = 0;
			}
		}
	];

	export const nextSelection = (forward: boolean = true) => {
		if (forward) {
			selection = (selection + 1) % entries.length;
		} else {
			selection = (selection + entries.length - 1) % entries.length;
		}
	};
</script>

{#if actionModalOpen}
	<div
		transition:fade={{ duration: 100 }}
		class="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-tundora/80 backdrop-blur-sm"
	>
		<button
			class="btn absolute right-2 top-2"
			on:click={() => {
				actionModalOpen = false;
			}}>X</button
		>
		<ActionMenu bind:showMenu={actionModalOpen} />
	</div>
{/if}

<div class="flex h-full items-center justify-center">
	<FancyBox grow>
		<div class="flex h-full w-60 items-center items-center justify-center">
			<div class="flex flex-col">
				{#each entries as e, i}
					<button
						class="flex flex-row gap-1 rounded-lg p-1 transition hover:bg-terracotta/20"
						on:click={e.callback}
					>
						<span class="inline-block font-bold"> {i == selection ? '⯈' : ' '} </span>
						<span>{e.label} </span>
					</button>
				{/each}
			</div>
		</div>
	</FancyBox>
</div>
