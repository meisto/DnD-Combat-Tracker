<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { loadData } from './api';

	import CombatLog from '$lib/components/CombatLog.svelte';
	import TurnOrder from '$lib/components/TurnOrder.svelte';
	import CenterPane from '$lib/components/CenterPane.svelte';
	import MainMenu from '$lib/components/MainMenu.svelte';

	let promise: Promise<void[]> = Promise.resolve([]);

	onMount(loadData);
</script>

{#await promise}
	<div>Fetching Data....</div>
{:then}
	<div
		class="grid h-screen w-screen grid-rows-[5%_75%_20%]"
		transition:fade={{ duration: 500 }}
	>
		<!-- Turn Order -->
		<TurnOrder />

		<!-- Central Pane -->
		<CenterPane />

		<!-- CombatLog -->
		<div class="flex flex-row gap-2">
			<CombatLog />
			<MainMenu />
		</div>
	</div>
{/await}
