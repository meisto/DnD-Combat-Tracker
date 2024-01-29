<!--
======================================================================
Author: meisto
Creation Date: Thu 04 Jan 2024 11:40:53 PM CET
Description: -
======================================================================
-->

<script lang="ts">
	import FancyBox from '$lib/components/FancyBox.svelte';

	type Category = {
		name: string;
		elements: Array<Element>;
	};

	type Element = {
		name: string;
		weight: number;
		amount: number;
	};

	const xElements = [
		{ name: 'First', weight: 12.3, amount: 12 },
		{ name: 'Second', weight: 0.1, amount: 8 },
		{ name: 'Third', weight: 3.09, amount: 99 },
		{ name: 'Fourth', weight: 123, amount: 1 },
		{ name: 'Fifth', weight: 12, amount: 2 }
	];

	const data: Array<Category> = [
		{ name: 'Bewaffnung', elements: xElements },
		{ name: 'Rüstung', elements: xElements },
		{ name: 'Category 3', elements: xElements },
		{ name: 'Category 4', elements: xElements },
		{ name: 'Category 5', elements: xElements }
	];

	let selectedCategory: number = 0;
	let selectedElement: number = 0;

	const nextCategory = () => {
		if (selectedCategory + 1 >= data.length) {
			selectedCategory = 0;
		} else {
			selectedCategory += 1;
		}
		selectedElement = 0;
	};

	$: {
		console.log(selectedElement);
		if (binding) binding.scrollIntoView({ behavior: 'smooth' });
	}

	const nextElement = () => {
		if (selectedElement + 1 >= data[selectedCategory].elements.length) {
			selectedElement = 0;
		} else {
			selectedElement += 1;
		}
	};

	let binding: HTMLDivElement;
</script>

<button on:click={nextElement}>Next Element</button>
<button on:click={nextCategory}>Next Category</button>

<div class="bg-gray-0 h-full w-full">
	<FancyBox>
		<div class="max-h-96 overflow-scroll p-2">
			<!--<div class="max-h-48 overflow-scroll">-->
			{#each data as category, categoryIndex}
				<h1 class="w-full text-center font-Rakkas text-xl font-bold">{category.name}</h1>
				<table class="mb-8 w-full">
					<!--<tr><th>Kategorie</th><th>Objekt</th></tr>-->
					<tr>
						<th class="border-8 border-transparent text-left">Kategorie</th>
						<th class="border-8 border-transparent text-left">Gewicht</th>
						<th class="border-8 border-transparent text-left">Anzahl</th>
					</tr>
					{#each category.elements as element, elementIndex}
						{#if categoryIndex == selectedCategory && elementIndex == selectedElement}
							<tr bind:this={binding} class="bg-gradient-to-r from-gray-500/80">
								<td class="p-1 pl-2">{element.name}</td>
								<td class="w-2 px-1 pr-8">{element.weight}</td>
								<td class="w-2 px-1 pr-8">{element.amount}</td>
							</tr>
						{:else}
							<tr>
								<td class="p-1 pl-2">{element.name}</td>
								<td class="w-2 px-1 pr-8">{element.weight}</td>
								<td class="w-2 px-1 pr-8">{element.amount}</td>
							</tr>
						{/if}
					{/each}
				</table>
			{/each}
		</div>
	</FancyBox>
</div>
