<!-- author: meisto --
<!-- date: 2024-01-25 02:31:42 -->

<script lang="ts">
	import Border from '$lib/svg/cardborder.svg';
	type Item = {
		name: string;
		rarity: string;
		needs_attunement: boolean;
		desc: string;
		worth: number;
		worth_unit: string;
		weight?: number;
	};

	const items: Item[] = [
		{
			name: 'Panzerhandschuhe der Ogermacht',
			rarity: 'Selten',
			needs_attunement: true,
			desc: 'Solange du diese Panzerhandschuhe trägst, wird deine Stärke 19. Wenn deine Stärke bereits 19 oder höher ist haben die Panzerhandschuhe der für dich keinen Effekt.',
			worth: 700,
			worth_unit: 'GS'
		},
		{
			name: 'Stecken der Verteidigung',
			rarity: 'Selten',
			needs_attunement: true,
			desc: 'Bonus von +1 auf deine Rüstungsklasse. Du kannst deine Aktion nutzen um Magierrüstung (1 Ladung) oder Schild (2 Ladungen) zu wirken wenn sich diese in deiner Zauberliste befinden. Es sind keine Komponenten notwendig. Zur Morgendämmerung erhält der Stecken 1W6+4 Ladungen zurück (maximal 10).',
			worth: 700,
			worth_unit: 'GS'
		},
		{
			name: 'Panzerhandschuhe der Ogermacht',
			rarity: 'Selten',
			needs_attunement: false,
			desc: 'Solange du diese Panzerhandschuhe trägst, wird deine Stärke 19. Wenn deine Stärke bereits 19 oder höher ist haben die Panzerhandschuhe der für dich keinen Effekt.',
			worth: 700,
			worth_unit: 'GS'
		},
		{
			name: 'Panzerhandschuhe der Ogermacht',
			rarity: 'Selten',
			needs_attunement: false,
			desc: 'Solange du diese Panzerhandschuhe trägst, wird deine Stärke 19. Wenn deine Stärke bereits 19 oder höher ist haben die Panzerhandschuhe der für dich keinen Effekt.',
			worth: 700,
			worth_unit: 'GS'
		},
		{
			name: 'Panzerhandschuhe der Ogermacht',
			rarity: 'Selten',
			needs_attunement: false,
			desc: 'Solange du diese Panzerhandschuhe trägst, wird deine Stärke 19. Wenn deine Stärke bereits 19 oder höher ist haben die Panzerhandschuhe der für dich keinen Effekt.',
			worth: 700,
			worth_unit: 'GS'
		},
		{
			name: 'Panzerhandschuhe der Ogermacht',
			rarity: 'Selten',
			needs_attunement: false,
			desc: 'Solange du diese Panzerhandschuhe trägst, wird deine Stärke 19. Wenn deine Stärke bereits 19 oder höher ist haben die Panzerhandschuhe der für dich keinen Effekt.',
			worth: 700,
			worth_unit: 'GS'
		},
		{
			name: 'Panzerhandschuhe der Ogermacht',
			rarity: 'Selten',
			needs_attunement: false,
			desc: 'Solange du diese Panzerhandschuhe trägst, wird deine Stärke 19. Wenn deine Stärke bereits 19 oder höher ist haben die Panzerhandschuhe der für dich keinen Effekt.',
			worth: 700,
			worth_unit: 'GS'
		},
		{
			name: 'Panzerhandschuhe der Ogermacht',
			rarity: 'Selten',
			needs_attunement: false,
			desc: 'Solange du diese Panzerhandschuhe trägst, wird deine Stärke 19. Wenn deine Stärke bereits 19 oder höher ist haben die Panzerhandschuhe der für dich keinen Effekt.',
			worth: 700,
			worth_unit: 'GS'
		}
	];
</script>

<div
	style="width: 210mm; height: 295mm; max-width: 210mm; max-height: 295mm"
	class="flex h-full w-full flex-row flex-wrap items-center justify-center gap-0 gap-2 overflow-hidden overflow-hidden bg-white p-0"
>
	{#each items as item}
		<!-- Card -->
		<div class="h-[70mm] w-[100mm] overflow-hidden rounded-lg border-2 border-black p-[1px]">
			<!-- Inner Wrapper -->
			<div class="flex h-full w-full items-center justify-center py-3">
				<img src={Border} alt="" class="absolute h-[69mm] w-[100mm]" />
				<div
					class="flex flex h-[82mm] h-full w-[55mm] w-full flex-col flex-col justify-between gap-1 px-6"
				>
					<div>
						<div class="mx-2 rounded-bl-lg rounded-tr-lg bg-gray-200 text-center">
							{item.name}
						</div>
						<div class="mt-2 flex flex-row items-end justify-between gap-7 text-center">
							<div class="relative grow rounded-bl-lg rounded-tr-lg bg-gray-200 p-1">
								<div class="absolute -top-4 font-SpectralSC text-xs font-bold">Seltenheitsgrad</div>
								{item.rarity}
							</div>
							<div class="flex flex-col items-center gap-1">
								<span class="text-center font-SpectralSC text-xs font-bold leading-none"
									>Einstimmung<br />notwendig?</span
								>
								<div class="flex flex-row items-center justify-center gap-1">
									<span class="font-SpectralSC text-xs font-bold">Ja</span>
									<div class="h-4 w-4 border-2 border-black p-[2px]">
										{#if item.needs_attunement}<div class="h-full w-full bg-black"></div>{/if}
									</div>
									<span class="ml-2 font-SpectralSC text-xs font-bold">Nein</span>
									<div class="h-4 w-4 border-2 border-black p-[2px]">
										{#if !item.needs_attunement}<div class="h-full w-full bg-black"></div>{/if}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="test text-xs">{item.desc}</div>
					<div class="flex w-full flex-row justify-end border-t border-black">
						{#if item.weight != null}<div>
								<span class="font-bold">Gewicht:</span>
								{item.weight}
							</div>{/if}
						<div><span class="font-bold">Wert:</span> {item.worth} {item.worth_unit}</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	* {
		font-family: CrimsonText;
	}
</style>
