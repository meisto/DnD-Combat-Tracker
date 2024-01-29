<!--
======================================================================
Author: meisto
Creation Date: Thu 11 Jan 2024 06:31:50 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { fly } from 'svelte/transition';
	import Box from '$lib/components/SingleBox.svelte';

	import type { MenuItem } from '$lib/menutree';
	import { getBounds } from '$lib/menutree';

	// Exported property
	export let numberRows: number = 5;

	let lowerBound = 0;
	let upperBound = numberRows;
	let history: Array<MenuItem> = [];
	let node: MenuItem = {
		title: 'Root Menu',
		selection: 0,
		children: [
			{ title: 'Child 1', selection: 0, children: [] },
			{
				title: 'Child 2',
				selection: 0,
				children: [
					{
						title: 'Child 23',
						selection: 0,
						children: [{ title: 'Child 33', selection: 0, children: [] }]
					},
					{ title: 'Child 24', selection: 1, children: [] },
					{ title: 'Child 24', selection: 1, children: [] }
				]
			}
		]
	};

	const nextItem = () => {
		node.selection = (node.selection + 1) % node.children.length;
		// Ugly but needed for reactivity
		node = node;
	};

	const enterItem = () => {
		const selectedNode = node.children[node.selection];
		if (selectedNode.children.length <= 0) {
			// On node with no children use callback
			if (selectedNode.callback) selectedNode.callback();
		} else {
			// Update node on legal target
			history.push(node);
			node = selectedNode;
		}
	};

	const enterParent = () => {
		let popped = history.pop();
		if (popped) node = popped;
	};

	export const goToRoot = () => {
		// Reset menu to root node
		if (history.length > 0) node = history[0];
		lowerBound = 0;
		upperBound = numberRows;
		history = [];
	};

	$: {
		let [numberElementsLeft, numberElementsRight] = getBounds(node, numberRows);

		lowerBound = node.selection - numberElementsLeft;
		upperBound = node.selection + numberElementsRight;
	}
</script>

<button class="m-2 bg-red-300 p-2" on:click={nextItem}>Next Item</button>
<button class="m-2 bg-red-300 p-2" on:click={enterItem}>Enter Item</button>
<button class="m-2 bg-red-300 p-2" on:click={enterParent}>Enter Parent</button>

<div class="flex h-screen w-full items-center justify-center">
	<div class="relative">
		<Box title={node.title}>
			<div class="w-48 px-2">
				{#each node.children as child, index}
					{#if lowerBound <= index && index <= upperBound}
						<div>{index == node.selection ? '▸ ' : '  '} {child.title}</div>
					{/if}
				{/each}
			</div>
		</Box>
		{#if node.children[node.selection].children.length > 0}
			<div class="absolute left-[calc(100%+0.5rem)] top-0" in:fly={{ duration: 10 }}>
				<Box title={node.children[node.selection].title}>
					<div class="w-48">
						{#each node.children[node.selection].children as grandchild}
							<div>{grandchild.title}</div>
						{/each}
					</div>
				</Box>
			</div>
		{/if}
	</div>
</div>
