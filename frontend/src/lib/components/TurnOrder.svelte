<!--
======================================================================
Author: meisto
Creation Date: Fri 12 Jan 2024 01:50:10 AM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { currentRound } from '$lib/stores/turnorder';
	import type { Turn } from '$lib/stores/turnorder';

	import { localization } from '$lib/stores/localization';

	let wrapper: HTMLDivElement;
	let activeCharacter: HTMLDivElement;

	$: if ($currentRound) {
		if (activeCharacter) {
			activeCharacter.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		}
	}

	export const scrollLeft = () => {
		wrapper.scrollBy({ left: -500, top: 0, behavior: 'smooth' });
	};

	export const scrollRight = () => {
		wrapper.scrollBy({ left: 500, top: 0, behavior: 'smooth' });
	};

	const getTurnFormat = (turn: Turn) => {
		let background: string = 'bg-gray-200/30';
		if (turn.position == 'pc') background = 'bg-green-200/50';
		if (turn.position == 'npc') background = 'bg-red-200/50';

		const border = 'border-2 rounded border-black';
		const font = 'font-Gupter text-2xl';

		return `w-32 h-10 flex items-center justify-center ${background} ${border} ${font}`;
	};
</script>

<div
	class="flex h-full w-full flex-row flex-nowrap flex-nowrap items-center justify-center gap-2 overflow-hidden p-1"
>
	<!-- Display current turn -->
	<div
		class="pixel-corners relative h-12 w-16 grow-0 rounded border border-grainbrown bg-tundora text-grainbrown"
	>
		<div class="text-center text-2xl">{$currentRound.number}</div>
		<span class="absolute bottom-1 w-full text-center text-xs font-extrabold"
			>{$localization.turn}</span
		>
	</div>

	{#if $currentRound}
		<!-- Overview -->
		<div
			class="flex h-full grow flex-nowrap justify-between overflow-hidden rounded-lg border border-grainbrown bg-englishwalnut"
		>
			<button
				class="h-full w-8 border-r bg-redwood p-1 text-grainbrown hover:bg-terracotta"
				on:click={scrollLeft}>◀</button
			>
			<div
				class="scrollbar-hide flex h-full flex-nowrap items-center gap-2 overflow-scroll"
				bind:this={wrapper}
			>
				{#each $currentRound.elements as turn, i}
					<div class={getTurnFormat(turn)}>
						{#if $currentRound.index === i}
							<div
								class={'w-44 text-center font-bold text-red-900/80 ' +
									(turn.characterName.length > 10 ? 'text-base leading-4' : 'text-lg')}
								bind:this={activeCharacter}
							>
								{turn.characterName} ({turn.initiative})
							</div>
						{:else}
							<div
								class={'w-44 text-center ' +
									(turn.characterName.length > 10 ? 'text-base leading-4' : 'text-lg')}
							>
								{turn.characterName} ({turn.initiative})
							</div>
						{/if}
					</div>
				{/each}
			</div>
			<button
				class="h-full w-8 border-l bg-redwood p-1 text-grainbrown hover:bg-terracotta"
				on:click={scrollRight}>▶</button
			>
		</div>
	{/if}
</div>

<style>
	/* For Webkit-based browsers (Chrome, Safari and Opera) */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	/* For IE, Edge and Firefox */
	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
