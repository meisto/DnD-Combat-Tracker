<!--
======================================================================
Author: meisto
Creation Date: Mon 22 Jan 2024 11:41:52 AM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import Box from '$lib/components/SingleBox.svelte';
	import { conditions } from '$lib/conditions';
	import { players } from '$lib/stores/allies';
	import { enemies } from '$lib/stores/enemies';

	// Exported property
	export let showMenu: boolean = true;

	let damage: number = 0;
	let healing: number = 0;
	let status: string[] = [];
	let targets: string[] = [];
	let note: string = '';

	// Local attributes

	let categories: string[] = ['damage', 'healing', 'status', 'targets', 'note'];
	let activeCategory = 0;

	// This function needs all these paramters for reactivity
	const getTitle = (
		category: string,
		damage: number,
		healing: number,
		status: string[],
		targets: string[],
		note: string
	): string => {
		switch (category) {
			case 'damage': {
				return `Damage (${damage})`;
			}
			case 'healing':
				return `Healing (${healing})`;
			case 'status':
				return `Status (${status.length})`;
			case 'targets':
				return `Targets (${targets.length})`;
			case 'note':
				return `Notes (${note.length})`;
			default: {
				return 'unknown';
			}
		}
	};

	function on_key_down(event: KeyboardEvent) {
		if (event.repeat) return;

		switch (event.key) {
			case 'Tab':
				event.preventDefault();
				activeCategory = (activeCategory + 1) % categories.length;
				break;
		}
	}
</script>

<svelte:window on:keydown={on_key_down} />

<div class="flex h-screen w-full items-center justify-center">
	<div class="relative">
		<Box title="Kategorien">
			<div class="flex w-48 flex-col px-2">
				{#each categories as cat, index}
					<button class="w-full text-left" on:click={() => (activeCategory = index)}>
						{index == activeCategory ? '▸ ' : '  '}
						{getTitle(cat, damage, healing, status, targets, note)}
					</button>
				{/each}
				<button class="w-full text-left" on:click={() => (showMenu = false)}>Confirm</button>
			</div>
		</Box>
		<div class="absolute left-[calc(100%+0.5rem)] top-0" in:fly={{ duration: 10 }}>
			{#if categories[activeCategory] === 'damage'}
				<Box title="Schaden">
					<div class="flex w-48 flex-row flex-wrap justify-center gap-2 p-2">
						<input
							type="number"
							class="w-full bg-transparent focus:ring-englishwalnut"
							bind:value={damage}
						/>
						<button class="btn" on:click={() => (damage += 10)}>+10</button>
						<button class="btn" on:click={() => (damage += 5)}>+5</button>
						<button class="btn" on:click={() => (damage += 1)}>+1</button>
						<button class="btn" on:click={() => (damage -= 1)}>-1</button>
						<button class="btn" on:click={() => (damage -= 5)}>-5</button>
						<button class="btn" on:click={() => (damage -= 10)}>-10</button>
					</div>
				</Box>
			{:else if categories[activeCategory] == 'healing'}
				<Box title="Heilung">
					<div class="flex w-48 flex-row flex-wrap justify-center gap-2 p-2">
						<input
							type="number"
							class="w-full bg-transparent focus:ring-englishwalnut"
							bind:value={healing}
						/>
						<button class="btn" on:click={() => (healing += 10)}>+10</button>
						<button class="btn" on:click={() => (healing += 5)}>+5</button>
						<button class="btn" on:click={() => (healing += 1)}>+1</button>
						<button class="btn" on:click={() => (healing -= 1)}>-1</button>
						<button class="btn" on:click={() => (healing -= 5)}>-5</button>
						<button class="btn" on:click={() => (healing -= 10)}>-10</button>
					</div>
				</Box>
			{:else if categories[activeCategory] == 'status'}
				<Box title="Status">
					<div class="flex w-48 flex-col p-2">
						{#each conditions as c}
							<label class="flex w-full select-none items-center gap-2"
								><input type="checkbox" bind:group={status} value={c} />{c}</label
							>
						{/each}
					</div>
				</Box>
			{:else if categories[activeCategory] == 'targets'}
				<Box title="Ziele">
					<div class="flex w-48 flex-col p-2">
						{#each Array.from($enemies.values()) as e}
							<label class="flex w-full select-none items-center gap-2"
								><input type="checkbox" bind:group={targets} value={e.name} />{e.name}</label
							>
						{/each}
						{#each $players as c}
							<label class="flex w-full select-none items-center gap-2"
								><input type="checkbox" bind:group={targets} value={c.name} />{c.name}</label
							>
						{/each}
					</div>
				</Box>
			{:else if categories[activeCategory] == 'note'}
				<Box title="Status">
					<div class="flex w-48 flex-col p-2">
						<textarea class="bg-transparent" rows="7" bind:value={note} />
					</div>
				</Box>
			{/if}
		</div>
		<div></div>
	</div>
</div>
