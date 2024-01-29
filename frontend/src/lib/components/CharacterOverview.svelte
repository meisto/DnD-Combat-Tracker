<!--
======================================================================
Author: meisto
Creation Date: Wed 10 Jan 2024 05:10:11 PM CET
Description: -
======================================================================
-->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import Box from '$lib/components/SingleBox.svelte';
	import HeadlessBox from '$lib/components/HeadlessBox.svelte';
	import StatusIcon from '$lib/components/icons/StatusIcons.svelte';

	import type { Character } from '$lib/types/character';
	import { getModifier } from '$lib/utils';
	import { statsStore } from '$lib/stores/stats';

	export let character: Character;

	import { localization } from '$lib/stores/localization';

	const formatModifier = (x: number) => {
		const modifier = getModifier(x);

		return modifier >= 0 ? `+${modifier}` : modifier.toString();
	};
</script>

{#if character}
	<div transition:fade class="flex w-full flex-row gap-2">
		<Box title={character.name}>
			<div class="px-2">
				<div class="max-w-fitt p-1 text-center italic">
					<div>{character.race.desc} ({character.race.name})</div>
					<div>
						{#each character.classes as c}{c.name} ({c.level}){/each}, {character.alignment}
					</div>
				</div>

				<div class="mt-1 flex flex-col items-start justify-start gap-2 p-1 md:flex-row">
					<div class="">
						<div>
							<b>{$localization.armorClass}:</b>
							{character.armorClass} ({character.armorType})
						</div>
						<div>
							<b>{$localization.hitPoints}:</b>
							{character.currentHitPoints}/{character.maxHitPoints} (<b>{$localization.hitDice}:</b>
							{character.hitDice})
						</div>
						<div><b>{$localization.speed}:</b> {character.speed}</div>
						{#if character.background}<div>
								<b>{$localization.background}:</b>
								{character.background}
							</div>{/if}
					</div>
				</div>

				<!-- Proficiencies -->
				<div class="w-full">
					<!--<h2 class="text-xl font-bold px-2 border-b-2 text-terracotta/80 border-terracotta">Proficiencies</h2>-->
					<div class="w-full bg-tundora px-3 py-1 font-SpectralSC font-bold text-sugarcane">
						{$localization.proficiencies}
					</div>
					<h3 class="pl-2 italic">+X {$localization.proficiencyBonus}</h3>
					<div class="p-1 px-2">
						<!-- Senses -->
						<div>
							<span
								><b>{$localization.senses}:</b>
								{character.senses.map((s) => `${s.name} (${s.value})`).join(', ')}</span
							>
						</div>

						<!-- Languages -->
						<div>
							<span
								><b>{$localization.languages}:</b>
								{character.proficiencies.languages.join(', ')}</span
							>
						</div>

						<!-- Saving Throws -->
						<div>
							<span
								><b>{$localization.savingThrows}:</b>
								{character.proficiencies.savingThrows.join(', ')}</span
							>
						</div>

						<!-- Weapons -->
						<div>
							<span
								><b>{$localization.weapons}:</b>
								{character.proficiencies.weapons.join(', ')}</span
							>
						</div>

						<!-- Armor -->
						<div>
							<span
								><b>{$localization.armor}:</b>
								{character.proficiencies.armor.join(', ')}</span
							>
						</div>

						<!-- Skills -->
						<div>
							<span
								><b>{$localization.skills}:</b>
								{character.proficiencies.skills.join(', ')}</span
							>
						</div>

						<!-- Tools -->
						<div>
							<span
								><b>{$localization.tools}:</b>
								{character.proficiencies.tools.join(', ')}</span
							>
						</div>
					</div>
				</div>

				<!-- Actions -->
				<div class="my-4">
					<div class="w-full bg-tundora px-3 py-1 font-SpectralSC font-bold text-sugarcane">
						{$localization.actions}
					</div>
					{#each character.actions as action}
						{action}
					{/each}
					{#if character.actions.length <= 0}
						-
					{/if}
				</div>

				<!-- Bonus Actions -->
				<div class="mt-4">
					<div class="w-full bg-tundora px-3 py-1 font-SpectralSC font-bold text-sugarcane">
						{$localization.bonusActions}
					</div>
					{#if character.bonusActions.length > 0}
						{#each character.bonusActions as action}
							{action}
						{/each}
					{:else}
						-
					{/if}
				</div>

				<!-- Options -->
				{#if character.options.length > 0}
					<div class="my-4">
						<h2 class="border-b px-2 text-xl font-bold text-terracotta">Options</h2>
						{#each character.options as option}
							{option}
						{/each}
					</div>
				{/if}
			</div>
		</Box>

		<div class="flex flex-col gap-2">
			<HeadlessBox>
				<!-- Attributes -->
				<div class="grid w-20 grid-cols-1 gap-2 bg-englishwalnut p-1 text-sugarcane">
					<span class="text-center font-SpectralSC leading-5"
						><b>STR</b><br />{character.attributes.STR} ({formatModifier(
							character.attributes.STR
						)})</span
					>
					<span class="text-center font-SpectralSC leading-5"
						><b>DEX</b><br />{character.attributes.DEX} ({formatModifier(
							character.attributes.DEX
						)})</span
					>
					<span class="text-center font-SpectralSC leading-5"
						><b>CON</b><br />{character.attributes.CON} ({formatModifier(
							character.attributes.CON
						)})</span
					>
					<span class="text-center font-SpectralSC leading-5"
						><b>INT</b><br />{character.attributes.INT} ({formatModifier(
							character.attributes.INT
						)})</span
					>
					<span class="text-center font-SpectralSC leading-5"
						><b>WIS</b><br />{character.attributes.WIS} ({formatModifier(
							character.attributes.WIS
						)})</span
					>
					<span class="text-center font-SpectralSC leading-5"
						><b>CHA</b><br />{character.attributes.CHA} ({formatModifier(
							character.attributes.CHA
						)})</span
					>
				</div>
			</HeadlessBox>
			<div class="grid grid-cols-2">
				{#if $statsStore.has(character.id)}
					{#each $statsStore.get(character.id).status as status}
						<StatusIcon {status} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
{/if}
