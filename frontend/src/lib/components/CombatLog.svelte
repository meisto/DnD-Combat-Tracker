<!--
======================================================================
Author: meisto
Creation Date: Thu 04 Jan 2024 11:40:53 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import FancyBox from '$lib/components/FancyBox.svelte';
	import { entries, formatTargetList, CombatLogEntryType } from '$lib/types/combatlog';

	import { isOverflown } from '$lib/utils';

	let wrapper: HTMLDivElement;
	let showOverflowIndicator: boolean = false;

	$: if (wrapper) showOverflowIndicator = isOverflown(wrapper);
</script>

<div class="flex h-full w-full flex-col items-center bg-gray-900/80">
	<FancyBox grow>
		<div class="relative h-full">
			<div class="h-full overflow-scroll px-4" bind:this={wrapper}>
				<h1 class="heading w-full text-xl">Combat Log</h1>
				<div class="mb-2 flex flex-col p-1">
					{#each entries as entry}
						{#if entry.type === CombatLogEntryType.Damage}
							<span>
								{entry.source} attacked
								<span class="text-red-500">{formatTargetList(entry.targets)}</span>
								({entry.type}
								{entry.amount})
							</span>
						{:else}
							<span>
								{entry.source} healed
								<span class="text-green-500">{formatTargetList(entry.targets)}</span>
								({entry.type}
								{entry.amount})
							</span>
						{/if}
					{/each}
				</div>
			</div>
			{#if showOverflowIndicator}<div class="absolute bottom-0 left-[50%] -translate-x-2/4">
					▼
				</div>{/if}
		</div>
	</FancyBox>
</div>
