<!--
======================================================================
Author: meisto
Creation Date: Mon 15 Jan 2024 01:55:39 AM CET
Description: -
======================================================================
-->
<script lang="ts">
	import map from '$lib/assets/maps/test.jpg';

	type Node = {
		x: number;
		y: number;
	};

	let elements: Array<Node> = [{ x: 68.4, y: 61.4 }];
</script>

<div class="wrapper">
	<img alt="The project logo" src={map} style="height: 750px;" />
	{#each elements as element}
		<button
			class="annotation rounded-full border-2 border-black ring-8 ring-black ring-opacity-0"
			style={`top: ${element.y}%; left: ${element.x}%`}
		></button>
	{/each}
</div>

<style>
	.annotation {
		width: 20px;
		height: 20px;
		position: absolute;
		z-index: 10;
		background: #990000;

		transform: translate(-50%, -50%);
	}

	img {
		z-index: 1;
		display: block;
		max-width: 800px;
		max-height: 800px;
		width: auto;
		height: auto;
	}

	.wrapper {
		width: fit-content;
		position: relative;
	}
</style>
