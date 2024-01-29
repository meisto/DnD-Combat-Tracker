<!--
======================================================================
Author: meisto
Creation Date: Tue 16 Jan 2024 07:07:52 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import Box from '$lib/components/SingleBox.svelte';
	import HeadlessBox from '$lib/components/HeadlessBox.svelte';
	import StatusIcon from '$lib/components/icons/StatusIcons.svelte';

	import type { Enemy } from '$lib/types/enemy';
	import { localization } from '$lib/stores/localization';
	import { statsStore } from '$lib/stores/stats';

	import { getModifier } from '$lib/utils';

	export let enemy: Enemy;

	const formatModifier = (x: number) => {
		const modifier = getModifier(x);

		return modifier >= 0 ? `+${modifier}` : modifier.toString();
	};
</script>

{#if enemy}
	<div transition:fade class="flex w-full flex-row gap-2">
		<Box title={enemy.name}>
			<p class="px-2">
				<i class="font-small">{0} ({0}), {0}</i><br />
				<b>{$localization.armorClass}:</b>
				{enemy.armor_class} ({enemy.armor_type})<br />
				<b>{$localization.hitPoints}:</b>
				{0}/{enemy.max_hit_points}<br />
				<b>{$localization.speed}:</b>
				{0}<br />
			</p>
			<!--<hr class="border-tundora mx-3">-->
			<h2 class="mt-4 bg-tundora pl-4 font-bold text-grainbrown">{$localization.proficiencies}</h2>
			<p class="px-2">
				<b>{$localization.savingThrows}:</b>
				{0}<br />
				<b>{$localization.skills}:</b>
				{0}<br />
				Immunities<br />
				<b>{$localization.senses}:</b>
				{0}<br />
				<b>{$localization.languages}:</b>
				{0}<br />
				<b>{$localization.challengeRating}:</b>
				{0} ({0}
				{$localization.xp})<br />
			</p>

			<!--
				<h2 class="mt-4 bg-tundora text-grainbrown pl-4 font-bold">Traits</h2>
				<p class="px-2">
					{#each [] as trait}
						<b class="mr-1">{0}: </b>{0}<br />
					{/each}
</p>
-->

			<h2 class="mt-4 bg-tundora pl-4 font-bold text-grainbrown">{$localization.actions}</h2>
			<p class="px-2 leading-6">
				<!-- TODO -->
				<b class="mr-1">{0}: </b>{0}<br /><br />
			</p>

			<!--
				<h2 class="mt-4 bg-tundora text-grainbrown pl-4 font-bold">{$localization.bonusAction}</h2>
				<p>
						<b class="mr-1">{0}: </b>{0}<br />
</p>
-->
		</Box>
		<div class="flex flex-col gap-2">
			<HeadlessBox>
				<!-- Attributes -->
				<div class="grid w-20 grid-cols-1 gap-2 bg-englishwalnut p-1 text-sugarcane">
					<span class="text-center leading-5"
						><b>STR</b><br />{enemy.STR} ({formatModifier(enemy.STR)})</span
					>
					<span class="text-center leading-5"
						><b>DEX</b><br />{enemy.DEX} ({formatModifier(enemy.DEX)})</span
					>
					<span class="text-center leading-5"
						><b>CON</b><br />{enemy.CON} ({formatModifier(enemy.CON)})</span
					>
					<span class="text-center leading-5"
						><b>INT</b><br />{enemy.INT} ({formatModifier(enemy.INT)})</span
					>
					<span class="text-center leading-5"
						><b>WIS</b><br />{enemy.WIS} ({formatModifier(enemy.WIS)})</span
					>
					<span class="text-center leading-5"
						><b>CHA</b><br />{enemy.CHA} ({formatModifier(enemy.CHA)})</span
					>
				</div>
			</HeadlessBox>
			<div class="grid grid-cols-2">
				{#if $statsStore.has(enemy.name)}
					{#each [] as status}
						<StatusIcon {status} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
{/if}
