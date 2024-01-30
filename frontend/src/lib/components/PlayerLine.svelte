<script lang="ts">
	import type { PlayerCharacter } from '$lib/types/character';

	import FancyBox from '$lib/components/FancyBox.svelte';

	export let character: PlayerCharacter;

	let barWidth: number = 100;
	$: barWidth = Math.round((character.hit_points / character.max_hit_points) * 100);

	const getBarStyle = () => {
		let color = 'green';
		if (barWidth < 0.6 * 100) color = 'yellow';
		if (barWidth < 0.3 * 100) color = 'red';

		return `width: ${barWidth.toString()}%; background: ${color}`;
	};
</script>

<div class={(barWidth <= 0 ? 'opacity-30 ' : '') + 'h-full w-full'}>
	<FancyBox>
		<div
			class="flex h-20 w-[450px] flex-row flex-nowrap items-center justify-center gap-1 px-4 font-SpectralSC"
		>
			<div class="flex flex-col gap-0">
				<span class="w-40 text-left font-CrimsonText text-lg font-bold drop-shadow-2xl">
					{character.name}
				</span>
				<span class="text-left font-CrimsonText text-sm italic text-grainbrown/25">
					{character.race_name}, {'class placeholder'}
				</span>
			</div>
			<div class="relative mx-2 flex flex-col">
				<div class="flex flex-row justify-between">
					<span class="italic text-grainbrown/20">♥HP</span>
					<div>
						<span class="font-bold text-grainbrown">{character.hit_points}</span>
						<span class="inline">/</span>
						<span class="inline text-grainbrown/20">{character.max_hit_points}</span>
					</div>
				</div>
				<div class="h-2 w-32 border border-black border-opacity-10 bg-black/30">
					<div style={getBarStyle()} class="h-full"></div>
				</div>
			</div>
			<div class="relative rounded-sm">
				<div class="p-2 text-center text-2xl">{character.armor_class}</div>
				<span class="absolute -bottom-1 left-0 w-full text-center text-xs font-extrabold">AC</span>
			</div>
			<div class="relative rounded-sm">
            <div class="p-2 text-center text-2xl">{character.passive_perception}</div>
				<span class="absolute -bottom-1 left-0 w-full text-center text-xs font-extrabold">PP</span>
			</div>
		</div>
	</FancyBox>
</div>
