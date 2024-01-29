<!--
======================================================================
Author: meisto
Creation Date: Sun 14 Jan 2024 05:04:09 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { fade } from 'svelte/transition';

	import FancyBox from '$lib/components/FancyBox.svelte';

	import { enemies } from '$lib/stores/enemies';
	import { players } from '$lib/stores/allies';
	import { currentRound } from '$lib/stores/turnorder';

	let activeTab = 0;
</script>

<div class="flex h-full items-center justify-center">
	<FancyBox grow>
		<div class="flex h-full w-[40vw] flex-col items-center items-center justify-between">
			<div class="space-between flex w-full flex-row px-2">
				<button
					class="btn"
					on:click={() => {
						activeTab = Math.max(activeTab - 1, -1);
					}}>l</button
				>
				<div class="grow text-center">
					{$currentRound.elements[$currentRound.index].characterName}
				</div>
				<button
					class="btn"
					on:click={() => {
						activeTab = Math.min(activeTab + 1, 1);
					}}>r</button
				>
			</div>

			{#if activeTab == 0}
				<div
					in:fade={{ duration: 200 }}
					class="flex w-full flex-row flex-wrap items-center justify-center gap-2 overflow-scroll p-4"
				>
					{#each Array.from($players.values()) as char}
						<div
							class="flex flex-row items-center justify-center gap-1 rounded-lg bg-blue-200/50 p-1"
						>
							<input type="checkbox" />
							<div>{char.name}</div>
						</div>
					{/each}
					{#each Array.from($enemies.values()) as char}
						<div
							class="flex flex-row items-center justify-center gap-1 rounded-lg bg-red-200/50 p-1"
						>
							<input type="checkbox" />
							<div>{char.name}</div>
						</div>
					{/each}
				</div>
			{/if}
			{#if activeTab == -1}
				<div
					in:fade={{ duration: 200 }}
					class="flex h-full w-full w-full flex-row flex-wrap items-center justify-center gap-2 overflow-scroll bg-blue-200 p-4"
				></div>
			{/if}
		</div>
	</FancyBox>
</div>
