<!--
======================================================================
Author: meisto
Creation Date: Wed 17 Jan 2024 04:40:27 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	// import Compass from "$lib/components/Compass.svelte"

	const blue1: string = '#445571';
	const blue2: string = '#3A4860';
	const blue3: string = '#F4F1D0';

	type Point = { x: number; y: number };

	const radius: number = 50;
	const center: Point = { x: 50, y: 50 };

	const t: number = Math.sqrt(radius ** 2 / 2);

	const squareTL: Point = { x: center.x - t, y: center.y - t };

	let trianglePoints = `${center.x},${center.y - t} ${center.x - t},${center.y + t} ${
		center.x + t
	}, ${center.y + t}`;

	let enabled: boolean = true;
</script>

{#if enabled}
	<div class="absolute left-1/2 top-1/2">
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="h-48 w-48">
			<circle cx={center.x} cy={center.y} r={radius} fill={blue1} class="el1" />
			<rect x={squareTL.x} y={squareTL.y} width={2 * t} height={2 * t} fill={blue2} class="el2" />
			<polygon points={trianglePoints} fill={blue3} class="el3" />
		</svg>
	</div>
{/if}

<style>
	.el1 {
		opacity: 0;
		transform: scale(0);
		animation-name: test;
		animation-delay: 0;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: forwards;
		transform-origin: center;
	}

	.el2 {
		opacity: 0;
		transform: scale(0);
		animation-name: test;
		animation-delay: 0.25s;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: forwards;
		transform-origin: center;
	}
	.el3 {
		opacity: 0;
		transform: scale(0);
		animation-name: test;
		animation-delay: 0.5s;
		animation-duration: 0.5s;
		animation-timing-function: ease-in-out;
		animation-iteration-count: 1;
		animation-direction: normal;
		animation-fill-mode: forwards;
		transform-origin: center;
	}

	@keyframes test {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
