<!--
======================================================================
Author: meisto
Creation Date: Tue 09 Jan 2024 05:13:39 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import FancyBox from '$lib/components/FancyBox.svelte';
	import { popupsStore } from '$lib/stores/popups';
</script>

<div class="h-full h-full w-full bg-black/50">
	<FancyBox>
		<div class="grid grid-cols-2 p-3">
			{#each $popupsStore[0].menuItems as item, index}
				<div class="pl-4">
					<div class="inline-block w-4 font-bold">
						{index == $popupsStore[0].selectedItemIndex ? '⯈' : ''}
					</div>
					<span>{item.label}</span>
				</div>
			{/each}
		</div>
	</FancyBox>
</div>
